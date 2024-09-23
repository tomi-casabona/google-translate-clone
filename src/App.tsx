import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useStore } from "./hooks/useStore";
import { Container, Row, Col, Button, Stack } from "react-bootstrap";
import { AUTO_LANGUAGE } from "./constants";
import { ArrowIcon } from "./components/Icons";
import { LanguageSelector } from "./components/LanguageSelector";
import { TextArea } from "./components/TextArea";

function App() {
  const {
    fromText,
    fromLanguage,
    toLanguage,
    toText,
    loading,
    setFromLanguage,
    setToLanguage,
    interchangeLanguages,
    setFromText,
    setToText,
  } = useStore();
  return (
    <Container fluid>
      <h2>Google Translate</h2>
      <Row>
        <Col>
          <Stack gap={2}>
            <LanguageSelector
              type="from"
              value={fromLanguage}
              onChange={setFromLanguage}
            />
            <TextArea type="from" value={fromText} onChange={setFromText} />
          </Stack>
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
          <Stack gap={2}>
            <LanguageSelector
              type="to"
              value={toLanguage}
              onChange={setToLanguage}
            />
            <TextArea
              type="to"
              value={toText}
              loading={loading}
              onChange={setToText}
            />
          </Stack>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
