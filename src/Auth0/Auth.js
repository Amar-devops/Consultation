import auth0 from "auth0-js";

export default class Auth {
  constructor(history) {
    //we'll pass React Router's history in so Auth can perform redirects.
    this.history = history; //reference to instance var
    this.auth0 = new auth0.WebAuth({
      domain: process.env.REACT_APP_AUTH0_DOMAIN,
      ClientID: process.env.REACT_APP_AUTH0_CLIENT_ID,
      redirectUri: process.env.REACT_APP_AUTH0_CALLBACK_URL,
      responseType: "token id_token", //token->Access token,user can make API calls.id_token->JWT token to authenticate user when they login.
      scope: "openid profile email", //permission on basic user
    });
  }

  login = () => {
    this.auth0.authorize(); //This will redirect browser to the Auth0 login page.
  };
}
