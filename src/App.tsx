import { useEffect, useState } from "react";

import { initialColumns } from "./dummyDatas";
import SearchBar from "./components/SearchBar";
import StateColumn from "./components/TaskColumn";
import useTaskStore from "./stores/useTaskStore";

function App() {
  const { taskColumnList, setTaskColumnList } = useTaskStore();
  const [searchWord, setSearchWord] = useState("");
  const onSearch = (word: string) => setSearchWord(word);

  useEffect(() => {
    setTaskColumnList(initialColumns);
  }, [setTaskColumnList]);

  return (
    <main className="flex my-0 p-5 items-center  flex-col bg-[#f2f7f8] h-full w-full">
      <SearchBar onSearch={onSearch} />
      <div className="flex gap-8 w-full justify-center max-w-[57rem]">
        {taskColumnList?.map((column) => (
          <StateColumn
            key={column.state}
            columnInfo={column}
            searchWord={searchWord}
          />
        ))}
      </div>
    </main>
  );
}

export default App;
