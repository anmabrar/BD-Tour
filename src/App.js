import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Pages/Shared/Header/Header";
import Footer from "./Pages/Shared/Footer/Footer";
import Home from "./Pages/Home/Home/Home";
import NotFound from "./Pages/NotFound/NotFound";
import About from "./Pages/About/About";
import Login from "./Pages/Login/Login/Login";
import AddPackages from "./Pages/AddPackages/AddPackages";
import AllPackages from "./Pages/AllPackages/AllPackages";
import Booking from "./Pages/Booking/Booking";
import AuthProvider from "./Context/AuthProvider";
import PrivateRoute from "./Pages/PrivateRoute/PrivateRoute";
import MyOrder from "./Pages/MyOrder/MyOrder";
import ManageOrder from "./Pages/ManageOrder/ManageOrder";
import Contact from "./Pages/Contact/Contact";

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/myOrder">
            <MyOrder></MyOrder>
          </PrivateRoute>
          <PrivateRoute path="/manageOrder">
            <ManageOrder></ManageOrder>
          </PrivateRoute>
          <Route path="/addPackages">
            <AddPackages></AddPackages>
          </Route>
          <PrivateRoute path="/allPackages">
            <AllPackages></AllPackages>
          </PrivateRoute>
          <PrivateRoute path="/booking/:packageID">
            <Booking></Booking>
          </PrivateRoute>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
