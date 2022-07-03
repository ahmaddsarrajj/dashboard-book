import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { deliverOrder, getOrderDetails, paidedOrder } from "../../Redux/Actions/OrderActions";
import Loading from "../LoadingError/Loading";
const NPOrders = (props) =>{
  
  const { orders } = props;
  const { orderId } = props;
  const dispatch = useDispatch();
  
  const orderDetails = useSelector((state) => state.orderDetails);
  const { loading, error, order } = orderDetails;

  const orderPaid = useSelector((state) => state.orderPaid);
  const { loading: loadingPaid , success: successPaid } = orderPaid;

  useEffect(()=>{
      dispatch(getOrderDetails(orderId));
  }, [dispatch , orderId , successPaid]);
  
  const paidHandler = () =>{
    dispatch(paidedOrder(order))
  }
  return (
    <>
     {loadingPaid && <Loading/>}
    <div className="table-scroll">
          <table className="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">region</th>
              <th scope="col">Total</th>
              <th scope="col">Paid</th>
              <th scope="col">Date</th>
            </tr>
          </thead>
          <tbody>
        {orders.map((order) => (
          <>
          {order.isPaid ? (
            <></>
          ):(  
            
      <tr key={order._id}>
        <td>
          <b>{order.customer.name || (order.customer.fname + " " + order.customer.lname)}</b>
        </td>
        <td>{order.shippingAddress.country}, {order.shippingAddress.city}</td>
        <td>${order.totalPrice}</td>
        <td>
           
        <span onClick={paidHandler} className="btn badge alert-success">paid</span>
        </td>
        <td>
          {moment(order.createdAt).format("MMM Do YY")}
          </td>
      </tr>
          
        )
          }
          </>
        ))}
        </tbody>
        </table>
        </div>
    </>
  );
};



          
    
export default NPOrders;