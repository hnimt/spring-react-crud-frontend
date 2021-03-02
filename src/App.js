import "./App.css";
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import ListEmployeeComponent from "./components/employee/ListEmployeeComponent";
import CreateEmployeeComponent from "./components/employee/CreateEmployeeComponent";
import ViewEmployeeComponent from "./components/employee/ViewEmployeeComponent";
// import UpdateEmployeeComponent from "./components/employee/UpdateEmployeeComponent";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
        <HeaderComponent />
        <div className="container">
          <Switch>
            <Route path="/" component = {ListEmployeeComponent} exact></Route>
            <Route path="/employees" component = {ListEmployeeComponent} exact></Route>
            <Route path="/add-employee/:id" component = {CreateEmployeeComponent} exact></Route>
            <Route path="/view-employee/:id" component = {ViewEmployeeComponent} exact></Route>
            {/* <Route path="/update-employee/:id" component = {UpdateEmployeeComponent} exact></Route> */}
          </Switch>
        </div>
        <FooterComponent />
    </Router>
  );
}

export default App;
