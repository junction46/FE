import { Col, Row } from "./components/atomic";
import Header from "./components/home/Header";
import Sidebar from "./components/home/Sidebar";
import AppRouter from "./router";
import useStore from "./store";

function App() {
  const { sidebarOpen } = useStore();
  return (
    <>
      <Row $fullw $fullh>
        <Sidebar $open={sidebarOpen} />
        <Col $fullw $fullh style={{ flex: 1 }}>
          <Header />
          <AppRouter />
        </Col>
      </Row>
    </>
  );
}

export default App;
