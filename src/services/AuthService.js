import axios from "axios";
import UrlService from './UrlService'
import CookieService from "./CookieService";

const expiresAt = 60 * 24;

class AuthService {

    async doUserLogin(data) {
        try {
            const response = await axios.post(UrlService.loginUrl(), data);
            return response.data
        } catch (error) {
            console.log(error)
            return false
        }
    }

    async doUserRegister(data){
        try {
            const response = await axios.post(UrlService.registerUrl(), data);
            return response.data
        } catch (error) {
            console.log(error)
            return false
        }
    }

    async doUserLogout(token){
        try {
            console.log('token--', token)
            const config = {
                headers: { Authorization: `${token}` }
              };

            const response = await axios.post(UrlService.logoutUrl(), config);
            return response.data
        } catch (error) {
            console.log(error)
            return false
        }
    }

    handleLoginSuccess(response) {
        let date = new Date();
        date.setTime(date.getTime() + expiresAt * 60 * 1000);
        const options = { path: "/", expires: date };
        CookieService.set("access_token", response.token, options);
        CookieService.set("user_info", response.user, options);
        return true;
    }

}

export default new AuthService();