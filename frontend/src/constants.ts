import { IColumn } from "./types";

export const DEFAULT_COLUMN_LIST: IColumn[] = [
  {
    id: 1,
    state: "TO DO",
    cardList: [],
  },
  {
    id: 2,
    state: "IN PROGRESS",
    cardList: [],
  },
  {
    id: 3,
    state: "DONE",
    cardList: [],
  },
];
