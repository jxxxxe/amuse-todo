import { PlusCircleIcon } from "@heroicons/react/16/solid";

const TaskAddButton = () => {
  return (
    <button className="flex gap-2 items-center p-1">
      <PlusCircleIcon className="size-7 text-[#9dcfde]" />
      <span className="text-gray-500">Add new task</span>
    </button>
  );
};

export default TaskAddButton;
