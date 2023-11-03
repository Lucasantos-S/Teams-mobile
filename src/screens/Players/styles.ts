import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  ${({ theme }) => css`
    background: ${theme.COLORS.GRAY_600};
  `}
  padding: 24px;
`;

export const Form = styled.View`
  width: 100%;
  height: 56px;
  flex-direction: row;
  background: ${(props) => props.theme.COLORS.GRAY_700};

  border-radius: 6px;
`;
