import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import { useState, useEffect, useRef } from "react";

const BFS = () => {
  //dimensions
  const width = 12;
  const height = 12;
  const n = width * height;
  const refreshRate = 500;
  const fillPercent = 0.5;
  const difRow = [0, 0, -1, 1];
  const difCol = [-1, 1, 0, 0];

  //state
  const graph = useRef([...Array(n).fill(0)]); //0:unvisted, 1:visted,-1:blocked, 2:last
  const vist = useRef([...Array(n).fill(0)]); //0:open, 1:not open
  const [graphState, setGraphState] = useState(graph.current.slice());
  const stack = useRef([]);
  const stackIndex = useRef(0);

  //keys
  const keys = [...Array(n).keys()];

  useEffect(() => {
    const addBlock = (i) => {
      graph.current[i] = -1;
      vist.current[i] = 1;
    };

    const addBlocks = () => {
      for (let i = 0; i < n * fillPercent; i++) {
        addBlock(getRandomInt(n));
      }
    };

    const updateView = () => {
      console.log(stack.current.length + " " + stackIndex.current);
      if (stackIndex.current < stack.current.length) {
        if (stackIndex.current > 0) {
          graph.current[stack.current[stackIndex.current - 1]] = 1;
        }
        graph.current[stack.current[stackIndex.current]] = 2;
        setGraphState(graph.current.slice());
        stackIndex.current++;
      } else if (stackIndex.current > 0) {
        graph.current[stack.current[stackIndex.current - 1]] = 1;
        setGraphState(graph.current.slice());
      }
      setTimeout(updateView, refreshRate);
    };

    addBlocks();
    setGraphState(graph.current.slice());
    updateView();
  }, [n]);

  const dfs = (u) => {
    vist.current[getI(u.row, u.col)] = 1;
    stack.current.push(getI(u.row, u.col));

    for (let i = 0; i < 4; i++) {
      let v = JSON.parse(JSON.stringify(u)); //deep copy
      v.row += difRow[i];
      v.col += difCol[i];
      if (
        cordInBounds(v.row, v.col) &&
        vist.current[getI(v.row, v.col)] === 0
      ) {
        dfs(v);
      }
    }
  };

  const displayMap = keys.map((i) => {
    return (
      <Col
        xs={1}
        style={{
          background:
            graphState[i] === 0
              ? "grey"
              : graphState[i] === 1
              ? "blue"
              : graphState[i] === -1
              ? "red"
              : "purple",
        }}
        key={i + ":" + graphState[i][i]}
        className="p-0"
        onClick={() => dfs({ row: getRow(i), col: getCol(i) })}
      ></Col>
    );
  });

  function getRow(i) {
    return Math.floor(i / width);
  }
  function getCol(i) {
    return i % width;
  }
  function getI(row, col) {
    return row * height + col;
  }

  const cordInBounds = (row, col) => {
    return row >= 0 && row < width && col >= 0 && col < height;
  };

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  return (
    <>
      <Container className="p-6 mb-6" style={{ height: "85vh" }}>
        <Row className="p-2">
          <Col>
            <Card>
              <Card.Header>
                <Card.Title>Depth First Search</Card.Title>
              </Card.Header>
              <Card.Body>
                This is a DFS example I made in React. Click anywhere to see the
                a visual representation of a DFS. More to come soon! (Works best
                on larger screens)
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row style={{ height: "100%" }}>{displayMap}</Row>
      </Container>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </>
  );
};

export default BFS;
