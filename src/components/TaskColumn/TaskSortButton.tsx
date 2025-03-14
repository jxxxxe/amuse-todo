import { useState } from "react";
import useClickAway from "../../hooks/useClickAway";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/16/solid";
import useTaskStore from "../../stores/useTaskStore";

interface TaskSortButtonProps {
  columnId: number;
}

const TaskSortButton = ({ columnId }: TaskSortButtonProps) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const sortRef = useClickAway<HTMLDivElement>(() => setIsPopoverOpen(false));
  const sortNameList = ["이름순", "중요도순", "시작일순", "종료일순"];

  const {
    sortTaskByName,
    sortTaskByPriority,
    sortTaskByStartDate,
    sortTaskByEndDate,
  } = useTaskStore();

  const openPopover = () => {
    setIsPopoverOpen(true);
  };

  const sortList = (index: number) => {
    if (index === 0) {
      sortTaskByName(columnId);
    } else if (index === 1) {
      sortTaskByPriority(columnId);
    } else if (index === 2) {
      sortTaskByStartDate(columnId);
    } else if (index === 3) {
      sortTaskByEndDate(columnId);
    }
  };

  return (
    <div className="relative">
      <button onClick={openPopover}>
        <AdjustmentsHorizontalIcon className="size-5" />
      </button>
      {isPopoverOpen && (
        <div
          ref={sortRef}
          className={`absolute *:text-start *: w-19 top-full *:hover:bg-gray-100 divide-y divide-gray-100 flex *:p-2 flex-col rounded border border-gray-300 bg-white`}
        >
          {sortNameList.map((name, index) => (
            <button key={index} onClick={() => sortList(index)}>
              {name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default TaskSortButton;
