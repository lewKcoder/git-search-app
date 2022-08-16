import { FC } from "react";
import { StyledDivApp } from "./App.styles";
import { SearchRepository } from "../src/template/SearchRepository/SearchRepository";

const App: FC = () => {
  return (
    <StyledDivApp>
      <SearchRepository />
    </StyledDivApp>
  );
};

export default App;
