export type TaskPriorityType = 1 | 2 | 3;

export interface ITask {
  title: string;
  state: "TO DO" | "IN PROGRESS" | "DONE";
  priority: TaskPriorityType;
  memberList: string[];
  startDate: Date;
  endDate: Date;
}
