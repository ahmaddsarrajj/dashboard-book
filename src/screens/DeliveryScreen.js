import React from "react";
import Sidebar from "./../components/sidebar";
import MainDelivery from "../components/delivery/MainDelivery";
import Delivery from "../components/delivery/Delivery";

const DeliveryScreen = () => {
  return (
    <>
      <Sidebar />
      <main className="main-wrap">
        <MainDelivery />
      </main>
    </>
  );
};

export default DeliveryScreen;
