import { ITask } from "./types/task";

export const dummyTodoList: ITask[] = [
  {
    title: "A프로젝트",
    state: "TO DO",
    priority: 3,
    memberList: ["James", "Mina"],
    startDate: new Date(2025, 3, 15),
    endDate: new Date(2025, 3, 30),
  },
  {
    title: "B프로젝트",
    state: "TO DO",
    priority: 1,
    memberList: ["Koon"],
    startDate: new Date(2025, 3, 20),
    endDate: new Date(2025, 4, 1),
  },
];

export const dummyInProgressList: ITask[] = [
  {
    title: "C프로젝트",
    state: "IN PROGRESS",
    priority: 3,
    memberList: [],
    startDate: new Date(2025, 3, 2),
    endDate: new Date(2025, 3, 30),
  },
  {
    title: "D프로젝트",
    state: "IN PROGRESS",
    priority: 2,
    memberList: [],
    startDate: new Date(2025, 3, 10),
    endDate: new Date(2025, 5, 1),
  },
];

export const dummyDoneList: ITask[] = [
  {
    title: "E프로젝트",
    state: "DONE",
    priority: 1,
    memberList: [],
    startDate: new Date(2025, 1, 15),
    endDate: new Date(2025, 1, 30),
  },
  {
    title: "F프로젝트",
    state: "DONE",
    priority: 3,
    memberList: [],
    startDate: new Date(2025, 2, 13),
    endDate: new Date(2025, 3, 5),
  },
];
