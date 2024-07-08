import { FC } from "react";
import { StyledPageTitle } from "./styles";

export const PageTitle: FC<
  React.PropsWithChildren & React.HTMLAttributes<HTMLHeadingElement>
> = ({ children, ...rest }) => {
  return <StyledPageTitle {...rest}>{children}</StyledPageTitle>;
};

export default PageTitle;
