import { CalendarIcon } from "@heroicons/react/16/solid";
import { ITask } from "../../../types/task";
import TaskPriority from "./TaskPriority";
import UpdateAndDeleteButton from "./UpdateAndDeleteButton";
import { useState } from "react";
import useClickAway from "../../../hooks/useClickAway";
import TaskCardEditor from "../../TaskCardEditor";
import useTaskStore from "../../../stores/useTaskStore";

interface TaskCardProps {
  columnId: number;
  taskInfo: ITask;
}

const TaskCard = ({ columnId, taskInfo }: TaskCardProps) => {
  const [isCardUpdating, setIsCardUpdating] = useState(false);
  const cardRef = useClickAway<HTMLDivElement>(() => setIsCardUpdating(false));
  const { updateTask } = useTaskStore();

  const updateCard = (updatedTask: ITask) => {
    setIsCardUpdating(false);
    updateTask(columnId, taskInfo.id, updatedTask);
  };

  if (isCardUpdating) {
    return <TaskCardEditor taskInfo={taskInfo} saveCard={updateCard} />;
  }

  return (
    <div
      ref={cardRef}
      className="bg-white max-w-70 h-40 flex flex-col text-black rounded-xl p-5"
    >
      <div className="flex justify-between mb-3">
        <TaskPriority priority={taskInfo.priority} />
        <UpdateAndDeleteButton
          columnId={columnId}
          taskId={taskInfo.id}
          changeCardToEditor={() => setIsCardUpdating(true)}
        />
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
