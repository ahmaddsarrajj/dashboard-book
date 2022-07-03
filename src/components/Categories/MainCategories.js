import React from "react";
import Customers from "./Customers";
import Message from "../LoadingError/Error";
import Loading from "../LoadingError/Loading";
import { useSelector } from "react-redux";

const MainCategories = () => {
  const orderList = useSelector((state) => state.orderList);
  const { loading, error, orders } = orderList;

  return (
    <section className="content-main">
      <div className="content-header">
        <h2 className="content-title">Customers</h2>
      </div>

      <div className="card mb-4 shadow-sm">
        <header className="card-header bg-white">
          <div className="row gx-3 py-3">
            <div className="handred col-lg-4 col-md-6 me-auto">
              <input
                type="text"
                placeholder="Search..."
                className="form-control p-2"
              />
            </div>
          </div>
        </header>

        
          <div className="card-body">
            <div className="row">
              {loading ? (
                <Loading />
              ) : error ? (
                <Message variant="alert-danger">{error}</Message>
              ) : (
                <Customers orders={orders} />
              )}
            </div>
          </div>
        </div>
    </section >
  );
};

export default MainCategories;
