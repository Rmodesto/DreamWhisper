import React, { useState } from "react";

interface ChatInputProps {
  onSubmit: (text: string) => void;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSubmit }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      onSubmit(input);
      setInput("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 relative">
      <div className="border border-gray-300 rounded">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full px-4 py-2 rounded focus:outline-none focus:border-black text-black pr-10"
          placeholder="Type your message here..."
        />
      </div>
      <button
        type="submit"
        className="bg-gray-300 p-1 rounded-full absolute top-0 right-0 mr-6 mt-6 z-10"
        title="Send"
      >
        <div className="triangle-right w-4 h-4 transform rotate-45 bg-white border-t border-r border-gray-400"></div>
      </button>
    </form>
  );
};

export default ChatInput;
