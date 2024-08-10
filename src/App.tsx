import { Col, Row } from "./components/atomic";
import Sidebar from "./components/home/Sidebar";
import AppRouter from "./router";
import useStore from "./store";

function App() {
  const { sidebarOpen } = useStore();
  return (
    <>
      <Row $fullw $fullh>
        <Sidebar $open={sidebarOpen} />

        <AppRouter />
      </Row>
    </>
  );
}

export default App;
