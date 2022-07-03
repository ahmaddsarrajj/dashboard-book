import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Toast from "./../LoadingError/Toast";
import Loading from "./../LoadingError/Loading";
import { toast } from "react-toastify";
import Message from "../LoadingError/Error";
import { updateDelivery , deleteDelivery } from "../../Redux/Actions/DeliveryActions";

const Delivery = (props) => {
  const { delivery } = props;
  const dispatch = useDispatch();

  // const [country, setCountry] = useState("");
  // const [amount, setAmount] = useState("");

  // const Toastobjects = {
  //   pauseOnFocusLoss: false,
  //   draggable: false,
  //   pauseOnHover: false,
  //   autoClose: 2000,
  // };
  const deliveryDetails = useSelector((state) => state.deliveryDetails);
  const { loading, error, deliveryd } = deliveryDetails;

  // const deliveryUpdate = useSelector((state) => state.deliveryUpdate);
  // const { loading: updateLoading } = deliveryUpdate;

  // useEffect(() => {
  //   if (deliveryd) {
  //     setCountry(deliveryd.country);
  //     setAmount(deliveryd.amount);
  //   }
  // }, [dispatch, deliveryd]);
  // const submitHandler = (e) => {
  //   e.preventDefault();
    // Password match
     // dispatch(updateDelivery({ id: deliveryd._id, country, amount}));
     
  //};

  const deletehandler = (id) => {
    if (window.confirm("Are you sure??")) {
      dispatch(deleteDelivery(id));
    }
  };

  return (
    <>
     
      {error && <Message variant="alert-danger">{error}</Message>}
  
                <tr>
                  <th scope="row">
                  {delivery.country}
                  </th>
                  <td>
                    <div className="price mb-2">
                      ${delivery.amount}
                    </div>
                  </td>
                  <td>
                    <Link
                      to={`/delivery/${delivery._id}/edit`}
                      className="btn twentypx p-0 pb-1 col-md-6 gray-text"
                    >
                       <i className="fas fa-pen"></i>
                    </Link>
                  </td>
                  <td>
                  <Link
                to="#"
                onClick={() => deletehandler(delivery._id)}
                className="btn twentypx p-0 pb-1 col-md-6 red-text"
              >
                <i className="fas fa-trash-alt"></i>
              </Link>
                  </td>
  
                </tr>
      </>
  );
};

export default Delivery;
