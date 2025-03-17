export type CardPriorityType = 1 | 2 | 3;
export type CardStateType = "TO DO" | "IN PROGRESS" | "DONE";

export interface IColumn {
  id: number;
  state: CardStateType;
  cardList: ICard[];
}

export interface ICard {
  id: number;
  title: string;
  priority: CardPriorityType;
  memberList: string[];
  startDate: Date;
  endDate: Date;
}
