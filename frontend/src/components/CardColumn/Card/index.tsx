import { CalendarIcon } from "@heroicons/react/16/solid";
import { ICard } from "../../../types";
import CardPriority from "./CardPriority";
import UpdateAndDeleteButton from "./UpdateAndDeleteButton";
import { useState } from "react";
import useClickAway from "../../../hooks/useClickAway";
import CardEditor from "../../CardEditor";
import useCardStore from "../../../stores/useCardStore";

interface CardProps {
  columnId: number;
  cardInfo: ICard;
}

const Card = ({ columnId, cardInfo }: CardProps) => {
  const [isCardUpdating, setIsCardUpdating] = useState(false);
  const cardRef = useClickAway<HTMLDivElement>(() => setIsCardUpdating(false));
  const { updateCard } = useCardStore();

  const updateCardToColumn = (updatedCard: ICard) => {
    setIsCardUpdating(false);
    updateCard(columnId, cardInfo.id, updatedCard);
  };

  if (isCardUpdating) {
    return <CardEditor cardInfo={cardInfo} saveCard={updateCardToColumn} />;
  }

  return (
    <div
      ref={cardRef}
      className="bg-white max-w-70 h-40 flex flex-col text-black rounded-xl p-5"
    >
      <div className="flex justify-between mb-3">
        <CardPriority priority={cardInfo.priority} />
        <UpdateAndDeleteButton
          columnId={columnId}
          cardId={cardInfo.id}
          changeCardToEditor={() => setIsCardUpdating(true)}
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
