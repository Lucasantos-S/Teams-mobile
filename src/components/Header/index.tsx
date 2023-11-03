import React from "react";
import { BackIcon, BakcButton, Container, Logo } from "./styles";
import LogoImage from "@/assets/logo.png";

type Props = {
  showBackButton?: boolean;
};

export function Header({ showBackButton = false }: Props) {
  return (
    <Container>
      {showBackButton && (
        <BakcButton>
          <BackIcon />
        </BakcButton>
      )}
      <Logo source={LogoImage} />
    </Container>
  );
}
