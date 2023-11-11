import { TouchableOpacityProps } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export type IButtonIconTypeStyleProps = "PRIMARY" | "SECONDARY";

export type Props = {
  type: IButtonIconTypeStyleProps;
};

export interface IButtonIconProps extends TouchableOpacityProps {
  icon: keyof typeof MaterialIcons.glyphMap;
  type?: IButtonIconTypeStyleProps;
}
