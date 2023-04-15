import React, { useCallback, useState } from "react";
import ChatInput from "./ChatInput";
import ChatThread from "./ChatThread";

interface ChatMessage {
  id: string;
  sender: "user" | "chat";
  text: string;
}

interface ChatProps {
  messages: ChatMessage[];
  onNewMessage?: (text: string) => void;
}

const Chat: React.FC<ChatProps> = ({ messages, onNewMessage }) => {
  const [localMessages, setLocalMessages] = useState(messages);

  const handleMessageSubmit = useCallback(
    (text: string) => {
      const newMessage: ChatMessage = {
        id: `user_${localMessages.length}`,
        sender: "user",
        text: text,
      };
      setLocalMessages((prevMessages) => [...prevMessages, newMessage]);

      if (onNewMessage) {
        onNewMessage(text);
      }
    },
    [localMessages, onNewMessage]
  );

  return (
    <div className="flex flex-col h-full">
      <header className="bg-gray-200 text-center p-4">
        <h1 className="font-bold text-xl">Dream Whisper</h1>
      </header>
      <ChatThread messages={localMessages} />
      <ChatInput onSubmit={handleMessageSubmit} />
    </div>
  );
};

export default Chat;
