import { useEffect, useState } from "react";
import CardAddButton from "./CardAddButton";
import CardSortButton from "./CardSortButton";
import { IColumn, ICard } from "../../types";
import useCardStore from "../../stores/useCardStore";
import Card from "./Card";
import CardEditor from "../CardEditor";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useDroppable } from "@dnd-kit/core";

interface ColumnProps {
  columnInfo: IColumn;
  searchWord: string;
}

const StateColumn = ({ columnInfo, searchWord }: ColumnProps) => {
  const [viewedCardList, setViewedCardList] = useState(columnInfo.cardList);
  const [isNewCardAdding, setIsNewCardAdding] = useState(false);
  const { addCard } = useCardStore();
  const { setNodeRef } = useDroppable({
    id: columnInfo.id,
    data: { columnId: columnInfo.id },
  });

  const createCard = (newCard: ICard) => {
    addCard(columnInfo.id, newCard);
    setIsNewCardAdding(false);
  };

  useEffect(() => {
    const newList = columnInfo.cardList?.filter((card) =>
      card.title.toLowerCase().includes(searchWord)
    );
    setViewedCardList(newList);
  }, [searchWord, columnInfo.cardList]);

  useEffect(() => {
    setViewedCardList(columnInfo.cardList);
  }, [columnInfo]);

  return (
    <div
      ref={setNodeRef}
      className="flex flex-col gap-5 mt-5 w-full items-center flex-1 max-w-[25rem]"
    >
      <div className="flex self-end text-gray-500 px-1">
        <CardSortButton columnId={columnInfo.id} />
      </div>
      <SortableContext
        items={viewedCardList?.map((card) => card.id)}
        strategy={verticalListSortingStrategy}
      >
        <div className="flex flex-col gap-5 h-full w-full items-center">
          <div className="flex flex-col gap-5 w-full items-center">
            {viewedCardList?.map((card, index) => (
              <Card
                key={`card-${columnInfo.state}-${index}`}
                columnId={columnInfo.id}
                cardInfo={card}
              />
            ))}
            {isNewCardAdding && <CardEditor saveCard={createCard} />}
          </div>
          <CardAddButton onClick={() => setIsNewCardAdding(true)} />
        </div>
      </SortableContext>
    </div>
  );
};

export default StateColumn;
