import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Delivery from "./Delivery";
import { useDispatch, useSelector } from "react-redux";
import { listDelivery } from "../../Redux/Actions/DeliveryActions";
import Loading from "../LoadingError/Loading";
import Message from "../LoadingError/Error";

const MainDelivery = () => {
  const dispatch = useDispatch();

  const deliveryList = useSelector((state) => state.deliveryList);
  const { loading, error, delivery } = deliveryList;

  const deliveryDelete = useSelector((state) => state.deliveryDelete);
  const { error: errorDelete, success: successDelete } = deliveryDelete;

  useEffect(() => {
    dispatch(listDelivery());
  }, [dispatch, successDelete]);

  return (
    <section className="content-main">
      <div className="content-header">
        <h2 className="content-title">Delivery Amount</h2>
        <div>
          <Link to="/adddelivery" className="btn btn-primary">
            Create new
          </Link>
        </div>
      </div>

      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          {errorDelete && (
            <Message variant="alert-danger">{errorDelete}</Message>
          )}
          {loading ? (
            <Loading />
          ) : error ? (
            <Message variant="alert-danger">{error}</Message>
          ) : (
            <div className="row">
              {/* delivery */}
              <table class="table">
              <thead>
                <tr>
                  <th scope="col">Country</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Edit</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>
              {delivery.map((deliver) => (
                <Delivery delivery={deliver} key={deliver._id} />
              ))}
              </tbody>
              </table>
              <select style={{ height: "33px" }}>
                  {delivery.map((deliver) => (
                     <option key={deliver._id}>
                     {deliver.country}
                 </option>
                  ))}
                </select>
            </div>
          )}

          
        </div>

      </div>
    </section>
  );
};

export default MainDelivery;
