import { DragEndEvent } from "@dnd-kit/core";
import { IColumn } from "../types";
import { arrayMove } from "@dnd-kit/sortable";

export const handleDragEnd = (
  event: DragEndEvent,
  cardColumnList: IColumn[]
) => {
  const { active, over } = event;
  if (!over) return;

  const activeId = active.id;
  const overId = over.id;

  const column = cardColumnList[0];
  const taskIndex = column.cardList.findIndex((task) => task.id === activeId);
  const overTaskIndex = column.cardList.findIndex((task) => task.id === overId);

  const updatedTasks = arrayMove(column.cardList, taskIndex, overTaskIndex);

  const updatedColumns = [...cardColumnList];
  updatedColumns[0] = { ...column, cardList: updatedTasks };

  return updatedColumns;
};
