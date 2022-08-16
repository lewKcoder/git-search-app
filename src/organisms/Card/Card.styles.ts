import styled from "@emotion/styled";

export const StyledUlUserCard = styled.ul({
  display: "flex",
  flexWrap: "wrap",
  gap: "24px",
  justifyContent: "center",
  listStyle: "none",
  padding: "24px 0 54px",
});

export const StyledLiUserCard = styled.li({
  alignItems: "center",
  boxShadow: "0px 1px 8px 3px #e0e0e0",
  borderRadius: "8px",
  display: "flex",
  minWidth: "330px",
  padding: "24px",
  width: "25%",
});

export const StyledDivUserIcon = styled.div({
  padding: "0 16px 0 0",
  width: "15%",
});

export const StyledUserIcon = styled.img({
  width: "100%",
  borderRadius: "50%",
});

export const StyledDivInfo = styled.div({
  textAlign: "left",
  width: "85%",
});

export const StyledDivFeatureInfo = styled.div({
  display: "flex",
  gap: "8px",
});

export const StyledSpanFeatureIcon = styled.span({
  margin: "0 4px 0 0",
});

export const StyledSpanFeatureNumber = styled.span({
  fontWeight: "bold",
});
export const StyledPBranchName = styled.p({
  margin: "0 0 16px",
  wordBreak: "break-word",
});
