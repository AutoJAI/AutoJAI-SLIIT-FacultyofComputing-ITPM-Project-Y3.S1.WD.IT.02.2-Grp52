import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from "./Components/Common/Home";

import Login from "./Components/Common/Login";
import ActivationEmail from "./Components/Common/ActivationEmail";




import StoresDash from "./Components/Admin/Stores/Stores";
import AddStoreItem from "./Components/Admin/Stores/AddStoreItem";
import GetAllStoresItem from "./Components/Admin/Stores/GetAllStoresItem";
import EditStoresItem from "./Components/Admin/Stores/EditStoresItem";

import EmployeeDash from "./Components/Admin/Employee/Employee";
import AddEmployee from "./Components/Admin/Employee/AddEmployee";
import GetAllEmployee from "./Components/Admin/Employee/GetAllEmployee";
import EditEmployee from "./Components/Admin/Employee/EditEmployee";
import AddSalary from "./Components/Admin/Employee/AddSalary";
import GetAllEmployeeSalary from "./Components/Admin/Employee/GetAllEmployeeSalary";
import GetAllEmployeePayeedSalary from "./Components/Admin/Employee/GetAllEmployeePayeedSalary";


function App() {
  return (
    <div>
      <ToastContainer
        position="bottom-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
         
          <Route path="/login" exact component={Login} />
          <Route
            path="/customer/activate/:activation_token"
            component={ActivationEmail}
            exact
          />
           
          

           {/* Stores Routes */}
           <Route path="/stores-dash" exact component={StoresDash} />
          <Route path="/add-stores-item" exact component={AddStoreItem} />
          <Route
            path="/get-all-stores-item"
            exact
            component={GetAllStoresItem}
          />
          <Route
            path="/edit-stores-item/:id"
            exact
            component={EditStoresItem}
          />

           {/* Employee Routes */}
           <Route path="/employee-dash" exact component={EmployeeDash} />
          <Route path="/add-new-employee" exact component={AddEmployee} />
          <Route path="/get-all-employee" exact component={GetAllEmployee} />
          <Route
            path="/get-emploee-dtails-by-id/:id"
            exact
            component={EditEmployee}
            />
         <Route path="/add_emploee_salary/:id" exact component={AddSalary} />
          <Route
            path="/get_all_salary"
            exact
            component={GetAllEmployeeSalary}
          />
          <Route
            path="/get_all_salary_pay"
            exact
            component={GetAllEmployeePayeedSalary}
          />
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
