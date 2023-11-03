import styled from "styled-components/native";
import { TextInput } from "react-native";

export const Input = styled(TextInput).attrs((props) => ({
  placeholderTextColor: props.theme.COLORS.GRAY_300,
}))`
  flex: 1;

  max-height: 56px;
  min-height: 56px;
  border-radius: 6px;
  padding: 16px;

  background: ${(props) => props.theme.COLORS.GRAY_700};

  color: ${(props) => props.theme.COLORS.WHITE};
  font-family: ${(props) => props.theme.FONT_FAMILY.REGULAR};
  font-size: ${(props) => props.theme.FONT_SIZE.MD}px;

  margin-bottom: 20px;
`;
