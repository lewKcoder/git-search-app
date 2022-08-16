import { FC } from "react";
import {
  StyledPBranchName,
  StyledDivUserIcon,
  StyledDivFeatureInfo,
  StyledDivInfo,
  StyledLiUserCard,
  StyledUserIcon,
  StyledUlUserCard,
  StyledSpanFeatureIcon,
  StyledSpanFeatureNumber,
} from "./Card.styles";
import { RepositoriesResponseType } from "../../features/types/repositoriesResponse";

interface RepositoriesResponseProps {
  list: RepositoriesResponseType[];
}

export const Card: FC<RepositoriesResponseProps> = ({ list }) => {
  return (
    <StyledUlUserCard>
      {list.map(
        (item: RepositoriesResponseType): JSX.Element => (
          <StyledLiUserCard key={item["id"]}>
            <StyledDivUserIcon>
              <StyledUserIcon src={item["owner"]["avatar_url"]} alt="" />
            </StyledDivUserIcon>
            <StyledDivInfo>
              <a
                href={"https://github.com/" + item["full_name"]}
                target="_blank"
                rel="noopener noreferrer"
              >
                <StyledPBranchName>{item["full_name"]}</StyledPBranchName>
              </a>
              <StyledDivFeatureInfo>
                <div>
                  <StyledSpanFeatureIcon>🔀</StyledSpanFeatureIcon>forks:
                  <StyledSpanFeatureNumber>
                    {item["forks"]}
                  </StyledSpanFeatureNumber>
                </div>
                <div>
                  <StyledSpanFeatureIcon>⭐️</StyledSpanFeatureIcon>stars:
                  <StyledSpanFeatureNumber>
                    {item["watchers"]}
                  </StyledSpanFeatureNumber>
                </div>
              </StyledDivFeatureInfo>
            </StyledDivInfo>
          </StyledLiUserCard>
        )
      )}
    </StyledUlUserCard>
  );
};
