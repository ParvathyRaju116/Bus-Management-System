
import { BASE_URL } from "./Base_Url";
import { commonApi } from "./CommonAPI";

// api for user registration
export const registerApi=async(body)=>{
    return await commonApi('POST',`${BASE_URL}passenger/register/`,body,"")
}
