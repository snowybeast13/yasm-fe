import React, { useEffect, useState } from "react";
// import { InteractionRequiredAuthError } from "@azure/msal-browser";
import axios from "axios";
import { loginRequest, msalInstance } from "../authConfig";
import { useMsal } from "@azure/msal-react";
// import instance from "../apiConfing";

export default function useAxios() {
  //   const [accessToken, setAccessToken] = useState("");

  const { accounts } = useMsal();

  const instance = axios.create({
    baseURL: "https://dev-yasm.prodyna.com/api/v1",
    timeout: 15000,
  });

  useEffect(() => {
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
  }, [instance.interceptors.request, instance.interceptors.response, accounts]);
  return instance;
}
