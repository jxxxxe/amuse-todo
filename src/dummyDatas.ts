import { IColumn } from "./types/task";

export const initialColumns: IColumn[] = [
  {
    id: 1,
    state: "TO DO",
    taskList: [
      {
        id: 1,
        title: "A프로젝트",
        priority: 3,
        memberList: ["James", "Mina"],
        startDate: new Date(2025, 3, 15),
        endDate: new Date(2025, 3, 30),
      },
      {
        id: 2,
        title: "B프로젝트",
        priority: 1,
        memberList: ["Koon"],
        startDate: new Date(2025, 3, 20),
        endDate: new Date(2025, 4, 1),
      },
    ],
  },
  {
    id: 2,
    state: "IN PROGRESS",
    taskList: [
      {
        id: 3,
        title: "C프로젝트",
        priority: 3,
        memberList: [],
        startDate: new Date(2025, 3, 2),
        endDate: new Date(2025, 3, 30),
      },
      {
        id: 4,
        title: "D프로젝트",
        priority: 2,
        memberList: [],
        startDate: new Date(2025, 3, 10),
        endDate: new Date(2025, 5, 1),
      },
    ],
  },
  {
    id: 3,
    state: "DONE",
    taskList: [
      {
        id: 5,
        title: "E프로젝트",
        priority: 1,
        memberList: [],
        startDate: new Date(2025, 1, 15),
        endDate: new Date(2025, 1, 30),
      },
      {
        id: 6,
        title: "F프로젝트",
        priority: 3,
        memberList: [],
        startDate: new Date(2025, 2, 13),
        endDate: new Date(2025, 3, 5),
      },
    ],
  },
];
