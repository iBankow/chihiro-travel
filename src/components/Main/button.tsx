import { ReactNode } from "react";
import { Button as StyledButton, TextButton } from "./styles";

interface ButtonProps {
  border?: boolean;
  children: ReactNode;
  icon?: any;
}

const Button = ({ border, children, icon }: ButtonProps) => {
  return (
    <StyledButton border={border}>
      <div>
        {icon ? <img src={icon} alt="Play icon" /> : null}
        <TextButton margin={icon ? true : false}>{children}</TextButton>
      </div>
    </StyledButton>
  );
};

export { Button };
