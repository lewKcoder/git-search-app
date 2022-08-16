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
  const [searched, setSearched] = useState<number>(0);

  const handleKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const handleSearch = async (): Promise<void> => {
    setIsLoading(true);
    await axios
      .get(`${GIT_REPOSITORIES_SEARCH_API}${keyword}`, { timeout: 10000 })
      .then((response) => {
        setList(response.data.items);
      })
      .catch((e) => {
        console.error("timeout");
      });
    setIsLoading(false);
    setSearched((prev) => prev + 1);
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
      {list.length === 0 && !isLoading && searched > 0 && <p>Not found.</p>}
    </>
  );
};
