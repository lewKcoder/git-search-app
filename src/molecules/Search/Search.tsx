import { FC } from "react";

interface SearchProps {
  handleSearch: () => void;
  handleKeyword: (value: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Search: FC<SearchProps> = ({ handleSearch, handleKeyword }) => {
  return (
    <>
      <input type="text" onChange={(e) => handleKeyword(e)} />
      <button onClick={handleSearch}>Search</button>
    </>
  );
};
