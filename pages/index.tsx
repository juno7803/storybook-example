import Button from "@/components/common/button/Button";
import styled from "@emotion/styled";

export default function Home() {
  return (
    <StyledContainer>
      <StyledTitle>Welcome Sopt 31th Web Part!</StyledTitle>
      <Button>버튼입니다</Button>
      <div>크로마틱 테스트</div>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  color: ${({ theme }) => theme.colors.black};
`;
const StyledTitle = styled.h1`
  color: ${({ theme }) => theme.colors.zigzagPink};
`;
