import styled from "styled-components";
import AText from "./styledA";

export const HeadText = styled.h1`
  color: rgb(0 0 0 / 70%);
  text-align: center;
  font-size: 60px;
  margin-top: 4%;
  margin-bottom: 7%;
  font-family: "Times New Roman", Times, serif;
  font-style: cursive;
  color: var(--textTheme);
`;

export const StyledDiv = styled.div`
  margin-top: 5%;
`;

const showHeadText = (hText: string, divText: string) => {
  return (
    <>
      <HeadText>{hText}</HeadText>

      <AText>{divText}</AText>
    </>
  );
};

export default showHeadText;
