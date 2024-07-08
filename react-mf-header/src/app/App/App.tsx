import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "../../ui/Header";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Header />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
