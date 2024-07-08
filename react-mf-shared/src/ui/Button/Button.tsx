import { FC } from "react";
import { StyledButton } from "./styles";

export const Button: FC<
  React.PropsWithChildren & React.HTMLAttributes<HTMLButtonElement>
> = ({ children, ...rest }) => {
  return <StyledButton {...rest}>{children}</StyledButton>;
};

export default Button;
