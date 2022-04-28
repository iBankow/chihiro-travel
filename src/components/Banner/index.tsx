import { ReactNode } from "react";
import { BannerContainer } from "./styles";
import ghostOne from "../../public/ghost-1.svg";
import ghostTwo from "../../public/ghost-2.svg";
import image from "../../public/image.svg";

const Banner = () => {
  return (
    <BannerContainer>
      <img src={image} alt="Character 1" />
    </BannerContainer>
  );
};

export { Banner };
