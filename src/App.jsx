import "./App.css";
import About from "./components/Projects";
import Home from "./components/Home";
import {
  BrowserRouter as Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";
import TopBar from "./components/TopBar";
import Container from "react-bootstrap/esm/Container";
import BottomBar from "./components/BottomBar";
import BFS from "./components/algorithms/BFS";
import DFS from "./components/algorithms/DFS";
function App() {
  return (
    <BrowserRouter>
      <div>
        <TopBar />
        <Container fluid className="">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/algorithms/bfs">
              <BFS />
            </Route>
            <Route path="/algorithms/dfs">
              <DFS />
            </Route>
          </Switch>
        </Container>
        <BottomBar />
      </div>
    </BrowserRouter>
  );
}

export default App;
