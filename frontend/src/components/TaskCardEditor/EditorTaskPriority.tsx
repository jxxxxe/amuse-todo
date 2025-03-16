import { useState } from "react";
import { TaskPriorityType } from "../../types";

interface EditorTaskPriorityProps {
  onChange: (priority: TaskPriorityType) => void;
  initialValue: TaskPriorityType;
}

const EditorTaskPriority = ({
  onChange,
  initialValue,
}: EditorTaskPriorityProps) => {
  const [selectedPridority, setSelectedPridority] = useState(initialValue);
  const onPriorityButtonClick = (priority: TaskPriorityType) => {
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
              onPriorityButtonClick((index + 1) as TaskPriorityType)
            }
          >
            {priorityNameList[index]}
          </button>
        ) : (
          <button
            className={`rounded text-black border border-gray-400 text-sm w-fit px-1.5`}
            key={`editor-priority-${index}`}
            onClick={() =>
              onPriorityButtonClick((index + 1) as TaskPriorityType)
            }
          >
            {priorityNameList[index]}
          </button>
        )
      )}
    </div>
  );
};

export default EditorTaskPriority;
