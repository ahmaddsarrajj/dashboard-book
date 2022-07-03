import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { deliverOrder, paidedOrder } from "../../Redux/Actions/OrderActions";

const Orders = (props) => {

  const { orders } = props;
  const delivery = useSelector((state) => state.delivery);
  const dispatch = useDispatch();


  const dhandleChange = (e) => {
    e.preventDefault();
    if (window.confirm(`Are you sure want to edit the order of ${orders.fname}`)) {
      dispatch(deliverOrder(orders));
    }
  }

  const phandleChange = (e) => {
    e.preventDefault();
    dispatch(paidedOrder(orders));
  }

  return (
    <>
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


                  <tr key={order._id}>
                    <td>
                      <b>{order.customer.name || (order.customer.fname + " " + order.customer.lname)}</b>
                    </td>
                    <td>{order.shippingAddress.country}, {order.shippingAddress.city}</td>
                    <td>${order.totalPrice}</td>
                    <td>
                     <i className="icon fa fa-check"></i>
                    </td>
                    <td>
                      {moment(order.createdAt).format("MMM Do YY")}
                    </td>
                  </tr>

                ) : (<></>)
                }
              </>
            ))}
          </tbody>
        </table>
      </div>

    </>
  );
};

export default Orders;
