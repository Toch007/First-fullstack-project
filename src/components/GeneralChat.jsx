import React, { useContext } from "react";
import { GeneralChatContext } from "../context/GeneralChatContext";
import Add from "../img/add.png";
import Cam from "../img/cam.png";
import More from "../img/more.png";
import GeneralChatInput from "./GeneralChatInput";
import GeneralChatMessages from "./GeneralChatMessages";

const GeneralChat = () => {
  const { generalChatData } = useContext(GeneralChatContext);

  return (
    <div className="chat">
      <div className="chatInfo">
        <span>General Chat</span>
        <div className="chatIcons">
          <img src={Cam} alt="" />
          <img src={Add} alt="" />
          <img src={More} alt="" />
        </div>
      </div>
      <GeneralChatMessages />
      <GeneralChatInput />
    </div>
  );
};

export default GeneralChat;
