import { FC } from "react";
import { StyledPage } from "./styles";

export const Page: FC<
  React.PropsWithChildren & React.HTMLAttributes<HTMLDivElement>
> = ({ children, ...rest }) => {
  return <StyledPage {...rest}>{children}</StyledPage>;
};

export default Page;
