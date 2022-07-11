import React from "react";
import Sidebar from "./../components/sidebar";
import UserComponent from "../components/users/UserComponent";

const UsersScreen = () => {
  return (
    <>
      <Sidebar />
      <main className="main-wrap">
        
        <UserComponent />
      </main>
    </>
  );
};

export default UsersScreen;
