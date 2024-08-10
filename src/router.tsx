import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import TestPage from "./pages/testpage";
import Home from "./pages/Index";
import { Col } from "./components/atomic";
import Header from "./components/home/Header";
import Quiz from "./pages/quiz";
import Note from "./pages/note";
import Callback from "./pages/callback";

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
            <Route path="/" element={<Home />} />
            <Route path="/callback" element={<Callback />} />
            <Route path="/test" element={<TestPage />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/note" element={<Note />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRouter;
