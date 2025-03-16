import { PlusCircleIcon } from "@heroicons/react/16/solid";

interface TaskAddButtonProps {
  onClick: () => void;
}

const TaskAddButton = ({ onClick }: TaskAddButtonProps) => {
  return (
    <button onClick={onClick} className="flex gap-2 items-center p-1">
      <PlusCircleIcon className="size-7 text-[#9dcfde]" />
      <span className="text-gray-500">추가하기</span>
    </button>
  );
};

export default TaskAddButton;
