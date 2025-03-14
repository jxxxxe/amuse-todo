import { useEffect, useState } from "react";
import TaskAddButton from "./TaskAddButton";
import TaskCard from "./TaskCard";
import TaskSortButton from "./TaskSortButton";
import TaskCardEditor from "../TaskCardEditor";
import useClickAway from "../../hooks/useClickAway";
import { IColumn } from "../../types/task";

interface ColumnProps {
  columnInfo: IColumn;
  searchWord: string;
}

const StateColumn = ({ columnInfo, searchWord }: ColumnProps) => {
  const { id, state, taskList } = columnInfo;
  const [searchedTaskList, setSearchedTaskList] = useState(taskList);
  const [isCardEditing, setIsCardEditing] = useState(false);

  useEffect(() => {
    const newList = taskList.filter((task) =>
      task.title.toLowerCase().includes(searchWord)
    );
    setSearchedTaskList(newList);
  }, [taskList, searchWord, columnInfo]);

  const onTaskAddButtonClick = () => {
    setIsCardEditing(true);
  };

  const onEditorClickAway = () => {
    setIsCardEditing(false);
  };
  const editorRef = useClickAway<HTMLDivElement>(onEditorClickAway);

  return (
    <div className="flex flex-col gap-5 mt-5 w-full">
      <div className="flex justify-between text-gray-500 px-1">
        <span className="text-sm">{state}</span>
        <TaskSortButton columnId={id} />
      </div>
      <div className="flex flex-col gap-5">
        {searchedTaskList.map((task, index) => (
          <TaskCard
            key={`card-${state}-${index}`}
            columnId={columnInfo.id}
            taskInfo={task}
          />
        ))}
        {isCardEditing && <TaskCardEditor ref={editorRef} />}
      </div>
      <TaskAddButton onClick={onTaskAddButtonClick} />
    </div>
  );
};

export default StateColumn;
