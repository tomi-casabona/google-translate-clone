import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useStore } from "./hooks/useStore";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { AUTO_LANGUAGE } from "./constants";
import { ArrowIcon } from "./components/Icons";
import { LanguageSelector } from "./components/LanguageSelector";

function App() {
  const {
    setFromLanguage,
    fromLanguage,
    setToLanguage,
    toLanguage,
    interchangeLanguages,
  } = useStore();
  return (
    <Container fluid>
      <h1>Google Translate</h1>
      <Row>
        <Col>
          <LanguageSelector
            type="from"
            value={fromLanguage}
            onChange={setFromLanguage}
          />
          <Form.Control
            as="textarea"
            placeholder="Introducir texto"
            autoFocus
            style={{ height: "150px" }}
          />
        </Col>
        <Col xs="auto">
          <Button
            variant="link"
            disabled={fromLanguage === AUTO_LANGUAGE}
            onClick={interchangeLanguages}
          >
            <ArrowIcon />
          </Button>
        </Col>
        <Col>
          <LanguageSelector
            type="to"
            value={toLanguage}
            onChange={setToLanguage}
          />
          <Form.Control
            as="textarea"
            placeholder="Traducción"
            style={{ height: "150px" }}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
