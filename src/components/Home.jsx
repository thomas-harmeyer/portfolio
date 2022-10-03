import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import PersonalPic from "../IMG_0941.jpg";
import UCFLogo from "../UCFLogo.png";
import GithubLogo from "../GithubLogo.png";
import CodeForcesLogo from "../CodeForcesLogo.png";
import Image from "react-bootstrap/Image";

const Home = () => {
  return (
    <Container className="p-1 justify-content-md-center">
      <Row className="p-1">
        <Col sm={{ span: 6, offset: 3 }}>
          <Row>
            <Col>
              <Image fluid src={PersonalPic} />
            </Col>
          </Row>
          <Row>
            <Col>
              <h1>Hi, I'm Thomas</h1>
            </Col>
          </Row>
        </Col>
      </Row>
      <hr />
      <Row className="p-1 mb-1">
        <Col auto={6}>
          <Image fluid src={UCFLogo} />
        </Col>
        <Col>
          <h3>
            I am a computer science major in my second year at the University of
            Central Florida. I have been on the programming team for two years
            and am competing on the varsity team this year.
          </h3>
          <Button href="https://www.ucfprogrammingteam.org/">
            Check out the UCF Programming Team
          </Button>
        </Col>
      </Row>
      <hr />
      <Row>
        <Row className="p-1 mb-1">
          <Col>
            <h3>
              Over the past summer I learned a ton of new, useful languages. I
              used a frontend react framework, also MongoDB and ExpressJS for
              the backend to recreate the game of Avalon. It implements fast,
              responsive communications through the use of Socket.io and react.
            </h3>
            <Button href="https://github.com/thomas-harmeyer/avalonNew">
              Check out one of my projects on GitHub
            </Button>
          </Col>
          <Col>
            <Image fluid src={GithubLogo} />
          </Col>
        </Row>
      </Row>{" "}
      <hr />
      <Row>
        <Row className="mb-1 p-1 ">
          <Col auto={6}>
            <Image fluid src={CodeForcesLogo} />
          </Col>
          <Col>
            <h3>
              I enjoy competitive programming so much I do it in my free time.
              CodeForces is a website that hosts competitive programming
              contests. You can check out my progress as I learn more and grow
              as a programmer.
            </h3>
            <Button href="https://codeforces.com/profile/TimmyThinMints">
              Check out my CodeForces Profile
            </Button>
          </Col>
        </Row>
      </Row>
    </Container>
  );
};

export default Home;
