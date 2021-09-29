import "./App.css";
import About from "./components/Projects";
import Home from "./components/Home";
import { BrowserRouter as HashRouter, Switch, Route } from "react-router-dom";
import TopBar from "./components/TopBar";
import Container from "react-bootstrap/esm/Container";
import BottomBar from "./components/BottomBar";

function App() {
  return (
    <HashRouter basename="/portfolio">
      <div>
        <TopBar />
        <Container fluid className="">
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </Container>
        <BottomBar />
      </div>
    </HashRouter>
  );
}

export default App;