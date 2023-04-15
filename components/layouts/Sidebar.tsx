import React from "react";

interface SidebarProps {
  onNewChat: () => void;
  onSelectChat: (index: number) => void;
  onDeleteChat: (index: number) => void;
  chatThreads: string[];
  activeChatIndex: number;
}

const Sidebar: React.FC<SidebarProps> = ({
  onNewChat,
  onSelectChat,
  onDeleteChat,
  chatThreads,
  activeChatIndex,
}) => {
  return (
    <div className="bg-gray-200 w-full md:w-64 p-4">
      <div className="mb-4">
        <button
          className="block w-full text-left p-2 rounded mb-2 bg-blue-500 text-white"
          onClick={onNewChat}
        >
          Start New Chat
        </button>
      </div>
      <div>
        {chatThreads.map((chat, index) => (
          <div key={index} className="relative flex items-center mb-2">
            <button
              className={`w-full text-left p-2 rounded ${
                activeChatIndex === index
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300"
              }`}
              onClick={() => onSelectChat(index)}
            >
              Chat {index + 1}
            </button>
            <div className="absolute top-0 right-0 mt-1 mr-6 space-x-2">
              <button
                className="text-gray-600"
                onClick={() => onDeleteChat(index)}
              >
                <i className="fas fa-pencil-alt"></i>
              </button>
              <button
                className="text-gray-600"
                onClick={() => onDeleteChat(index)}
              >
                <i className="fas fa-trash"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
