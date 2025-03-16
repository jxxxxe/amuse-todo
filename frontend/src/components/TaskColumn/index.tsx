import { useEffect, useState } from "react";
import TaskAddButton from "./TaskAddButton";
import TaskCard from "./TaskCard";
import TaskSortButton from "./TaskSortButton";
import TaskCardEditor from "../TaskCardEditor";
import { IColumn, ITask } from "../../types/task";
import useTaskStore from "../../stores/useTaskStore";

interface ColumnProps {
  columnInfo: IColumn;
  searchWord: string;
}

const StateColumn = ({ columnInfo, searchWord }: ColumnProps) => {
  const [viewedTaskList, setViewedTaskList] = useState(columnInfo.taskList);
  const [isNewCardAdding, setIsNewCardAdding] = useState(false);
  const { addTask } = useTaskStore();

  const createCard = (newTask: ITask) => {
    addTask(columnInfo.id, newTask);
    setIsNewCardAdding(false);
  };

  useEffect(() => {
    const newList = columnInfo.taskList.filter((task) =>
      task.title.toLowerCase().includes(searchWord)
    );
    setViewedTaskList(newList);
  }, [searchWord, columnInfo.taskList]);

  useEffect(() => {
    setViewedTaskList(columnInfo.taskList);
  }, [columnInfo]);

  return (
    <div className="flex flex-col gap-5 mt-5 w-full">
      <div className="flex justify-between text-gray-500 px-1">
        <span className="text-sm">{columnInfo.state}</span>
        <TaskSortButton columnId={columnInfo.id} />
      </div>
      <div className="flex flex-col gap-5">
        {viewedTaskList.map((task, index) => (
          <TaskCard
            key={`card-${columnInfo.state}-${index}`}
            columnId={columnInfo.id}
            taskInfo={task}
          />
        ))}
        {isNewCardAdding && <TaskCardEditor saveCard={createCard} />}
      </div>
      <TaskAddButton onClick={() => setIsNewCardAdding(true)} />
    </div>
  );
};

export default StateColumn;
