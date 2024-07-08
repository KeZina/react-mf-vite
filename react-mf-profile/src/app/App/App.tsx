import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProfilePage } from "../../pages/ProfilePage";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<ProfilePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
