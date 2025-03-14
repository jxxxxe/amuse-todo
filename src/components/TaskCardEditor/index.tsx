import { CalendarIcon, ItalicIcon } from "@heroicons/react/16/solid";
import { NumberedListIcon } from "@heroicons/react/24/outline";
import { Ref } from "react";
import CardPriority from "./CardPriority";
import CardCalendar from "./CardCalendar";

interface TaskCardEditor {
  ref?: Ref<HTMLDivElement> | undefined;
}

const TaskCardEditor = ({ ref }: TaskCardEditor) => {
  return (
    <div
      ref={ref}
      className="bg-white max-w-70 h-40 *:flex *:gap-2 *:items-center flex flex-col text-black rounded-xl p-5 gap-3"
    >
      <div className="flex gap-1">
        <ItalicIcon className="size-5" />
        <input
          placeholder="제목"
          className="w-full border border-gray-200 p-1"
        />
      </div>
      <div className="flex w-full">
        <NumberedListIcon className="size-5" />
        <CardPriority />
      </div>
      <div className="flex items-center">
        <CalendarIcon className="size-5" />
        <div className="flex gap-2 items-center">
          <CardCalendar className="w-20" />
          <span>-</span>
          <CardCalendar className="w-20" />
        </div>
      </div>
    </div>
  );
};

export default TaskCardEditor;
