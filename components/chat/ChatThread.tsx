import React from "react";

interface ChatMessage {
  id: string;
  sender: "user" | "chat";
  text: string;
}

interface ChatThreadProps {
  messages: ChatMessage[];
}

const ChatThread: React.FC<ChatThreadProps> = ({ messages }) => {
  return (
    <div className="bg-white flex-1 p-4 overflow-y-auto">
      <div className="w-full border border-gray-300 rounded p-4">
        <div className="max-w-lg mx-auto">
          {messages.map((message) => (
            <div key={message.id} className="my-2 text-center">
              <div
                className={`inline-block p-2 rounded ${
                  message.sender === "user"
                    ? "bg-white text-black"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChatThread;
