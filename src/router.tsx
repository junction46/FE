import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import TestPage from "./pages/test";
import Home from "./pages/Index";
import { Col } from "./components/atomic";
import Header from "./components/home/Header";
import Quiz from "./pages/quiz";
import Note from "./pages/note";

const AddHeader = () => {
  return (
    <>
      <Col $fullw $fullh style={{ flex: 1 }}>
        <Header />
        <Outlet />
      </Col>
    </>
  );
};

const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AddHeader />}>
            <Route path="/" element={<TestPage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/note" element={<Note />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRouter;
