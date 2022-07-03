import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { DELIVERY_CREATE_RESET } from "../../Redux/Constants/DeliveryConstants";
import { createDelivery } from "../../Redux/Actions/DeliveryActions";
import Toast from "../LoadingError/Toast";
import Message from "../LoadingError/Error";
import Loading from "../LoadingError/Loading";

const ToastObjects = {
  pauseOnFocusLoss: false,
  draggable: false,
  pauseOnHover: false,
  autoClose: 2000,
};
const AddDeliveryMain = () => {
  const [country, setCountry] = useState("");
  const [amount, setAmount] = useState(0);
  
  const dispatch = useDispatch();

  const deliveryCreate = useSelector((state) => state.deliveryCreate);
  const { loading, error, delivery } = deliveryCreate;

  useEffect(() => {
    if (delivery) {
      toast.success("country Added", ToastObjects);
      dispatch({ type: DELIVERY_CREATE_RESET });
      setCountry("");
      setAmount(0);
    }
  }, [delivery, dispatch]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(createDelivery(country , amount));
  };

  return (
    <>
      <Toast />
      <section className="content-main" style={{ maxWidth: "1200px" }}>
        <form onSubmit={submitHandler}>
          <div className="content-header">
            <Link to="/delivery" className="btn btn-danger text-white">
              Go to country delivery amount
            </Link>
            <h2 className="content-title">Add country</h2>
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
                  {error && <Message variant="alert-danger">{error}</Message>}
                  {loading && <Loading />}
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
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default AddDeliveryMain;
