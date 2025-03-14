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
  const [searchedTaskList, setSearchedTaskList] = useState(columnInfo.taskList);
  const [isCardEditing, setIsCardEditing] = useState(false);
  const onTaskAddButtonClick = () => {
    setIsCardEditing(true);
  };

  const onEditorClickAway = () => {
    setIsCardEditing(false);
  };

  useEffect(() => {
    const newList = columnInfo.taskList.filter((task) =>
      task.title.toLowerCase().includes(searchWord)
    );
    setSearchedTaskList(newList);
  }, [columnInfo.taskList, searchWord]);

  const editorRef = useClickAway<HTMLDivElement>(onEditorClickAway);

  return (
    <div className="flex flex-col gap-5 mt-5 w-full">
      <div className="flex justify-between text-gray-500 px-1">
        <span className="text-sm">{columnInfo.state}</span>
        <TaskSortButton columnId={columnInfo.id} />
      </div>
      <div className="flex flex-col gap-5">
        {searchedTaskList.map((card, index) => (
          <TaskCard key={`card-${columnInfo.state}-${index}`} taskInfo={card} />
        ))}
        {isCardEditing && <TaskCardEditor ref={editorRef} />}
      </div>
      <TaskAddButton onClick={onTaskAddButtonClick} />
    </div>
  );
};

export default StateColumn;
