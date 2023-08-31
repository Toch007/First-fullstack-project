import React from 'react'
import ChatroomIcon from "../img/chatroom-icon-10.jpg"

const GeneralChats = () => {
  return (
    <div className='userChat'>
        <img src={ChatroomIcon} alt="" />
        <div className="userChatInfo">
            <span>Join Chatroom</span>
            <p>Last Message</p>
        </div>

    </div>
  )
}

export default GeneralChats