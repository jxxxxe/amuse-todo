import { useEffect } from "react";

import { initialColumns } from "./dummyDatas";
import SearchBar from "./components/SearchBar";
import StateColumn from "./components/TaskColumn";
import useTaskStore from "./stores/useTaskStore";

function App() {
  const { taskColumnList, setTaskColumnList } = useTaskStore();
  useEffect(() => {
    setTaskColumnList(initialColumns);
  }, [setTaskColumnList]);

  return (
    <main className="flex my-0 p-5 items-center  flex-col bg-[#f2f7f8] h-full w-full">
      <SearchBar />
      <div className="flex gap-8 w-full justify-center max-w-[57rem]">
        {taskColumnList?.map((column) => (
          <StateColumn
            key={column.state}
            columnId={column.id}
            stateTitle={column.state}
            initialCardList={column.taskList}
          />
        ))}
      </div>
    </main>
  );
}

export default App;
