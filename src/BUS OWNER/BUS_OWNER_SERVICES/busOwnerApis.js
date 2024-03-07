import { BASE_URL } from "../../SERVICES/Base_Url"
import { commonApi } from "../../SERVICES/CommonAPI"

//get buses of specific owner
export const getOwnerBusesApi = async (headers) => {
    return await commonApi('GET', `${BASE_URL}owner/bus/`, "", headers)
}

//get drivers of specific owner busdriver
export const getOwnerDriversApi = async (headers) => {
    return await commonApi('GET', `${BASE_URL}owner/busdriver/`, "", headers)
}

//bus owner registration
export const busOwnerRegistrationApi = async (formdata, headers) => {
    return await commonApi('POST', `${BASE_URL}Admin/register/`, formdata, headers)
}
//add bus
export const addBusApi = async (body, headers) => {
    return await commonApi('POST', `${BASE_URL}owner/bus/`, body, headers)
}
// add driver 
export const addDriverApi = async (body, headers) => {
    return await commonApi('POST', `${BASE_URL}owner/busdriver/`, body, headers)
}
