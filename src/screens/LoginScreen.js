import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../components/LoadingError/Loading";
import Toast from "../components/LoadingError/Toast";
import { login } from "../Redux/Actions/userActions";
import Message from "./../components/LoadingError/Error";
import insta from "./../data/Capture.PNG";

const Login = ({ history }) => {
  window.scrollTo(0, 0);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { error, loading, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      history.push("/");
    }
  }, [userInfo, history]);

  const submitHandler = (e) => {
    e.preventDefault();
     dispatch(login(name, password));
  };
  return (
    <div>
      <Toast />
      <div
        className="card shadow mx-auto"
        style={{ maxWidth: "380px", marginTop: "100px" }}
      >
        <div className="card-body instagram" >
          {error && <Message variant="alert-danger">{error}</Message>}
          {loading && <Loading />}
          <h4 className="card-title mb-4 text-center">Sign in</h4>
          <form onSubmit={submitHandler}>
            <div className="mb-3">
              <input
                className="form-control"
                placeholder="Username"
                type="txt"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <input
                className="form-control"
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <button type="submit" className="login-btn btn  w-100">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="insta-ph">
      <img src={insta} alt="انستغرام" width="100px"/>
      </div>
      
    </div>
  );
};

export default Login;
