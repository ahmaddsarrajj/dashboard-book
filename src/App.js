import React, { useEffect } from "react";
import "./App.css";
import "./responsive.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./screens/LoginScreen";
import Register from "./screens/Register";
import UsersScreen from "./screens/UsersScreen";
import NotFound from "./screens/NotFound";
import PrivateRouter from "./PrivateRouter";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
    }
  }, [dispatch, userInfo]);

  return (
    <>
      <Router>
        <Switch>
          <PrivateRouter path="/user" component={UsersScreen} exact/>
          <Route path="/register" component={Register}/>
          <Route path="/Login" component={Login} />

          <PrivateRouter path="*" component={NotFound} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
