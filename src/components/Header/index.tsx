import React from "react";
import { useNavigation } from "@react-navigation/native";
import { BackIcon, BakcButton, Container, Logo } from "./styles";
import LogoImage from "@/assets/logo.png";

type Props = {
  showBackButton?: boolean;
};

export function Header({ showBackButton = false }: Props) {
  const navigation = useNavigation();

  function handleBack() {
    navigation.navigate("groups");
  }
  return (
    <Container>
      {showBackButton && (
        <BakcButton onPress={handleBack}>
          <BackIcon />
        </BakcButton>
      )}
      <Logo source={LogoImage} />
    </Container>
  );
}
