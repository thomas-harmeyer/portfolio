import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
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
  const graph = useRef([...Array(n).fill(0)]); //0:unvisted, 1:visted,-1:blocked, 2:breath, 3:last
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

  const bfs = (start) => {
    let queue = [start];
    vist.current[getI(start.row, start.col)] = 1;

    while (queue.length > 0) {
      let u = queue.shift();
      stack.current.push(getI(u.row, u.col));

      for (let i = 0; i < 4; i++) {
        let v = JSON.parse(JSON.stringify(u)); //deep copy
        v.row += difRow[i];
        v.col += difCol[i];

        if (
          cordInBounds(v.row, v.col) &&
          vist.current[getI(v.row, v.col)] === 0
        ) {
          queue.push(v);
          vist.current[getI(v.row, v.col)] = 1;
        }
      }
    }
  };

  const displayMap = keys.map((i) => {
    return (
      <Col
        sm={1}
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
        className="p-1"
        onClick={() => bfs({ row: getRow(i), col: getCol(i) })}
      ></Col>
    );
  });

  function getRow(i) {
    return Math.floor(i / 12);
  }
  function getCol(i) {
    return i % 12;
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
    <Container className="p-3" style={{ height: "85vh" }}>
      <Row>
        <Col>
          This is a BFS example I made in React. Click anywhere to see the a
          visual representation of a BFS. More to come soon!
        </Col>
      </Row>
      <Row style={{ height: "100%" }}>{displayMap}</Row>
    </Container>
  );
};

export default BFS;
