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
  deleteTask: (columnId, taskId) =>
    set(({ taskColumnList }) => {
      const newColumnList = taskColumnList.map((column) => {
        if (column.id === columnId) {
          return {
            ...column,
            taskList: column.taskList.filter((task) => task.id !== taskId),
          };
        } else {
          return column;
        }
      });
      return {
        taskColumnList: newColumnList,
      };
    }),
  sortTaskByName: (columnId) =>
    set(({ taskColumnList }) => {
      const sortedColumn = taskColumnList.map((column) => {
        if (column.id === columnId) {
          const sortedTaskList = column?.taskList.sort((a, b) => {
            if (a.title > b.title) {
              return 1;
            } else if (a.title < b.title) {
              return -1;
            } else {
              return 0;
            }
          });

          return {
            ...column,
            taskList: sortedTaskList,
          };
        } else {
          return column;
        }
      });
      return {
        taskColumnList: sortedColumn,
      };
    }),
  sortTaskByPriority: (columnId) =>
    set(({ taskColumnList }) => {
      const sortedColumn = taskColumnList.map((column) => {
        if (column.id === columnId) {
          const sortedTaskList = column?.taskList.sort(
            (a, b) => b.priority - a.priority
          );
          return {
            ...column,
            taskList: sortedTaskList,
          };
        } else {
          return column;
        }
      });
      return {
        taskColumnList: sortedColumn,
      };
    }),
  sortTaskByStartDate: (columnId) =>
    set(({ taskColumnList }) => {
      const sortedColumn = taskColumnList.map((column) => {
        if (column.id === columnId) {
          const sortedTaskList = column?.taskList.sort(
            (a, b) => a.startDate.getTime() - b.startDate.getTime()
          );
          return {
            ...column,
            taskList: sortedTaskList,
          };
        } else {
          return column;
        }
      });
      return {
        taskColumnList: sortedColumn,
      };
    }),
  sortTaskByEndDate: (columnId) =>
    set(({ taskColumnList }) => {
      const sortedColumn = taskColumnList.map((column) => {
        if (column.id === columnId) {
          const sortedTaskList = column?.taskList.sort(
            (a, b) => a.endDate.getTime() - b.endDate.getTime()
          );
          return {
            ...column,
            taskList: sortedTaskList,
          };
        } else {
          return column;
        }
      });
      return {
        taskColumnList: sortedColumn,
      };
    }),
}));

interface TaskStore {
  taskColumnList: IColumn[];
  setTaskColumnList: (newColumnList: IColumn[]) => void;
  addTask: (columnId: number, newTask: ITask) => void;
  deleteTask: (columnId: number, taskId: number) => void;
  sortTaskByName: (columnId: number) => void;
  sortTaskByPriority: (columnId: number) => void;
  sortTaskByStartDate: (columnId: number) => void;
  sortTaskByEndDate: (columnId: number) => void;
}

export default useTaskStore;
