import AuthService from "./AuthService";
import CookieService from "./CookieService";

class Auth {

    constructor() {
        const token = CookieService.get("access_token");
        token ? (this.authenticated = true) : (this.authenticated = false);
    }

    async login(credentails, cb) {
        const user = await AuthService.doUserLogin(credentails);
    
        if (!user) {
          cb(false);
          return false;
        }
    
        localStorage.setItem("accessToken", user.access_token);
        this.authenticated = true;
        cb(true);
    }

    async logout() {
        CookieService.remove("access_token");
        CookieService.remove("user_info");
        CookieService.remove("user_profile");
        this.authenticated = false;
    }

    isAuthenticated() {
        return this.authenticated;
    }

    user() {
        const name = CookieService.get("user_info");
        return name
    }

    userProfile() {
        const user = CookieService.get("user_profile");
        return user
    }

    getAccessToken() {
        return CookieService.get("access_token");
    }
}

export default new Auth()