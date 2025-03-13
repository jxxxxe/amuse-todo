import { CalendarIcon } from "@heroicons/react/16/solid";
import { ITask } from "../../../types/task";
import TaskPriority from "./TaskPriority";
import UpdateAndDeleteButton from "./UpdateAndDeleteButton";

interface TaskCardProps {
  card: ITask;
}

const TaskCard = ({ card }: TaskCardProps) => {
  return (
    <div className="bg-white w-70 h-40 flex flex-col text-black rounded-xl p-5">
      <div className="flex justify-between mb-3">
        <TaskPriority priority={card.priority} />
        <UpdateAndDeleteButton />
      </div>
      <div className="font-semibold flex-1">{card.title}</div>
      <div className="flex text-gray-500 items-center gap-1 text-sm">
        <CalendarIcon className="size-5" />
        <div>{card.startDate.toLocaleDateString()}</div>
        <span>-</span>
        <div>{card.endDate.toLocaleDateString()}</div>
      </div>
    </div>
  );
};

export default TaskCard;
