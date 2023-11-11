import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

export const Container = styled(SafeAreaView)`
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

export const HeaderList = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  margin: 32px 0 12px;
`;

export const NumbersOfPlayes = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    background: ${theme.COLORS.GRAY_600};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}
`;
