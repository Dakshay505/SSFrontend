import { api } from "../api"
import { GET_LOGGED_IN_USER, LOGIN_USER, LOGOUT_USER } from "../apiRoutes"



export const getLoggedInUserFunc = async ()=>{
    const {data} = await api().get(GET_LOGGED_IN_USER);
    return data;
}

export const loginFunc = async ({username,password}:{username : string,password:string})=>{
    const {data} = await api().post(LOGIN_USER,{username,password});
    return data;
}

export const logoutFunc = async ()=>{
    const {data} = await api().get(LOGOUT_USER);
    return data;
}

