import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from "./Components/Common/Home";
import HomeLogin from "./Components/Common/HomeLogin";
import Login from "./Components/Common/Login";
import ActivationEmail from "./Components/Common/ActivationEmail";

import Register from "./Components/Common/Register";
import MyAccount from "./Components/Common/MyAccount";



import StoresDash from "./Components/Admin/Stores/Stores";
import AddStoreItem from "./Components/Admin/Stores/AddStoreItem";
import GetAllStoresItem from "./Components/Admin/Stores/GetAllStoresItem";
import EditStoresItem from "./Components/Admin/Stores/EditStoresItem";



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
           
           <Route path="/register" exact component={Register} />
           <Route path="/customer-home" exact component={HomeLogin} />
           <Route path="/my-account" exact component={MyAccount} />


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
         
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
