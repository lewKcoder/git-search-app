import { FC, useState } from "react";
import { Header } from "../../molecules/Header/Header";
import { Search } from "../../molecules/Search/Search";
import { Cards } from "../../organisms/Cards/Cards";
import { Pagenation } from "../../molecules/Pagenation/Pagenation";
import { Loading } from "../../molecules/Loading/Loading";
import axios from "axios";
import { RepositoriesResponseType } from "../../features/types/repositoriesResponse";
import { GIT_REPOSITORIES_SEARCH_API } from "../../features/api/gitRepositoriesSearch";

export const SearchRepository: FC = () => {
  const [keyword, setKeyword] = useState<string | undefined>("");
  const [list, setList] = useState<RepositoriesResponseType[]>([]);
  const [currentItems, setCurrentItems] =
    useState<RepositoriesResponseType[]>(list);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const handleSearch = async (): Promise<void> => {
    setIsLoading(true);
    await axios
      .get(`${GIT_REPOSITORIES_SEARCH_API}${keyword}`)
      .then((response) => {
        setList(response.data.items);
      });
    setIsLoading(false);
  };

  return (
    <>
      <Header />
      <Search
        handleKeyword={handleKeyword}
        handleSearch={handleSearch}
        isLoading={isLoading}
      />
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Cards list={currentItems} />
          <Pagenation items={list} setCurrentItems={setCurrentItems} />
        </>
      )}
    </>
  );
};
