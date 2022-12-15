import React, { useEffect, useState } from "react";
import "./App.scss";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import SearchPage from "./Components/SearchPage/SearchPage";
import { Navigate, Route, Routes } from "react-router-dom";
import PageNotFound from "./Components/PageNotFound/PageNotFound";
import axios from "axios";
import { getProduct } from "./axiosApiHandler";

// Msal imports
import { MsalAuthenticationTemplate } from "@azure/msal-react";
import { InteractionType } from "@azure/msal-browser";
import { useIsAuthenticated } from "@azure/msal-react";
import { AuthenticatedTemplate } from "@azure/msal-react";
import { loginRequest } from "./authConfig";

function App(): JSX.Element {
  // const [accessToken, setAccessToken] = useState("");
  const isAuthenticated = useIsAuthenticated();
  

  // useEffect(() => {
  //     if (!InteractionType.Redirect) {
  //       instance.loginRedirect(loginRequest).catch((e) => {
  //         console.log(e);
  //       });
  //     }
  // }, [axiosClient]);

  return (
    <div className="App">
      <MsalAuthenticationTemplate interactionType={InteractionType.Redirect}>
        {isAuthenticated && (
          <>
            <AuthenticatedTemplate>
              <Header />
              <Routes>
                <Route path="/" element={<SearchPage />} />
                <Route path=":all" element={<SearchPage />} />
                <Route path="404" element={<PageNotFound />} />
                <Route path="*" element={<Navigate to="/notfound" replace />} />
              </Routes>
              <Footer />
            </AuthenticatedTemplate>
          </>
        )}
      </MsalAuthenticationTemplate>
    </div>
  );
}

export default App;
