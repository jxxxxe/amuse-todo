export type TaskPriorityType = 1 | 2 | 3;
export type TaskStateType = "TO DO" | "IN PROGRESS" | "DONE";

export interface IColumn {
  id: number;
  state: TaskStateType;
  taskList: ITask[];
}

export interface ITask {
  id: number;
  title: string;
  priority: TaskPriorityType;
  memberList: string[];
  startDate: Date;
  endDate: Date;
}
