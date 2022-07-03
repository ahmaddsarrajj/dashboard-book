import React, { useState, useEffect } from "react";
import Toast from "../LoadingError/Toast";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  editDelivery,
  updateDelivery,
} from "../../Redux/Actions/DeliveryActions";
import { DELIVERY_UPDATE_RESET } from "../../Redux/Constants/DeliveryConstants";
import { toast } from "react-toastify";
import Message from "../LoadingError/Error";
import Loading from "../LoadingError/Loading";

const ToastObjects = {
  pauseOnFocusLoss: false,
  draggable: false,
  pauseOnHover: false,
  autoClose: 2000,
};

const EditDeliveryMain = (props) => {
  const { deliveryId } = props;

  const [country, setCountry] = useState("");
  const [amount, setAmount] = useState(0);
  
  const dispatch = useDispatch();

  const deliveryEdit = useSelector((state) => state.deliveryEdit);
  const { loading, error, delivery } = deliveryEdit;

  const deliveryUpdate = useSelector((state) => state.deliveryUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = deliveryUpdate;

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: DELIVERY_UPDATE_RESET });
      toast.success("country Updated", ToastObjects);
    } else {
      if (!delivery.country || delivery._id !== deliveryId) {
        dispatch(editDelivery(deliveryId));
      } else {
        setCountry(delivery.country);
        setAmount(delivery.amount);
      }
    }
  }, [delivery, dispatch, deliveryId, successUpdate]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateDelivery({
        _id: deliveryId,
        country,
        amount,
      })
    );
  };

  return (
    <>
      <Toast />
      <section className="content-main" style={{ maxWidth: "1200px" }}>
        <form onSubmit={submitHandler}>
          <div className="content-header">
            <Link to="/delivery" className="btn btn-danger text-white">
              Go to delivery amount
            </Link>
            <h2 className="content-title">Update delivery amount</h2>
            <div>
              <button type="submit" className="btn btn-primary">
                Publish now
              </button>
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-xl-8 col-lg-8">
              <div className="card mb-4 shadow-sm">
                <div className="card-body">
                  {errorUpdate && (
                    <Message variant="alert-danger">{errorUpdate}</Message>
                  )}
                  {loadingUpdate && <Loading />}
                  {loading ? (
                    <Loading />
                  ) : error ? (
                    <Message variant="alert-danger">{error}</Message>
                  ) : (
                    <>
                      <div className="mb-4">
                        <label htmlFor="product_title" className="form-label">
                          country
                        </label>
                        <input
                          type="text"
                          placeholder="Type here"
                          className="form-control"
                          id="product_title"
                          required
                          value={country}
                          onChange={(e) => setCountry(e.target.value)}
                        />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="product_price" className="form-label">
                          amount
                        </label>
                        <input
                          type="number"
                          placeholder="Type here"
                          className="form-control"
                          id="product_price"
                          required
                          value={amount}
                          onChange={(e) => setAmount(e.target.value)}
                        />
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default EditDeliveryMain;
