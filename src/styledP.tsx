import styled from "styled-components";

const PText = styled.p`
  text-align: left;
  font-size: 23px;
  margin-top: 2%;
  color: var(--textTheme);
`;

const showPText = (pText: string) => {
  return (
    <>
      <PText>Page: {pText}</PText>
    </>
  );
};

export default showPText;
