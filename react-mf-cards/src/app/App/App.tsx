import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserCardsPage } from "../../pages/UserCardsPage";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<UserCardsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
