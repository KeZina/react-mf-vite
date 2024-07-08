import { FC } from "react";
import { StyledForm } from "./styles";

export const Form: FC<
  React.PropsWithChildren & React.HTMLAttributes<HTMLFormElement>
> = ({ children, ...rest }) => {
  return <StyledForm {...rest}>{children}</StyledForm>;
};

export default Form;
