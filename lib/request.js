import axios from "axios"

const API_HOST = "http://localhost:3000"
const getUrl = endpoint => API_HOST + endpoint

export const post = async (endpoint, data, token=null) => {
  if (token)
    data.token = token
  
  return axios.post(getUrl(endpoint), data, {
    headers: { "Content-Type": "application/json" }
  })
}

export const get = async (endpoint, data, token=null) => {
  // const headers = jwt
  //   ? {
  //       headers: { Authorization: `Bearer ${jwt}` }
  //     }
  //   : null
  // return axios.get(getUrl(endpoint), headers)
  return axios.get(getUrl(endpoint)+'?token='+token)
}


export const destroy = async (endpoint, data, token=null) => {
  return axios.delete(getUrl(endpoint)+'?token='+token)
}

export const put = async (endpoint, data, token=null) => {
  return axios.put(getUrl(endpoint+'?token='+token), data, {
    headers: { "Content-Type": "application/json" }
  })
}