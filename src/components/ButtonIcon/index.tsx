import React from "react";
import { TouchableOpacityProps } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Container, IButtonIconTypeStyleProps, Icon } from "./styles";

interface IButtonIconProps extends TouchableOpacityProps {
  icon: keyof typeof MaterialIcons.glyphMap;
  type?: IButtonIconTypeStyleProps;
}

export function ButtonIcon({ icon, type = "PRIMARY" }: IButtonIconProps) {
  return (
    <Container>
      <Icon name={icon} type={type} />
    </Container>
  );
}
