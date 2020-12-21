import React from "react";

import messagesData from "../json/messages.json";

import { generateID } from "../utils";

export const useMessagesData = () => {
  const [messages, setMessages] = React.useState();

  React.useEffect(() => {
    setMessages([
      ...messagesData.map((item) => {
        return { ...item, id: generateID() };
      }),
    ]);
  }, []);

  return { messages, setMessages };
};
