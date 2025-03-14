import { create } from "zustand";
import { IColumn, ITask } from "../types/task";

const useTaskStore = create<TaskStore>((set) => ({
  taskColumnList: [],
  setTaskColumnList: (newColumnList) =>
    set(() => ({
      taskColumnList: newColumnList,
    })),
  addTask: (columnId, newTask) =>
    set(({ taskColumnList }) => {
      const targetColumn = taskColumnList.find(
        (column) => column.id === columnId
      );
      targetColumn?.taskList.push(newTask);
      return {
        taskColumnList,
      };
    }),
  sortTaskByName: (columnId) =>
    set(({ taskColumnList }) => {
      const targetColumn = taskColumnList.find(
        (column) => column.id === columnId
      );
      targetColumn?.taskList.sort((a, b) => {
        if (a.title < b.title) {
          return 1;
        } else if (a.title > b.title) {
          return -1;
        } else {
          return 0;
        }
      });
      return {
        taskColumnList,
      };
    }),
  sortTaskByPriority: (columnId) =>
    set(({ taskColumnList }) => {
      const targetColumn = taskColumnList.find(
        (column) => column.id === columnId
      );
      targetColumn?.taskList.sort((a, b) => b.priority - a.priority);
      return {
        taskColumnList,
      };
    }),
  sortTaskByStartDate: (columnId) =>
    set(({ taskColumnList }) => {
      const targetColumn = taskColumnList.find(
        (column) => column.id === columnId
      );
      targetColumn?.taskList.sort(
        (a, b) => a.startDate.getTime() - b.startDate.getTime()
      );
      return {
        taskColumnList,
      };
    }),
  sortTaskByEndDate: (columnId) =>
    set(({ taskColumnList }) => {
      const targetColumn = taskColumnList.find(
        (column) => column.id === columnId
      );
      targetColumn?.taskList.sort(
        (a, b) => a.endDate.getTime() - b.endDate.getTime()
      );
      return {
        taskColumnList,
      };
    }),
}));

interface TaskStore {
  taskColumnList: IColumn[];
  setTaskColumnList: (newColumnList: IColumn[]) => void;
  addTask: (columnId: number, newTask: ITask) => void;
  sortTaskByName: (columnId: number) => void;
  sortTaskByPriority: (columnId: number) => void;
  sortTaskByStartDate: (columnId: number) => void;
  sortTaskByEndDate: (columnId: number) => void;
}

export default useTaskStore;
