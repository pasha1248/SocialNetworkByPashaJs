import axios from 'axios'

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY" : "f51190ae-1079-47b7-81e3-a0953a160e86"
    }
})



export const getUsers = (currentPage, pageSize) => {

 return instance.get(`users?page=${currentPage}&count=${pageSize}`)
  .then(response => response.data)

}

