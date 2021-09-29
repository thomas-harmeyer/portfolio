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

function App() {
  return (
    <BrowserRouter>
      <div>
        <TopBar />
        <Container fluid className="">
          <Switch>
            <Route path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </Container>
        <BottomBar />
      </div>
    </BrowserRouter>
  );
}

export default App;
