import React from "react";

import { BrowserRouter, Route } from "react-router-dom";
import * as Views from "./views";
import DefaultRedirect from "./helpers/defaultRedirect";
import { Navbar } from "./components";


const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Route exact path="/">
        <Views.HomeView />
      </Route>
      <Route exact path="/home">
        <Views.HomeView />
      </Route>
      <Route exact path="/companies">
        <Views.CompaniesView />
      </Route>
      <Route exact path="/companies/:handle">
        <Views.CompanyDetailView />
      </Route>
      <Route exact path="/jobs">
        <Views.JobsView />
      </Route>
      <Route exact path="/login">
        <Views.LoginFormView />
      </Route>
      <Route exact path="/auth/signup">
        <Views.SignupFormView />
      </Route>
      <Route exact path="/profile">
        <Views.ProfileFormView />
      </Route>
      <Route exact path="/*">
        <DefaultRedirect />
      </Route>
    </BrowserRouter>
  );
};

export default Router;
