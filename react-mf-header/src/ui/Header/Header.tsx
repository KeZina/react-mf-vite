import { useNavigate } from "react-router-dom";
import { StyledHeader, StyledNavButton } from "./styles";
import { useCallback } from "react";

export const Header = () => {
  const navigate = useNavigate();

  const handleGoToHome = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const handleGoToProfile = useCallback(() => {
    navigate("/profile");
  }, [navigate]);

  const handleGoToUserCards = useCallback(() => {
    navigate("/cards");
  }, [navigate]);

  const handleGoToStore = useCallback(() => {
    navigate("/store");
  }, [navigate]);

  return (
    <StyledHeader>
      <StyledNavButton onClick={handleGoToHome}>Home</StyledNavButton>
      <StyledNavButton onClick={handleGoToProfile}>Profile</StyledNavButton>
      <StyledNavButton onClick={handleGoToUserCards}>My cards</StyledNavButton>
      <StyledNavButton onClick={handleGoToStore}>Store</StyledNavButton>
    </StyledHeader>
  );
};

export default Header;
