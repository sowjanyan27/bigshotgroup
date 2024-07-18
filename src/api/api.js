import { API_URLS } from "../constant/constant";
import { fetchWrapper } from "../helpers/fetch-wrapper";
export const Api={
    get_userdetails,
    insert_user_details,
    get_otp_generation,
    get_update_password
}
const getuserdetails = API_URLS.getuser_details
const insert_userdetails = API_URLS.insertuserdetails
const get_otpgeneration = API_URLS.getotp_generation
const update_password = API_URLS.updatepassword
function get_userdetails(item) {
    return fetchWrapper.post(getuserdetails, item)
  }
  function insert_user_details(item) {
    return fetchWrapper.post(insert_userdetails, item)
  }
  function get_otp_generation(item) {
    return fetchWrapper.post(get_otpgeneration, item)
  }
  function get_update_password(item) {
    return fetchWrapper.post(update_password, item)
  }
  