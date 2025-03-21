import {
  EllipsisVerticalIcon,
  PencilIcon,
  TrashIcon,
} from "@heroicons/react/16/solid";
import { useState } from "react";
import useClickAway from "../../../../hooks/useClickAway";
import useCardStore from "../../../../stores/useCardStore";

interface UpdateAndDeleteButtonProps {
  columnId: number;
  cardId: number;
  changeCardToEditor: () => void;
  preventDrag: () => void;
  allowDrag: () => void;
}

const UpdateAndDeleteButton = ({
  columnId,
  cardId,
  changeCardToEditor,
  preventDrag,
  allowDrag,
}: UpdateAndDeleteButtonProps) => {
  const { deleteCard } = useCardStore();
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const popoverRef = useClickAway<HTMLDivElement>(() =>
    setIsPopoverOpen(false)
  );

  const togglePopover = () => {
    setIsPopoverOpen((prev) => !prev);
  };

  const onUpdateButtonClick = () => {
    changeCardToEditor();
    setIsPopoverOpen(false);
  };

  const onDeleteButtonClick = () => {
    deleteCard(columnId, cardId);
    setIsPopoverOpen(false);
  };

  return (
    <div
      className="flex relative"
      onMouseOver={preventDrag}
      onMouseLeave={allowDrag}
    >
      <button onClick={togglePopover}>
        <EllipsisVerticalIcon className="size-4" />
      </button>
      {isPopoverOpen && (
        <div
          ref={popoverRef}
          className="absolute w-25  left-full *:hover:bg-gray-100 divide-gray-100 divide-y flex *:p-2 *:flex *:gap-1 *:items-center flex-col rounded border border-gray-300 bg-white"
        >
          <button onClick={onUpdateButtonClick}>
            <PencilIcon className="size-5" />
            수정하기
          </button>
          <button onClick={onDeleteButtonClick} className="text-red-400 ">
            <TrashIcon className="size-5" />
            삭제하기
          </button>
        </div>
      )}
    </div>
  );
};

export default UpdateAndDeleteButton;
