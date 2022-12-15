import {
  InteractionType,
  PublicClientApplication,
} from "@azure/msal-browser";
import { Configuration } from "@azure/msal-browser/dist/config/Configuration";

const REACT_APP_OIDC_CLIENT_ID = "d08f73cb-391f-4a58-a245-83e44fe961be";
const REACT_APP_OIDC_TENANT_ID = "b2748d0a-856e-4184-bda8-831f9ffa8a48";
const REACT_APP_OIDC_BACKEND_CLIENT_ID = "b088186d-cfd7-40f8-b752-34dd984e15c8";
const REACT_APP_OIDC_AUTH_URL = "https://login.microsoftonline.com";
const REACT_APP_LOCAL_REDIRECT_URL = "http://localhost:3000/";

// Config object to be passed to Msal on creation
// const REACT_APP_OIDC_REDIRECT_URL =
//   process.env.NODE_ENV === "production"
//     ? (window as any)?._env_?.REACT_APP_OIDC_REDIRECT_URL
//     : process.env.REACT_APP_LOCAL_REDIRECT_URL;

export const msalConfig: Configuration = {
  auth: {
    clientId: `${REACT_APP_OIDC_CLIENT_ID}`,
    authority: `${REACT_APP_OIDC_AUTH_URL}/${REACT_APP_OIDC_TENANT_ID}`,
    redirectUri: `${REACT_APP_LOCAL_REDIRECT_URL}`,
  },
  cache: {
    // 'sessionStorage' is more secure but less user-friendly
    cacheLocation: "sessionStorage",
    storeAuthStateInCookie: false,
  },
};

export const msalInstance = new PublicClientApplication(msalConfig);
// Add here scopes for id token to be used at MS Identity Platform endpoints.

export const loginRequest = {
  scopes: [`api://${REACT_APP_OIDC_BACKEND_CLIENT_ID}/api`],
  // scopes: ["User.Read"]
};

// Add here the endpoints for MS Graph API services if we would use it ever.
export const graphConfig = {
  graphMeEndpoint: "https://graph.microsoft.com/v1.0",
  userPhoto: "https://graph.microsoft.com/v1.0/me/photo/$value",
};

const options = {
  loginType: InteractionType.Redirect,
  // tokenRefreshUri: REACT_APP_OIDC_REDIRECT_URL,
};
