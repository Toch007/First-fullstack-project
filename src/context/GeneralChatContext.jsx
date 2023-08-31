import { createContext, useContext, useReducer } from "react";
import { AuthContext } from "./AuthContext";

export const ChatContext = createContext();

const GENERAL_CHAT_ID = "general"; // Define a constant for general chat

export const GeneralChatContext = ({ children }) => {
  const { currentUser } = useContext(AuthContext);
  
  // Modify INITIAL_STATE for general chat
  const INITIAL_STATE = {
    chatId: GENERAL_CHAT_ID, // Start with the general chat
    user: {},
  };

  const chatReducer = (state, action) => {
    switch (action.type) {
      case "CHANGE_USER":
        return {
          user: action.payload,
          chatId:
            action.payload.uid === GENERAL_CHAT_ID
              ? GENERAL_CHAT_ID // Set chatId to general if it's a general chat
              : currentUser.uid > action.payload.uid
              ? currentUser.uid + action.payload.uid
              : action.payload.uid + currentUser.uid,
        };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(chatReducer, INITIAL_STATE);

  return (
    <ChatContext.Provider value={{ data: state, dispatch }}>
      {children}
    </ChatContext.Provider>
  );
};

