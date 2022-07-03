import React from "react";
import Sidebar from "../components/sidebar";
import EditDeliveryMain from "../components/delivery/EditDeliveryMain";

const DeliveryEditScreen = ({ match }) => {
  const { deliveryId } = match.params.id;
  return (
    <>
      <Sidebar />
      <main className="main-wrap">
        <EditDeliveryMain deliveryId={deliveryId} />
      </main>
    </>
  );
};
export default DeliveryEditScreen;
