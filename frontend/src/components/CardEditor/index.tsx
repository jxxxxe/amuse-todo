import { CalendarIcon, ItalicIcon } from "@heroicons/react/16/solid";
import { NumberedListIcon } from "@heroicons/react/24/outline";
import { ChangeEvent, useState } from "react";
import EditorCardCalendar from "./EditorCardCalendar";
import { ICard, CardPriorityType } from "../../types";
import useClickAway from "../../hooks/useClickAway";
import EditorCardPriority from "./EditorCardPriority";

interface CardEditor {
  cardInfo?: ICard;
  saveCard: (newCard: ICard) => void;
}

const defaultCardInfo = {
  id: Math.random(),
  title: "",
  priority: 1 as CardPriorityType,
  memberList: [],
  startDate: new Date(),
  endDate: new Date(),
};

const CardEditor = ({ cardInfo = defaultCardInfo, saveCard }: CardEditor) => {
  const [newCardInfo, setNewCardInfo] = useState(cardInfo);

  const onSaveNewCard = () => {
    saveCard(newCardInfo);
  };
  const editorRef = useClickAway<HTMLDivElement>(onSaveNewCard);

  const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setNewCardInfo((prev) => ({
      ...prev,
      title: e.target.value,
    }));
  };
  const onChangePriority = (newPriority: CardPriorityType) => {
    setNewCardInfo((prev) => ({
      ...prev,
      priority: newPriority,
    }));
  };

  const onChangeStartDate = (newStartDate: Date) => {
    setNewCardInfo((prev) => ({
      ...prev,
      startDate: newStartDate,
    }));
  };

  const onChangeEndDate = (newEndDate: Date) => {
    setNewCardInfo((prev) => ({
      ...prev,
      endDate: newEndDate,
    }));
  };

  return (
    <div
      ref={editorRef}
      className="bg-white max-w-70 h-40 *:flex *:gap-2 *:items-center flex flex-col text-black rounded-xl p-4 gap-3"
    >
      <div className="flex gap-1">
        <ItalicIcon className="size-5" />
        <input
          placeholder="제목"
          className="w-full border border-gray-200 p-1"
          value={newCardInfo.title}
          onChange={onChangeTitle}
        />
      </div>
      <div className="flex w-full">
        <NumberedListIcon className="size-5" />
        <EditorCardPriority
          initialValue={newCardInfo.priority}
          onChange={onChangePriority}
        />
      </div>
      <div className="flex items-center">
        <CalendarIcon className="w-5" />
        <span className="text-gray-700">시작일</span>
        <EditorCardCalendar
          initialDate={newCardInfo.startDate}
          onChange={onChangeStartDate}
        />
      </div>
      <div className="flex items-center">
        <CalendarIcon className="w-5" />
        <span className="text-gray-700">종료일</span>
        <EditorCardCalendar
          initialDate={newCardInfo.endDate}
          onChange={onChangeEndDate}
          startDate={newCardInfo.startDate}
        />
      </div>
    </div>
  );
};

export default CardEditor;
