import { useState } from "react";
import useClickAway from "../../hooks/useClickAway";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/16/solid";

const TaskSortButton = () => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const sortRef = useClickAway<HTMLDivElement>(() => setIsPopoverOpen(false));

  const openPopover = () => {
    setIsPopoverOpen(true);
  };

  return (
    <div className="relative">
      <button onClick={openPopover}>
        <AdjustmentsHorizontalIcon className="size-5" />
      </button>
      {isPopoverOpen && (
        <div
          ref={sortRef}
          className="absolute *:text-start w-19 top-full *:hover:bg-gray-100 divide-y divide-gray-100 flex *:p-2 flex-col rounded border border-gray-300 bg-white"
        >
          <button>이름순</button>
          <button>중요도순</button>
          <button>시작일순</button>
          <button>종료일순</button>
        </div>
      )}
    </div>
  );
};

export default TaskSortButton;
