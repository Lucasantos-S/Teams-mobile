import { Container, Title, UsersIcon } from "./styles";
import { IGrupoCardProps } from "./GroupCard.structure";

export function GroupCard({ title, ...rest }: IGrupoCardProps) {
  return (
    <Container {...rest}>
      <UsersIcon />
      <Title>{title}</Title>
    </Container>
  );
}
