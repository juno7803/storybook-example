import styled from "@emotion/styled";

export default function Home() {
  return (
    <StyledContainer>
      <StyledTitle>Welcome Sopt 31th Web Part!</StyledTitle>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  color: ${({ theme }) => theme.colors.black};
`;
const StyledTitle = styled.h1`
  color: ${({ theme }) => theme.colors.zigzagPink};
`;
