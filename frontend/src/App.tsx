import { useEffect, useState } from "react";

import SearchBar from "./components/SearchBar";
import StateColumn from "./components/TaskColumn";
import useTaskStore from "./stores/useTaskStore";

function App() {
  const { taskColumnList, setTaskColumnList } = useTaskStore();
  const [searchWord, setSearchWord] = useState("");
  const onSearch = (word: string) => setSearchWord(word);

  useEffect(() => {
    fetch("http://localhost:3001/api/column")
      .then((res) => res.json())
      .then((data) => setTaskColumnList(data));
  }, [setTaskColumnList]);

  return (
    <main className="flex my-0 p-5 items-center flex-col bg-[#f2f7f8] w-full h-fit min-h-screen">
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
