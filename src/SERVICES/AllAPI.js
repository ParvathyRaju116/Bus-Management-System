
import { BASE_URL } from "./Base_Url";
import { commonApi } from "./CommonAPI";


// USERS
// api for user registration
export const registerApi=async(body)=>{
    return await commonApi('POST',`${BASE_URL}passenger/register/`,body,"")
}

// login api
export const loginApi=async(body)=>{
  return await commonApi('POST',`${BASE_URL}passenger/token/`,body,"")
}
// ___________________________________________________________________________________________________________________________________________________________________________


// ADMIN

// api for admin login
export const AdminLoginApi=async(body)=>{
  return await commonApi('POST',`${BASE_URL}Admin/token/`,body,"")
}

// api for list bus owners
export const busOwnerViewApi=async(headers)=>{
  return await commonApi('GET',`${BASE_URL}Admin/ownerview/`,"",headers)
}

// api for list bus users
export const passengerviewApi=async(headers)=>{
  return await commonApi('GET',`${BASE_URL}Admin/passengerview/`,"",headers)
}

// api for list of bus
export const busListApi=async(headers)=>{
  return await commonApi('GET',`${BASE_URL}Admin/bus/`,"",headers)
}

// api for list of Request
export const allRequestListApi=async(headers)=>{
  return await commonApi('GET',`${BASE_URL}Admin/pendingowner/`,"",headers)
}

// accept request
export const acceptRequestApi=async(id,headers)=>{
  return await commonApi('POST',`${BASE_URL}Admin/ownerview/${id}/owner_approval/`,"",headers)
}

// __________________________________________________________________________________________________________________________________________________________________________



// BUS OWNER
// register for bus owner
export const busOwnerregisterApi=async(body)=>{
  return await commonApi('POST',`${BASE_URL}owner/register/`,body,"")
}

// login for bus owner
export const busOwnerloginApi=async(body)=>{
  return await commonApi('POST',`${BASE_URL}owner/token/`,body,"")
}





