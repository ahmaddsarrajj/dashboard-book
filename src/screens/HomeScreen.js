import React from "react";
import Sidebar from "./../components/sidebar";
import logo from "./../data/Capture.PNG";

const style= {
  position:"absolute",
  right: "30px",
  bottom: "30px" 
}
const HomeScreen = () => {
  return (
    <>
      <Sidebar />
      <main style={style}>
        <img src={logo} width="100px" alt="logo"/>
      </main>
    </>
  );
};

export default HomeScreen;
