import "./App.css";
import About from "./components/Projects";
import Home from "./components/Home";
import { BrowserRouter as Switch, Route, Router } from "react-router-dom";
import TopBar from "./components/TopBar";
import Container from "react-bootstrap/esm/Container";
import BottomBar from "./components/BottomBar";

function App() {
  return (
    <Router>
      <div>
        <TopBar />
        <Container fluid className="">
          <Switch>
            <Route path="portfolio/home">
              <Home />
            </Route>
            <Route path="portfolio/about">
              <About />
            </Route>
          </Switch>
        </Container>
        <BottomBar />
      </div>
    </Router>
  );
}

export default App;
