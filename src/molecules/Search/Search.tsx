import { FC } from "react";
import {
  StyledButton,
  StyledDivInputWrapper,
  StyledInput,
} from "./Search.styles";

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
    <StyledDivInputWrapper>
      <StyledInput type="text" onChange={(e) => handleKeyword(e)} />
      <StyledButton onClick={handleSearch} disabled={isLoading}>
        Search
      </StyledButton>
    </StyledDivInputWrapper>
  );
};
