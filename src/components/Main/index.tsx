import {
  ButtonContainer,
  MainContainer,
  Paragraph,
  SubTitle,
  Title,
  TitleContainer,
} from "./styles";
import { Button } from "./button";

import play from "../../public/play.svg";

const Main = () => {
  return (
    <MainContainer>
      <TitleContainer>
        <SubTitle>HAYAO MIYAZAKI</SubTitle>
        <Title>A VIAGEM DE CHIHIRO</Title>
      </TitleContainer>
      <Paragraph>
        Chihiro chega a um mundo mágico dominado por uma bruxa. Aqueles que a
        desobedecem são transformados em animais.
      </Paragraph>
      <ButtonContainer>
        <Button icon={play}>Assistir agora</Button>
        <Button border>Assistir o Trailer</Button>
      </ButtonContainer>
    </MainContainer>
  );
};

export { Main };
