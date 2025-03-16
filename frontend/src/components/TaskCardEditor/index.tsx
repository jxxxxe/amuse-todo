import { CalendarIcon, ItalicIcon } from "@heroicons/react/16/solid";
import { NumberedListIcon } from "@heroicons/react/24/outline";
import { ChangeEvent, useState } from "react";
import EditorTaskPriority from "./EditorTaskPriority";
import EditorCardCalendar from "./EditorCardCalendar";
import { ITask, TaskPriorityType } from "../../types";
import useClickAway from "../../hooks/useClickAway";

interface TaskCardEditor {
  taskInfo?: ITask;
  saveCard: (newCard: ITask) => void;
}

const defaultTaskInfo = {
  id: Math.random(),
  title: "",
  priority: 1 as TaskPriorityType,
  memberList: [],
  startDate: new Date(),
  endDate: new Date(),
};

const TaskCardEditor = ({
  taskInfo = defaultTaskInfo,
  saveCard,
}: TaskCardEditor) => {
  const [newTaskInfo, setNewTaskInfo] = useState(taskInfo);

  const onSaveNewCard = () => {
    saveCard(newTaskInfo);
  };
  const editorRef = useClickAway<HTMLDivElement>(onSaveNewCard);

  const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTaskInfo((prev) => ({
      ...prev,
      title: e.target.value,
    }));
  };
  const onChangePriority = (newPriority: TaskPriorityType) => {
    setNewTaskInfo((prev) => ({
      ...prev,
      priority: newPriority,
    }));
  };

  const onChangeStartDate = (newStartDate: Date) => {
    setNewTaskInfo((prev) => ({
      ...prev,
      startDate: newStartDate,
    }));
  };

  const onChangeEndDate = (newEndDate: Date) => {
    setNewTaskInfo((prev) => ({
      ...prev,
      endDate: newEndDate,
    }));
  };

  return (
    <div
      ref={editorRef}
      className="bg-white max-w-70 h-40 *:flex *:gap-2 *:items-center flex flex-col text-black rounded-xl p-4 gap-3"
    >
      <div className="flex gap-1">
        <ItalicIcon className="size-5" />
        <input
          placeholder="제목"
          className="w-full border border-gray-200 p-1"
          value={newTaskInfo.title}
          onChange={onChangeTitle}
        />
      </div>
      <div className="flex w-full">
        <NumberedListIcon className="size-5" />
        <EditorTaskPriority
          initialValue={newTaskInfo.priority}
          onChange={onChangePriority}
        />
      </div>
      <div className="flex items-center">
        <CalendarIcon className="w-5" />
        <span className="text-gray-700">시작일</span>
        <EditorCardCalendar
          initialDate={newTaskInfo.startDate}
          onChange={onChangeStartDate}
        />
      </div>
      <div className="flex items-center">
        <CalendarIcon className="w-5" />
        <span className="text-gray-700">종료일</span>
        <EditorCardCalendar
          initialDate={newTaskInfo.endDate}
          onChange={onChangeEndDate}
          startDate={newTaskInfo.startDate}
        />
      </div>
    </div>
  );
};

export default TaskCardEditor;
