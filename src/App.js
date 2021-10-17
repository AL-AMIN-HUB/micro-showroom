import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AboutCompany from "./components/Home/AboutCompany/AboutCompany";
import Contacts from "./components/Home/Contacts/Contacts";
import Home from "./components/Home/Home/Home";
import Vehicles from "./components/Home/Vehicles/Vehicles";
import ServiceDetail from "./components/ServiceDetail/ServiceDetail";
import Login from "./components/Shared/Login/Login";
import Navbar from "./components/Shared/Navbar/Navbar";
import NotFound from "./components/Shared/NotFound/NotFound";
import AuthProvider from "./context/AuthProvider";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/about">
            <AboutCompany></AboutCompany>
          </Route>
          <Route exact path="/bookingsList">
            <Home></Home>
          </Route>
          <Route exact path="/vehicles">
            <Vehicles></Vehicles>
          </Route>{" "}
          <PrivateRoute exact path="/serviceDetails/:id">
            <ServiceDetail></ServiceDetail>
          </PrivateRoute>{" "}
          <Route exact path="/contact">
            <Contacts></Contacts>
          </Route>
          <Route exact path="/login">
            <Login></Login>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
