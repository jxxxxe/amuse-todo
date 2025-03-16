import { IColumn } from "./types";

export const DEFAULT_COLUMN_LIST: IColumn[] = [
  {
    id: 1,
    state: "TO DO",
    taskList: [],
  },
  {
    id: 2,
    state: "IN PROGRESS",
    taskList: [],
  },
  {
    id: 3,
    state: "DONE",
    taskList: [],
  },
];
