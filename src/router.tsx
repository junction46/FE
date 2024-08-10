import { BrowserRouter, Route, Routes } from "react-router-dom";
import TestPage from "./pages/test";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TestPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
