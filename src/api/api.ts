import axios from "axios";

const baseURL = "http://localhost:8000"

export const api = ()=>{
    return axios.create({
        baseURL,
        withCredentials : true,
    })
}