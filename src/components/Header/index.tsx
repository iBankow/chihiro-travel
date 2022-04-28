import { HeaderContainer, Logo, SocialButton, Socials } from "./styles";

import logo from "../../public/logo-chihiro.svg";
import youtube from "../../public/youtube.svg";

const Header = () => {
  return (
    <HeaderContainer>
      <Logo src={logo} alt="Logo Chihiro" />
      <Socials>
        <SocialButton>
          <img src={youtube} width="24px" height="24px" alt="Youtube logo" />
        </SocialButton>
        <SocialButton>
          <img src={youtube} width="24px" height="24px" alt="Youtube logo" />
        </SocialButton>
        <SocialButton>
          <img src={youtube} width="24px" height="24px" alt="Youtube logo" />
        </SocialButton>
        <SocialButton>
          <img src={youtube} width="24px" height="24px" alt="Youtube logo" />
        </SocialButton>
      </Socials>
    </HeaderContainer>
  );
};

export { Header };
