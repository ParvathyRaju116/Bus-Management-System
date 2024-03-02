
import { BASE_URL } from "./Base_Url";
import { commonApi } from "./CommonAPI";

// api for user registration
export const registerApi=async(body)=>{
    return await commonApi('POST',`${BASE_URL}passenger/register/`,body,"")
}

// login api
export const loginApi=async(body)=>{
  return await commonApi('POST',`${BASE_URL}passenger/token/`,body,"")
}

// register for bus owner
export const busOwnerregisterApi=async(body)=>{
  return await commonApi('POST',`${BASE_URL}owner/register/`,body,"")
}

// login for bus owner
export const busOwnerloginApi=async(body)=>{
  return await commonApi('POST',`${BASE_URL}owner/token/`,body,"")
}
