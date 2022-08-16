import { FC } from "react";
import { Search } from "../../molecules/Search/Search";
import { Card } from "../Card/Card";
import { RepositoriesResponseType } from "../../features/types/repositoriesResponse";

interface ListProps {
  list: RepositoriesResponseType[];
  handleSearch: () => void;
  handleKeyword: (value: React.ChangeEvent<HTMLInputElement>) => void;
}

export const List: FC<ListProps> = ({ list, handleSearch, handleKeyword }) => {
  return (
    <>
      <Search handleKeyword={handleKeyword} handleSearch={handleSearch} />
      <Card list={list} />
    </>
  );
};
