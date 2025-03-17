import { CardPriorityType } from "../../../types";

interface CardPriorityProps {
  priority: CardPriorityType;
}
const CardPriority = ({ priority }: CardPriorityProps) => {
  const priorityClassNameList = [
    "text-gray-400  bg-gray-200",
    "text-green-600 bg-green-100",
    "text-orange-600 bg-orange-100",
  ];
  const priorityNameList = ["Low", "Medium", "High"];

  const priorityClassName = `rounded-xl text-sm w-fit px-1.5 ${
    priorityClassNameList[priority - 1]
  }`;

  return (
    <div className={priorityClassName}>{priorityNameList[priority - 1]}</div>
  );
};

export default CardPriority;
