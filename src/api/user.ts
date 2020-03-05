import http from "./http"
import api from "./apiList"

export const checkMobileIsUseful = (phone:number) => {
  return new Promise((resolve, reject) => {
    http.get(api.checkMobileIsUseful,{phone}).then(res=>{
      resolve(res)
    }).catch(error=>{
      reject(error)
    })
  })
}