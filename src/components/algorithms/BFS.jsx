import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { useState, useEffect, useRef } from "react";
const BFS = () => {
  const n = 12 * 12;
  const adj = useRef([...Array(n).fill(0)]); //0:unvisted, 1:visted,-1:blocked
  const numOfVistRef = useRef(0);
  const [numOfVist, setNumOfVist] = useState(numOfVistRef - 1);
  const keys = [...Array(n).keys()];
  const runBFS = (nodeIndex) => {
    let q = [];
    adj.current[nodeIndex] = 1;
    numOfVistRef.current++;
    setNumOfVist(numOfVistRef.current);
    q.push(nodeIndex);
    setTimeout(() => {
      runBFSHelper(q);
    }, 250);
  };
  const runBFSHelper = (q) => {
    console.log(q);
    if (q.length > 0) {
      let x = q.shift();
      let diff = [];
      if (getY(x) - 1 >= 0) {
        diff.push(x - 12);
      }
      if (getY(x) + 1 < 12) {
        diff.push(x + 12);
      }
      if (getX(x) - 1 >= 0) {
        diff.push(x - 1);
      }
      if (getX(x) + 1 < 12) {
        diff.push(x + 1);
      }
      diff.forEach((val, i) => {
        if (val >= 0 && val < n && adj.current[val] === 0) {
          adj.current[val] = 1;
          numOfVistRef.current++;
          setNumOfVist(numOfVistRef.current);
          q.push(val);
          setTimeout(() => {
            runBFSHelper(q);
          }, 250);
        }
      });
    }
  };
  const displayMap = keys.map((i) => {
    return (
      <Col
        sm={1}
        style={{
          background:
            adj.current[i] === 0
              ? "grey"
              : adj.current[i] === 1
              ? "blue"
              : "red",
        }}
        key={i + ":" + adj.current[i][i]}
        className="p-1"
        onClick={() => runBFS(i)}
      ></Col>
    );
  });

  useEffect(() => {
    function addBlocks() {
      for (let i = 0; i < n * 0.15; i++) {
        updateGraph(getRandomInt(n), -1);
      }
    }
    function updateGraph(i, newElement) {
      console.log("hit");
      adj.current[i] = newElement;
    }

    addBlocks();
    setNumOfVist(0);
  }, [n]);

  //   addBlocks();

  function getX(i) {
    return i % 12;
  }
  function getY(i) {
    return i / 12;
  }
  function getI(x, y) {
    return x + y * n;
  }
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  return (
    <Container className="p-3" style={{ height: "85vh" }}>
      <Row style={{ height: "100%" }}>{displayMap}</Row>
    </Container>
  );
};

export default BFS;
