import { FC, useState } from "react";
import { Header } from "../../molecules/Header/Header";
import { List } from "../../organisms/List/List";
import { Pagenation } from "../../molecules/Pagenation/Pagenation";
import axios from "axios";
import { RepositoriesResponseType } from "../../features/types/repositoriesResponse";
import { GIT_REPOSITORIES_SEARCH_API } from "../../features/api/gitRepositoriesSearch";

export const SearchRepository: FC = () => {
  const [keyword, setKeyword] = useState<string | undefined>("");
  const [list, setList] = useState<RepositoriesResponseType[]>([]);
  const [currentItems, setCurrentItems] =
    useState<RepositoriesResponseType[]>(list);

  const handleKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const handleSearch = () => {
    axios.get(`${GIT_REPOSITORIES_SEARCH_API}${keyword}`).then((response) => {
      setList(response.data.items);
    });
  };

  return (
    <>
      <Header />
      <List
        list={currentItems}
        handleKeyword={handleKeyword}
        handleSearch={handleSearch}
      />
      {list.length > 0 && (
        <Pagenation
          items={list}
          currentItems={currentItems}
          setCurrentItems={setCurrentItems}
        />
      )}
    </>
  );
};
