import { FC, useState } from "react";
import axios from "axios";
import { Search } from "../../molecules/Search/Search";
import { Card } from "../../molecules/Card/Card";

export const List = () => {
  const [keyword, setKeyword] = useState<any>("");
  const [list, setList] = useState<[]>([]);

  const handleKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
    console.log(e.target.value);
  };

  const handleSearch = () => {
    axios
      .get(
        `https://api.github.com/search/repositories?q=${keyword}&per_page=100`
      )
      .then((response) => {
        setList(response.data.items);
        console.log(response.data.items);
      });
  };

  return (
    <>
      <Search handleKeyword={handleKeyword} handleSearch={handleSearch} />
      <Card list={list} />
    </>
  );
};
