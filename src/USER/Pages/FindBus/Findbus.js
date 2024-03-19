import React, { useEffect, useState } from "react";
import Header from "../../Components/Header/Header";
import "./FindBus.css";
import RouteList from "../../Components/RouteList/RouteList";
import { Button } from "react-bootstrap";
import axios from "axios";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import StopList from "../../Components/StopList/StopList";

function Findbus() {
  const [searchResult, setSearchResult] = useState([]);
  const [searchInput, setSearchInput] = useState({
    starts_from: "",
    ends_at: "",
  });

  const [allRoutes, setAllRoutes] = useState([]);
  const [token, setToken] = useState("");

  const getAllRoutes = async (token) => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/passengerapi/route/`,
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );
      console.log(response.data);
      setAllRoutes(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const searchBus = () => {
    const result = allRoutes.filter(
      (i) =>
        i.route.starts_from
          .trim()
          .toLowerCase()
          .includes(searchInput.starts_from.trim().toLowerCase()) &&
        i.route.ends_at
          .trim()
          .toLowerCase()
          .includes(searchInput.ends_at.trim().toLowerCase())
    );
    setSearchResult(result);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    setToken(token);
    getAllRoutes(token);
  }, []);

  return (
    <>
      <Header></Header>
      <div className="findbusBody mt-5">
        <div className="input text-center w-75">
          <div className="d-flex">
            <i
              className="fa-solid fa-circle-dot locationIcon fs-3 m-3 "
              style={{ color: "#FF4B2B" }}
            ></i>
            <input
              type="text"
              placeholder="Your Location"
              className="form-control shadow"
              value={searchInput.starts_from}
              onChange={(e) => {
                setSearchInput({ ...searchInput, starts_from: e.target.value });
                searchBus();
              }}
            />
          </div>
          <br />
          <div className="d-flex">
            <i
              className="fa-solid fa-location-dot locationIcon fs-3 m-3 "
              style={{ color: "#FF416C" }}
            ></i>
            <input
              type="text"
              placeholder="Choose Destination"
              className="form-control shadow"
              value={searchInput.ends_at}
              onChange={(e) => {
                setSearchInput({ ...searchInput, ends_at: e.target.value });
                searchBus();
              }}
            />
          </div>
        </div>
      </div>
      {searchInput.starts_from.trim() === "" && searchInput.ends_at.trim() === "" ? (
        <RouteList></RouteList>
      ) : searchResult && searchResult.length > 0 ? (
        <>
          <h2 className="mt-5 nearbusHead">Search Result</h2>
          <div className="m-5">
            <div className="bustopBody text-center">
              {searchResult.map((i, index) => (
                <div key={i.id} className="ps-5 w-100">
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      id="panel1-header"
                      className="d-flex"
                      style={{ width: "100%", justifyContent: "space-between" }}
                    >
                      <div style={{ display: "flex", width: "100%" }}>
                        <img
                          className="bustopLogo"
                          src="https://i.postimg.cc/DwB1WWDp/bus-station.png"
                          alt=""
                        />
                        <div className="ms-5 catDiv pt-2">{i.buscategory}</div>
                        <h3
                          style={{ textTransform: "capitalize" }}
                          className="ms-4"
                        >
                          {i?.route.name}
                        </h3>
                        <div className="ms-auto text-end me-5 pe-5">
                          <b> Starts From : </b> {i.route.starts_from} <br />
                          <b> Ends At : </b> {i.route.ends_at}
                        </div>
                      </div>
                    </AccordionSummary>
                    <AccordionDetails>
                      <div>
                        <StopList id={i.id}></StopList>
                      </div>
                    </AccordionDetails>
                  </Accordion>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <h2 className="mt-5 nearbusHead">No Routes Found</h2>
      )}
    </>
  );
}

export default Findbus;
