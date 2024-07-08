import { BrowserRouter, Route, Routes } from "react-router-dom";
import { StorePage } from "../../pages/StorePage";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<StorePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
