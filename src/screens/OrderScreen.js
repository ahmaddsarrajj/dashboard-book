import React from "react";
import Sidebar from "./../components/sidebar";
import OrderMain from "../components/orders/OrderMain";

const OrderScreen = () => {
  return (
    <>
      <Sidebar />
      <main className="main-wrap">
        <OrderMain />
      </main>
    </>
  );
};

export default OrderScreen;
