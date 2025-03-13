import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import { FormEvent } from "react";

const SearchBar = () => {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form
      className="flex w-full max-w-[57rem] border-b border-b-gray-300 py-3 gap-2"
      onSubmit={onSubmit}
    >
      <MagnifyingGlassIcon className="size-6 " />
      <input
        placeholder="Search"
        className="placeholder:text-gray-400 outline-none w-full"
      />
    </form>
  );
};

export default SearchBar;
