import { TouchableOpacityProps } from "react-native";

export type ButtonType = "PRIMARY" | "SECONDARY";

export type Props = {
  type: ButtonType;
};

export interface IButtonTypeProps extends TouchableOpacityProps {
  title: string;
  type?: ButtonType;
}
