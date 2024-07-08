import { FC } from "react";
import { StyledContent } from "./styles";

export const Content: FC<
  React.PropsWithChildren & React.HTMLAttributes<HTMLDivElement>
> = ({ children, ...rest }) => {
  return <StyledContent {...rest}>{children}</StyledContent>;
};

export default Content;
