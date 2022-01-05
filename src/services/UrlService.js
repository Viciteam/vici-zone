let apiDomain = 'https://api.vici.life/'

class UrlService {

    static loginUrl() {
        return apiDomain + "api/login";
    }
    static registerUrl() {
        return apiDomain + "api/register";
    }
    static logoutUrl() {
        return apiDomain + "api/logout";
    }
}

export default UrlService