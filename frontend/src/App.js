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


import AddPurchaseItem from "./Components/Admin/Stores/AddPurchaseItem";



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


           {/* Purchase Routes */}
           <Route path="/add-purchase-item" exact component={AddPurchaseItem} />

           
         
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
