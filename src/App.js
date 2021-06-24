import Homepage from "./Components/Homepage/Homepage/Homepage";
import Login from "./Components/Login/Login";
import Menu from "./Components/Homepage/Menu/Menu";
import Service from "./Components/Homepage/Service/Service";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { createContext, useState } from "react";
import Checkout from "./Components/Checkout/Checkout";
import AddServices from "./Components/Homepage/AddServices/AddServices";
import OurService from "./Components/OurService/OurService";
import Dashboard from "./Components/Dashboard/Dashboard";


export const UserContext = createContext();
export const ServiceContext = createContext();


function App() {
  const [loggedInUser, setLoggedInUser] = useState([])
  const [checkedService, setCheckedService] = useState({});
  console.log(checkedService, loggedInUser)
  return (
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <ServiceContext.Provider value={[checkedService, setCheckedService]}>
      <Router>
        <Menu></Menu>
        <Switch>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/">
              <Homepage></Homepage>
            </Route>
            <Route exact path="/home">
              <Homepage></Homepage>
            </Route>
            <Route path="/addservice">
                <AddServices></AddServices>
            </Route>
            <Route path="/service">
                <Service></Service>
            </Route>
            <Route path="/checkout">
                <Checkout></Checkout>
            </Route>
            <Route path="/ourservice">
              <OurService></OurService>
            </Route>
            <Route path="/dashboard">
              <Dashboard></Dashboard>
            </Route>

        </Switch>
        
      </Router>
      </ServiceContext.Provider>
      </UserContext.Provider>
  );
}

export default App;
