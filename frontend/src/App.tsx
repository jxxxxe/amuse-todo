import { useEffect, useState } from "react";

import SearchBar from "./components/SearchBar";
import StateColumn from "./components/CardColumn";
import apiFetch from "./utils/apiFetch";
import useCardStore from "./stores/useCardStore";
import LoadingScreen from "./components/LoadingScreen";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { handleDragEnd } from "./utils/drag";

function App() {
  const { cardColumnList, setCardColumnList } = useCardStore();
  const [isFetchLoading, setIsFetchLoading] = useState(true);
  const [searchWord, setSearchWord] = useState("");
  const onSearch = (word: string) => setSearchWord(word);

  const onDragEnd = async (e: DragEndEvent) => {
    const orderedColumnList = handleDragEnd(e, cardColumnList);
    setCardColumnList(orderedColumnList!);

    await apiFetch("api/card", {
      method: "PUT",
      body: JSON.stringify({
        newCardList: orderedColumnList![0].cardList,
      }),
    });
  };

  useEffect(() => {
    apiFetch("api/column")
      .then((data) => {
        setCardColumnList(data);
      })
      .catch(() => {
        console.error("Failed to fetch column data");
      });
    setIsFetchLoading(false);
  }, [setCardColumnList]);

  return (
    <main className="relative flex my-0 p-5 items-center flex-col bg-[#f2f7f8] w-full h-fit min-h-screen">
      {isFetchLoading && <LoadingScreen />}
      <SearchBar onSearch={onSearch} />
      <DndContext onDragEnd={onDragEnd}>
        <StateColumn columnInfo={cardColumnList[0]} searchWord={searchWord} />
      </DndContext>
    </main>
  );
}

export default App;
