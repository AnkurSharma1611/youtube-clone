import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex flex-row items-center shadow-sm ">
      <div>
        <img
          className="h-8"
          alt="user"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s"
        />
      </div>
      <div className="flex flex-row" >
        {" "}
        <p className="font-bold px-2">{name}</p>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default ChatMessage;
