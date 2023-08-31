import React from "react";
import Navbar from "./Navbar";
import Search from "./Search";
import Chats from "./Chats";
import GeneralChats from "./GeneralChats";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Navbar />
      <Search />
      <Chats />
      <GeneralChats />
    </div>
  );
};

export default Sidebar;
