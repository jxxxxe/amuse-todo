import { useState } from "react";
import useClickAway from "../../hooks/useClickAway";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/16/solid";
import useCardStore from "../../stores/useCardStore";

interface CardSortButtonProps {
  columnId: number;
}

const CardSortButton = ({ columnId }: CardSortButtonProps) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const sortRef = useClickAway<HTMLDivElement>(() => setIsPopoverOpen(false));
  const sortNameList = ["기본순", "이름순", "중요도순", "시작일순", "종료일순"];
  const [currentSortIndex, setCurrentSortIndex] = useState(0);

  const {
    sortCardByName,
    sortCardByPriority,
    sortCardByStartDate,
    sortCardByEndDate,
  } = useCardStore();

  const togglePopover = () => {
    setIsPopoverOpen((prev) => !prev);
  };

  const sortList = (index: number) => {
    if (index === 1) {
      sortCardByName(columnId);
    } else if (index === 2) {
      sortCardByPriority(columnId);
    } else if (index === 3) {
      sortCardByStartDate(columnId);
    } else if (index === 4) {
      sortCardByEndDate(columnId);
    }
    setCurrentSortIndex(index);
    setIsPopoverOpen(false);
  };

  return (
    <div className="relative">
      {isPopoverOpen ? (
        <button className="flex" onClick={togglePopover}>
          {sortNameList[currentSortIndex]}
          <ChevronUpIcon className="size-4" />
        </button>
      ) : (
        <button className="flex" onClick={togglePopover}>
          {sortNameList[currentSortIndex]}
          <ChevronDownIcon className="size-4" />
        </button>
      )}

      {isPopoverOpen && (
        <div
          ref={sortRef}
          className={`absolute *:text-start *: w-19 top-full *:hover:bg-gray-100 divide-y divide-gray-100 flex *:p-2 flex-col rounded border border-gray-300 bg-white z-10`}
        >
          {sortNameList.map((name, index) => (
            <button
              className={currentSortIndex === index ? "bg-slate-200" : ""}
              key={index}
              onClick={() => sortList(index)}
            >
              {name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default CardSortButton;
