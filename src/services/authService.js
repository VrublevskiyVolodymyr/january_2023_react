import {apiService} from "./apiService";
import {urlsCars} from "../configs";

const accessTokenRey='access';
const refreshTokenKey='refresh';

const authService = {
    login:  async function (cred) {
      const response =  await apiService.post(urlsCars.auth.login, cred);

        if(response.status===200){
            this.setTokens(response.data)
        }
        return response
    },

    refresh:  async function (refresh) {
    const response = await apiService.post(urlsCars.auth.refresh, {refresh});

    if(response.status===200){
            this.setTokens(response.data)
        }
        return response
    },
    me:()=> apiService.get(urlsCars.auth.me),

    setTokens:({access,refresh})=>{
        localStorage.setItem(accessTokenRey,access)
        localStorage.setItem(refreshTokenKey,refresh)
    },

    getAccessToken:()=>localStorage.getItem(accessTokenRey),
    getRefreshToken:()=>localStorage.getItem(refreshTokenKey),
    deleteToken:()=>{
        localStorage.removeItem(accessTokenRey)
        localStorage.removeItem(refreshTokenKey)
    },
    isAuthenticated:() => !!localStorage.getItem(accessTokenRey)
}

export {authService}
