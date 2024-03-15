import React, { useState } from "react";
import Header from "../../Components/Header/Header";
import "./FindBus.css";
import RouteList from "../../Components/RouteList/RouteList";
import { searchBusApi } from "../../../SERVICES/AllAPI";
import { Button } from "react-bootstrap";

function Findbus() {
  const [searchResult, setSearchResult] = useState([]);
  const [searchInput, setSearchInput] = useState({
    starts_from: "",
    ends_at: "",
  });

  const token = localStorage.getItem("token");
  const header = {
    Authorization: `Token ${token}`,
  };

  const searchBus = async (e) => {
    e.preventDefault();
    const response = await searchBusApi(searchInput, header);
    console.log(response);
    setSearchResult(response.data)
  };
  console.log(searchInput);
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
              onChange={(e) =>
                setSearchInput({ ...searchInput, starts_from: e.target.value })
              }
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
              onChange={(e) =>
                setSearchInput({ ...searchInput, ends_at: e.target.value })
              }
            />
          </div>
          <div className="text-end mt-3">
            <button onClick={searchBus} className=" pe-5">
              Search{" "}
            </button>
          </div>
        </div>
      </div>

      {<RouteList></RouteList>}
    </>
  );
}

export default Findbus;
