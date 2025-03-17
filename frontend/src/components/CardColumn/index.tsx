import { useEffect, useState } from "react";
import CardAddButton from "./CardAddButton";
import CardSortButton from "./CardSortButton";
import { IColumn, ICard } from "../../types";
import useCardStore from "../../stores/useCardStore";
import Card from "./Card";
import CardEditor from "../CardEditor";

interface ColumnProps {
  columnInfo: IColumn;
  searchWord: string;
}

const StateColumn = ({ columnInfo, searchWord }: ColumnProps) => {
  const [viewedCardList, setViewedCardList] = useState(columnInfo.cardList);
  const [isNewCardAdding, setIsNewCardAdding] = useState(false);
  const { addCard } = useCardStore();

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
    <div className="flex flex-col gap-5 mt-5 w-full">
      <div className="flex justify-between text-gray-500 px-1">
        <span className="text-sm">{columnInfo.state}</span>
        <CardSortButton columnId={columnInfo.id} />
      </div>
      <div className="flex flex-col gap-5">
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
  );
};

export default StateColumn;
