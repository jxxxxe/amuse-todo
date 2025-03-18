import { CalendarIcon } from "@heroicons/react/16/solid";
import { ICard } from "../../../types";
import CardPriority from "./CardPriority";
import UpdateAndDeleteButton from "./UpdateAndDeleteButton";
import { useState } from "react";
import CardEditor from "../../CardEditor";
import useCardStore from "../../../stores/useCardStore";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

interface CardProps {
  columnId: number;
  cardInfo: ICard;
}

const Card = ({ columnId, cardInfo }: CardProps) => {
  const [isCardUpdating, setIsCardUpdating] = useState(false);
  const [isDragDisabled, setIsDragDisabled] = useState(false);
  const { updateCard, currentSortIndex } = useCardStore();
  const { attributes, listeners, setNodeRef, transform } = useSortable({
    id: cardInfo.id,
    disabled: currentSortIndex !== 0 || isDragDisabled,
  });

  const updateCardToColumn = async (updatedCard: ICard) => {
    updateCard(columnId, cardInfo.id, updatedCard);
    setIsCardUpdating(false);
  };

  if (isCardUpdating) {
    return (
      <div className="w-full">
        <CardEditor cardInfo={cardInfo} saveCard={updateCardToColumn} />
      </div>
    );
  }

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      className="bg-white max-w-100 w-full h-40 flex flex-col text-black rounded-xl p-5"
      style={{
        transform: CSS.Transform.toString(transform),
        cursor: currentSortIndex === 0 ? "pointer" : "default",
      }}
    >
      <div className="flex justify-between mb-3">
        <CardPriority priority={cardInfo.priority} />
        <UpdateAndDeleteButton
          columnId={columnId}
          cardId={cardInfo.id}
          changeCardToEditor={() => setIsCardUpdating(true)}
          preventDrag={() => {
            setIsDragDisabled(true);
          }}
          allowDrag={() => setIsDragDisabled(false)}
        />
      </div>
      <div className="font-semibold flex-1">{cardInfo.title}</div>
      <div className="flex text-gray-500 items-center gap-1 text-sm">
        <CalendarIcon className="size-5" />
        <div>{new Date(cardInfo.startDate).toLocaleDateString()}</div>
        <span>-</span>
        <div>{new Date(cardInfo.endDate).toLocaleDateString()}</div>
      </div>
    </div>
  );
};

export default Card;
