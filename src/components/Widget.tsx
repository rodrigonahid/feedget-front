import { useState } from "react";
import { ChatTeardropDots } from "phosphor-react";

export function Widget() {
  const [isOpened, setIsOpened] = useState(false);

  const toggleOpen = () => setIsOpened(!isOpened);

  return (
    <>
      {isOpened && "is Open!"}
      <div className="absolute right-4 bottom-4">
        <button
          onClick={toggleOpen}
          className="bg-brand-500 hover:bg-brand-400 rounded-full px-3 h-12 text-white flex items-center group"
        >
          <ChatTeardropDots className="w-6 h-6" />
          <div className="max-w-0 group-hover:max-w-xs transition-all overflow-hidden">
            <span className="ml-3">Feedback</span>
          </div>
        </button>
      </div>
    </>
  );
}
