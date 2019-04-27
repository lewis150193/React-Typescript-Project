import auth0 from "auth0-js";

const LOGIN_PAGE = "/login";
const ERR_PAGE = '/error';
export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: "myreactapp.eu.auth0.com",
    clientID: "KGHNO2k52sl7EeyvE70e0JiGiKmFcuMz",
    redirectUri: "http:localhost:3000/messages",
    responseType: "token id_token",
    scope: "openid"
  });

  constructor() {}

  handleAuth() {
    this.auth0.parseHash((err, auth) => {
      if (auth && auth.accessToken && auth.idToken) {
        let expiresAt = JSON.stringify(
        // @ts-ignore
          auth.expiresIn * 1000 + new Date().getTime()
        );
        localStorage.setItem("access_token", auth.accessToken);
        localStorage.setItem("id_token", auth.idToken);
        localStorage.setItem("expiresAt", expiresAt);
        location.hash = "";
        location.pathname = LOGIN_PAGE;
      } else if (err) {
        location.pathname = ERR_PAGE;
      }
    });
  }

  isAuth() {
    // @ts-ignore
    let expiresAt = JSON.parse(localStorage.getItem('expiresAt'));
    return new Date().getTime() < expiresAt;
  }

  login() {
    this.auth0.authorize();
  }
}
