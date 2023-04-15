import React, { useState } from "react";
import Chat from "../chat/Chat";
import Sidebar from "./Sidebar";

const Layout: React.FC = () => {
  const [chatThreads, setChatThreads] = useState<string[][]>([]);

  const [activeChatIndex, setActiveChatIndex] = useState<number>(-1);

  const handleNewChat = () => {
    setChatThreads([[], ...chatThreads]);
    setActiveChatIndex(0);
  };

  const handleSelectChat = (index: number) => {
    setActiveChatIndex(index);
  };

  const handleDeleteChat = (index: number) => {
    setChatThreads(chatThreads.filter((_, i) => i !== index));
    if (activeChatIndex === index) {
      setActiveChatIndex(-1);
    } else if (activeChatIndex > index) {
      setActiveChatIndex(activeChatIndex - 1);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <Sidebar
        onNewChat={handleNewChat}
        onSelectChat={handleSelectChat}
        onDeleteChat={handleDeleteChat}
        chatThreads={chatThreads.map((_, index) => `Chat ${index + 1}`)}
        activeChatIndex={activeChatIndex}
      />

      <div className="flex-1">
        {activeChatIndex >= 0 ? (
          <Chat messages={chatThreads[activeChatIndex]} />
        ) : (
          <div className="h-full flex items-center justify-center">
            <h1 className="text-gray-600">Select or start a new chat</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Layout;
