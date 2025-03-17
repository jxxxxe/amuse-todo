import { useState } from "react";
import { CardPriorityType } from "../../types";

interface EditorCardPriorityProps {
  onChange: (priority: CardPriorityType) => void;
  initialValue: CardPriorityType;
}

const EditorCardPriority = ({
  onChange,
  initialValue,
}: EditorCardPriorityProps) => {
  const [selectedPridority, setSelectedPridority] = useState(initialValue);
  const onPriorityButtonClick = (priority: CardPriorityType) => {
    setSelectedPridority(priority);
    onChange(priority);
  };

  const selectedPriorityClassNameList = [
    "text-gray-600  bg-gray-200 border-gray-400",
    "text-green-600 bg-green-100 border-green-400",
    "text-orange-600 bg-orange-100 border-orange-400",
  ];

  const priorityNameList = ["Low", "Medium", "High"];

  return (
    <div className="flex w-full gap-2 text-xs">
      {Array.from({ length: 3 }, (_, index) =>
        selectedPridority === index + 1 ? (
          <button
            className={`rounded text-sm w-fit border px-1.5 font-semibold ${selectedPriorityClassNameList[index]}`}
            key={`editor-priority-${index}`}
            onClick={() =>
              onPriorityButtonClick((index + 1) as CardPriorityType)
            }
          >
            {priorityNameList[index]}
          </button>
        ) : (
          <button
            className={`rounded text-black border border-gray-400 text-sm w-fit px-1.5`}
            key={`editor-priority-${index}`}
            onClick={() =>
              onPriorityButtonClick((index + 1) as CardPriorityType)
            }
          >
            {priorityNameList[index]}
          </button>
        )
      )}
    </div>
  );
};

export default EditorCardPriority;
