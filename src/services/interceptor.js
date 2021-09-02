// Project Name: TGP Consumer Webapp
// -----------------------------
// Author: Priyanshu Chauhan
// Last Updated:   22/7/2021, 5:00:00 pm

import axios from 'axios'
require('dotenv').config()

let primaryServer = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL,
    headers: {
        "content-Type": "application/json"
    }
})
primaryServer.interceptors.request.use(
    (response) => {
        console.log("Printing from response!!")
        console.log(response)
        console.log(response.status)
        return response
    },
    (error) => {
        console.log("Printing from Error!")
        console.log(error)
        return error
    }
)

export default primaryServer;










// primaryServer.interceptors.response.use(
//     (response) => {
//         console.log("Printing from response v2")
//         console.log(response)
//         console.log(response.status)
        
//         return response
//     },
//     (error) => {
//         console.log("Printing from Error! v2")
//         console.log(error.response)
//         if(error.response.status === 401){
//             if(error.response.data.event === "logout"){
//                 LogoutMethod.forceLogout()
//                 return
//             }
//         }
//         // return error
//     }
// )