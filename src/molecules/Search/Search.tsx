import { FC } from "react";
import { RepositoriesResponseType } from "../../features/types/repositoriesResponse";

interface SearchProps {
  isLoading: boolean;
  handleSearch: () => void;
  handleKeyword: (value: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Search: FC<SearchProps> = ({
  isLoading,
  handleSearch,
  handleKeyword,
}) => {
  return (
    <>
      <input type="text" onChange={(e) => handleKeyword(e)} />
      <button onClick={handleSearch} disabled={isLoading}>
        Search
      </button>
    </>
  );
};
