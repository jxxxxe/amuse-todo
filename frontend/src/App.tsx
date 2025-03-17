import { useEffect, useState } from "react";

import SearchBar from "./components/SearchBar";
import StateColumn from "./components/CardColumn";
import apiFetch from "./utils/apiFetch";
import { DEFAULT_COLUMN_LIST } from "./constants";
import useCardStore from "./stores/useCardStore";

function App() {
  const { cardColumnList, setCardColumnList } = useCardStore();
  const [searchWord, setSearchWord] = useState("");
  const onSearch = (word: string) => setSearchWord(word);

  useEffect(() => {
    setCardColumnList(DEFAULT_COLUMN_LIST);
    apiFetch("api/column")
      .then((data) => {
        setCardColumnList(data);
      })
      .catch(() => {
        console.error("Failed to fetch column data");
      });
  }, [setCardColumnList]);

  return (
    <main className="flex my-0 p-5 items-center flex-col bg-[#f2f7f8] w-full h-fit min-h-screen">
      <SearchBar onSearch={onSearch} />
      <div className="flex gap-8 w-full justify-center max-w-[57rem]">
        {cardColumnList?.map((column) => (
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
