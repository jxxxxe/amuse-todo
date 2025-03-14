import { CalendarIcon } from "@heroicons/react/16/solid";
import { ITask } from "../../../types/task";
import TaskPriority from "./TaskPriority";
import UpdateAndDeleteButton from "./UpdateAndDeleteButton";

interface TaskCardProps {
  taskInfo: ITask;
}

const TaskCard = ({ taskInfo }: TaskCardProps) => {
  return (
    <div className="bg-white max-w-70 h-40 flex flex-col text-black rounded-xl p-5">
      <div className="flex justify-between mb-3">
        <TaskPriority priority={taskInfo.priority} />
        <UpdateAndDeleteButton />
      </div>
      <div className="font-semibold flex-1">{taskInfo.title}</div>
      <div className="flex text-gray-500 items-center gap-1 text-sm">
        <CalendarIcon className="size-5" />
        <div>{taskInfo.startDate.toLocaleDateString()}</div>
        <span>-</span>
        <div>{taskInfo.endDate.toLocaleDateString()}</div>
      </div>
    </div>
  );
};

export default TaskCard;
