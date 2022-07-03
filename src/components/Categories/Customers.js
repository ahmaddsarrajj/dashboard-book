import React from "react";

const Customers = (props) =>{
    const { orders } = props;

    return(
<table className="table">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">phone</th>
          <th scope="col">country</th>
          <th scope="col">city</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((customer) => (
          <tr key={customer._id}>
            <td>
              <b>{customer.customer.name}{customer.customer.fname} {customer.customer.lname}</b>
            </td>
            <td>{customer.customer.phone}</td>
            <td>{customer.shippingAddress.country}</td>
            
            <td>
            <td>{customer.shippingAddress.city}</td>
            </td>
          </tr>
        ))}
        </tbody>
        </table>
    )
}
export default Customers;
