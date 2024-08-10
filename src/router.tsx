import { BrowserRouter, Route, Routes } from "react-router-dom";
import TestPage from "./pages/test";
import Home from "./pages/Index";

const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TestPage />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRouter;
