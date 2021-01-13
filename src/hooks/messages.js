import React from "react";

import firebase from "firebase";

// import messagesData from "../json/messages.json";

import { generateID } from "../utils";

import { useFirebase } from "./firebase";

export const useMessagesData = () => {
  const [messages, setMessages] = React.useState([]);

  const { db } = useFirebase();

  const addNewMessage = (text) => {
    if (!text) return;

    db.collection("messages").add({
      id: generateID(),
      fullname: "test guy",
      text: text,
      time: firebase.firestore.FieldValue.serverTimestamp(),
    });
  };

  return { messages, setMessages, addNewMessage };
};
