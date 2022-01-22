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

    async doUserLogout(){
        try {
            const response = await axios.post(UrlService.logoutUrl());
            return response.data
        } catch (error) {
            console.log(error)
            return false
        }
    }

    async registerUserProfile(data){
        try {
            const response = await axios.post(UrlService.userProfile(), data);
            return response.data
        } catch (error) {
            console.log(error)
            return false
        }
    }

    async getUserProfile(){
        const user = CookieService.get("user_info")
        const user_id = user.id
        try {
            const response = await axios.get(UrlService.getUserProfile(user_id));
            // console.log('get user data -> ', response);
            CookieService.set("user_profile", response.data.user);
            return response.data
        } catch (error) {
            console.log(error)
            return false
        }
    }

    /* async uploadProfPic(data){
        try {
            const response = await axios.post(UrlService.uploadProfPic(), data);
            return response.data
        } catch (error) {
            console.log(error)
            return false
        }
    } */

    handleLoginSuccess(response) {
        let date = new Date();
        date.setTime(date.getTime() + expiresAt * 60 * 1000);
        const options = { path: "/", expires: date };
        CookieService.set("access_token", response.token, options);
        CookieService.set("user_info", response.user, options);
        const userProfile = this.getUserProfile(response.user.id);
        // console.log('user id ->', response.user.id);
        return userProfile;
    }

}

export default new AuthService();