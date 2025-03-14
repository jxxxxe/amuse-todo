import { useState } from "react";
import { ITask, TaskStateType } from "../../types/task";
import TaskAddButton from "./TaskAddButton";
import TaskCard from "./TaskCard";
import TaskSortButton from "./TaskSortButton";
import TaskCardEditor from "../TaskCardEditor";
import useClickAway from "../../hooks/useClickAway";

interface ColumnProps {
  columnId: number;
  stateTitle: TaskStateType;
  initialCardList: ITask[];
}

const StateColumn = ({
  columnId,
  stateTitle,
  initialCardList,
}: ColumnProps) => {
  const [cardList, setCardList] = useState(initialCardList);
  const [isCardEditing, setIsCardEditing] = useState(false);

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
        <span className="text-sm">{stateTitle}</span>
        <TaskSortButton columnId={columnId} />
      </div>
      <div className="flex flex-col gap-5">
        {cardList.map((card, index) => (
          <TaskCard key={`card-${stateTitle}-${index}`} taskInfo={card} />
        ))}
        {isCardEditing && <TaskCardEditor ref={editorRef} />}
      </div>
      <TaskAddButton onClick={onTaskAddButtonClick} />
    </div>
  );
};

export default StateColumn;
