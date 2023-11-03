import styled from "styled-components/native";
import { UsersThree } from "phosphor-react-native";

export const Container = styled.View`
  flex: 1;

  background: ${(props) => props.theme.COLORS.GRAY_600};
  padding: 24px;
`;
export const Form = styled.View`
  flex: 1;
  justify-content: center;
  background: ${(props) => props.theme.COLORS.GRAY_600};
`;

export const UsersIcon = styled(UsersThree).attrs((props) => ({
  size: 56,
  color: props.theme.COLORS.GREEN_700,
}))`
  align-self: center;
`;