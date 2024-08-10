import { Col } from "./components/atomic";
import Header from "./components/home/Header";
import AppRouter from "./router";

function App() {
  return (
    <>
      <Col $fullw $fullh>
        <Header />
        <AppRouter />
      </Col>
    </>
  );
}

export default App;
