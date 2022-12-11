import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { colors } from "../styles";

export const Colors: React.FC<{}> = () => {
  return (
    <List>
      {Object.entries(colors).map(([name, code]) => (
        <Item key={code}>
          <Chip $color={code} border={code === colors.white} />
          <Name>{name}</Name>
          <Code>{code}</Code>
        </Item>
      ))}
    </List>
  );
};

const List = styled.ul`
  display: flex;
  padding: 0;
  gap: 16px;
`;

const Item = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Chip = styled.div<{ $color: string; border: boolean }>`
  width: 60px;
  height: 60px;
  border-radius: 100%;
  box-sizing: border-box;
  background-color: ${({ $color }) => $color};
  ${({ border }) =>
    border &&
    css`
      border: 1px solid ${colors.gray};
    `};
`;

const Name = styled.div`
  margin-top: 2px;
  font-size: 13px;
  line-height: 18px;
  font-weight: 600;
`;

const Code = styled.div`
  color: ${colors.gray};
  font-size: 11px;
  line-height: 16px;
  font-weight: 500;
`;
