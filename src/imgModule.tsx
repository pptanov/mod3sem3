import styled from "styled-components";

interface StyledProps {
  Height?: string;
}

const StyledImg = styled.img<StyledProps>`
  height: ${({ Height }) => (Height ? Height : "100px")};
  filter: drop-shadow(4px 4px 6px #222);
`;

const ImgDiv = styled.div`
  text-align: center;
`;

const showStyledImg = () => {
  return (
    <ImgDiv>
      <StyledImg Height="500px" alt="russiaImg" src="src\img.jpg" />
    </ImgDiv>
  )
}

export default showStyledImg;