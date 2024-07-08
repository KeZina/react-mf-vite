import { FC } from "react";
import { StyledInput } from "./styles";

export const Input: FC<
  React.PropsWithChildren & React.HTMLAttributes<HTMLInputElement>
> = ({ children, ...rest }) => {
  return <StyledInput {...rest}>{children}</StyledInput>;
};

export default Input;
