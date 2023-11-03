import styled from "styled-components/native";
import { Warning } from "phosphor-react-native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Message = styled.Text`
  text-align: center;
  margin-top: 20px;

  font-size: ${(props) => props.theme.FONT_SIZE.SM}px;
  font-family: ${(props) => props.theme.FONT_FAMILY.REGULAR};
  color: ${(props) => props.theme.COLORS.GRAY_300};
`;

export const WarningIcon = styled(Warning).attrs((props) => ({
  size: 100,
  color: props.theme.COLORS.GREEN_700,
}))``;
