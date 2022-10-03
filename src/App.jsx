import "./App.css";
import About from "./components/Projects";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopBar from "./components/TopBar";
import Container from "react-bootstrap/esm/Container";
import BottomBar from "./components/BottomBar";
import BFS from "./components/algorithms/BFS";
import DFS from "./components/algorithms/DFS";
import ReactGA from "react-ga";
ReactGA.initialize("G-353FEKHY1Q");
ReactGA.pageview(window.location.pathname + window.location.search);
function App() {
  return (
    <Router>
      <div>
        <TopBar />
        <Container fluid className="">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/algorithms/bfs" element={<BFS />} />
            <Route path="/algorithms/dfs" element={<DFS />} />
          </Routes>
        </Container>
        <BottomBar />
      </div>
    </Router>
  );
}

export default App;
