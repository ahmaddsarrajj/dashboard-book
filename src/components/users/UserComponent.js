import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { listUser } from "../../Redux/Actions/userActions";
import Loading from "../LoadingError/Loading";
import Message from "../LoadingError/Error";
import { logout } from "../../Redux/Actions/userActions";

const UserComponent = () => {

  const dispatch = useDispatch();
  
  const logoutHandler = () => {
    dispatch(logout());
  };
  
  const userList = useSelector((state) => state.userList);
  const { loading, error, users } = userList;

  useEffect(() => {
    dispatch(listUser());
  }, [dispatch]);
  
  return (
    <section className="content-main">
      
      <div className="content-header">
        <div>
          <Link to="/register" className="btn btn-primary">
            <i className="icon fas fa-plus"></i>
          </Link>
        </div>
      </div>

      <div className="card mb-4">
        <header className="card-header">
          <div className="row gx-3">
            <div className="handred col-lg-4 col-md-6 me-auto ">
              <div style={{ float: "right" }}>
                <Link
                  className="btn btn-danger"
                  onClick={logoutHandler}
                  to="#"
                >
                  logout

                </Link>
              </div>
            </div>
          </div>
        </header>

        {/* Card */}
        <div className="card-body">
          {loading ? (
            <Loading />
          ) : error ? (
            <Message variant="alert-danger">{error}</Message>
          ) : (
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4">
              {users.map((user) => (
                <div className="col" key={user._id}>
                  <div className="card card-user shadow-sm">

                    <div className="card-body">
                      <h5 className="card-title mt-5">{user.email}</h5>
                      <div className="card-text text-muted">
                        {user.isAdmin === true ? (
                          <p className="m-0">Admin</p>
                        ) : (
                          <p className="m-0">Customer</p>
                        )}

                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </div>
    </section>
  );
};

export default UserComponent;
