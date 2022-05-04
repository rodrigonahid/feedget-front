import { Popover } from "@headlessui/react";
import { ChatTeardropDots } from "phosphor-react";
import { WidgetForm } from "./WidgetForm";

export function Widget() {
  return (
    <>
      <Popover className="absolute right-5 bottom-5 flex flex-col items-end">
        <Popover.Panel>
          <WidgetForm />
        </Popover.Panel>

        <Popover.Button className="bg-brand-500 hover:bg-brand-400 rounded-full px-3 h-12 text-white flex items-center group">
          <ChatTeardropDots className="w-6 h-6" />
          <div className="max-w-0 group-hover:max-w-xs transition-all overflow-hidden">
            <span className="ml-3">Feedback</span>
          </div>
        </Popover.Button>
      </Popover>
    </>
  );
}
