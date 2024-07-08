import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import { Suspense, lazy } from "react";

// @ts-expect-error: remote app
import Page from "shared/Page";
// @ts-expect-error: remote app
import Header from "header/Header";
// @ts-expect-error: remote app
const UserCardsPage = lazy(() => import("cards/UserCardsPage"));
// @ts-expect-error: remote app
const ProfilePage = lazy(() => import("profile/ProfilePage"));
// @ts-expect-error: remote app
const StorePage = lazy(() => import("store/StorePage"));

export const RoutesHandler = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Header />
              <Outlet />
            </div>
          }
        >
          <Route index element={<Page />} />
          <Route
            path="/profile"
            element={
              <Suspense fallback={<Page />}>
                <ProfilePage />
              </Suspense>
            }
          />
          <Route
            path="/cards"
            element={
              <Suspense fallback={<Page />}>
                <UserCardsPage />
              </Suspense>
            }
          />
          <Route
            path="/store"
            element={
              <Suspense fallback={<Page />}>
                <StorePage />
              </Suspense>
            }
          />
        </Route>
        <Route path="*" element={<Navigate to="/profile" replace />} />
      </Routes>
    </BrowserRouter>
  );
};
