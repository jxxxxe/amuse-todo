import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import { ChangeEvent } from "react";

interface SearchBarProps {
  onSearch: (word: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const searchWord = e.target.value;

    onSearch(searchWord);
  };

  return (
    <div className="flex w-full max-w-[57rem] border-b border-b-gray-300 py-3 gap-2">
      <MagnifyingGlassIcon className="size-6 " />
      <input
        onChange={onChange}
        placeholder="할 일을 검색하세요"
        className="placeholder:text-gray-400 outline-none w-full"
      />
    </div>
  );
};

export default SearchBar;
