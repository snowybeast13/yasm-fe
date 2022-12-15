import { AuthenticationResult } from "@azure/msal-browser";
import axios, { AxiosInstance } from "axios";
import { msalInstance, loginRequest } from "./authConfig";

// export let axiosClient: AxiosInstance;

// let token: string
// const accounts = msalInstance.getAllAccounts();
// const activeAccounts = msalInstance.getActiveAccount();

// const request = {
//   ...loginRequest,
//   account: activeAccounts || accounts[0],
// };

// const authResult = msalInstance.acquireTokenSilent(request)
// console.log(authResult);
//  const authResult = msalInstance
//   .acquireTokenSilent(request)
//   .then((res) => {
//       let token = res.accessToken;
//       axiosClient = axios.create({
//       baseURL: `https://dev-yasm.prodyna.com/api/v1`,
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });
//   });

const instance = axios.create({
  baseURL: "https://dev-yasm.prodyna.com/api/v1",
  timeout: 15000
});

instance.interceptors.request.use(
  function (config: any) {
    const instance = msalInstance;
    const accounts = instance.getAllAccounts();

    const accessTokenRequest = {
      ...loginRequest,
      account: accounts[0],
    };

    return instance
      .acquireTokenSilent(accessTokenRequest)
      .then((accessTokenResponse) => {
        // Acquire token silent success
        let accessToken = accessTokenResponse.accessToken;
        // Call your API with token
        config.headers.Authorization = `Bearer ${accessToken}`;
        return Promise.resolve(config);
      });
  },
  function (error) {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    if (response.status === 401) {
      // Clear local storage, redirect back to login
      window.location.href = "/";
    }
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
// export const axiosClient = axios.create({
//   baseURL: `https://dev-yasm.prodyna.com/api/v1`,
//   timeout: 1000,
//   headers: {
//     Authorization: `Bearer `,
//   },
// });

// axiosClient.interceptors.response.use(
//   function (response: any) {
//     return response;
//   }
// function (error:any) {
//   let res = error.response;
//   if (res.status === 401) {
//     window.location.href = "https://example.com/login";
//   }
//   console.error(`Looks like there was a problem. Status Code: ` + res.status);
//   return Promise.reject(error);
// }
// );

// export default axiosClient;
