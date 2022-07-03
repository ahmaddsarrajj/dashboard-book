import React from "react";
import Sidebar from "../components/sidebar";
import Header from "../components/Header";
import AddDeliveryMain from "../components/delivery/AddDeliveryMain";

const AddDelivery = () => {
  return (
    <>
      <Sidebar />
      <main className="main-wrap">
        <Header />
        <AddDeliveryMain />
      </main>
    </>
  );
};

export default AddDelivery;
