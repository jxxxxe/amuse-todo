import { ITask } from "../../types/task";
import TaskAddButton from "./TaskAddButton";
import TaskCard from "./TaskCard";
import TaskSortButton from "./TaskSortButton";

interface ColumnProps {
  stateTitle: string;
  cardList: ITask[];
}

const StateColumn = ({ stateTitle, cardList }: ColumnProps) => {
  return (
    <div className="flex flex-col gap-5 mt-5">
      <div className="flex justify-between text-gray-500 px-1">
        <span className="text-sm">{stateTitle}</span>
        <TaskSortButton />
      </div>
      <div className="flex flex-col gap-5">
        {cardList.map((card, index) => (
          <TaskCard key={`card-${stateTitle}-${index}`} card={card} />
        ))}
      </div>
      <TaskAddButton />
    </div>
  );
};

export default StateColumn;
