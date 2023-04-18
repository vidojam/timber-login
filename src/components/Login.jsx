import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import LoginForm from "./LoginForm.jsx";

export default function Login() {

  return (
    <Container>
      <Row>
        <Col>
          <LoginForm />
        </Col>
      </Row>
    </Container>
  )
}