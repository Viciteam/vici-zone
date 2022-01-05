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
        this.authenticated = false;
    }

    isAuthenticated() {
        return this.authenticated;
    }

    getAccessToken() {
        return CookieService.get("access_token");
    }
}

export default new Auth