import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginPage } from "../pages/AuthPage/LoginPage";
import { AppLayout } from "../ui/app-layout";
import App from "../App";
import { Suspense } from "react";

export const AppRouter = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<AppLayout />}>
            <Route index element={<App />} />
            <Route path='/login' element={<LoginPage />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
};
