import {apiService} from "./apiService";
import {urls} from "../configs";


const authService = {
    login: async function (cred) {
        const response = await apiService.post(urls.auth.login, cred);

        if (response.status === 200) {
            this.setTokens(response.data)
        }
        return response
    }
}
//     refresh:  async function (refresh) {
//     const response = await apiService.post(urls.auth.refresh, {refresh});
//
//     if(response.status===200){
//             this.setTokens(response.data)
//         }
//         return response
//     },
//     me:()=> apiService.get(urls.auth.me),
//
//     setTokens:({access,refresh})=>{
//         localStorage.setItem(accessTokenRey,access)
//         localStorage.setItem(refreshTokenKey,refresh)
//     },
//
//     getAccessToken:()=>localStorage.getItem(accessTokenRey),
//     getRefreshToken:()=>localStorage.getItem(refreshTokenKey),
//     deleteToken:()=>{
//         localStorage.removeItem(accessTokenRey)
//         localStorage.removeItem(refreshTokenKey)
//     },
//     isAuthenticated:() => !!localStorage.getItem(accessTokenRey)
// }

export {authService}
