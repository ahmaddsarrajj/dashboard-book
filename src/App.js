import React, { useEffect } from "react";
import "./App.css";
import "./responsive.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import DeliveryScreen from "./screens/DeliveryScreen";
import CategoriesScreen from "./screens/CategoriesScreen";
import OrderScreen from "./screens/OrderScreen";
import OrderDetailScreen from "./screens/OrderDetailScreen";
import AddDelivery from "./screens/AddDelivery";
import Login from "./screens/LoginScreen";
import Register from "./screens/Register";
import UsersScreen from "./screens/UsersScreen";
import DeliveryEditScreen from "./screens/DeliveryEditScreen";
import NotFound from "./screens/NotFound";
import PrivateRouter from "./PrivateRouter";
import { useDispatch, useSelector } from "react-redux";
import { listDelivery } from "./Redux/Actions/DeliveryActions";
import { listOrders } from "./Redux/Actions/OrderActions";

function App() {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listDelivery());
      dispatch(listOrders());
    }
  }, [dispatch, userInfo]);

  return (
    <>
      <Router>
        <Switch>
          <PrivateRouter path="/" component={HomeScreen} exact/>
          <PrivateRouter path="/delivery/:id/edit" component={DeliveryEditScreen}/>
          <PrivateRouter path="/delivery" component={DeliveryScreen} />
          <PrivateRouter path="/category" component={CategoriesScreen} />
          <PrivateRouter path="/orders" component={OrderScreen} />
          <PrivateRouter path="/order/:id" component={OrderDetailScreen} />
          <PrivateRouter path="/adddelivery" component={AddDelivery} />
          <PrivateRouter path="/users" component={UsersScreen} />
          <PrivateRouter path="/register" component={Register}/>
          <Route path="/Login" component={Login} />

          <PrivateRouter path="*" component={NotFound} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
