import { useState } from "react";

import { ITask } from "./types/task";
import {
  dummyDoneList,
  dummyInProgressList,
  dummyTodoList,
} from "./dummyDatas";
import SearchBar from "./components/SearchBar";
import StateColumn from "./components/TaskColumn";

function App() {
  const [todoList, setTodoList] = useState<ITask[]>(dummyTodoList);
  const [inProgressList, setInProgressList] =
    useState<ITask[]>(dummyInProgressList);
  const [doneList, setDoneList] = useState<ITask[]>(dummyDoneList);

  return (
    <main className="flex my-0 p-5 items-center flex-col bg-[#f2f7f8] h-full">
      <SearchBar />
      <div className="flex gap-8 w-full max-w-[57rem]">
        <StateColumn stateTitle="TO DO" cardList={todoList} />
        <StateColumn stateTitle="IN PROGRESS" cardList={inProgressList} />
        <StateColumn stateTitle="DONE" cardList={doneList} />
      </div>
    </main>
  );
}

export default App;
