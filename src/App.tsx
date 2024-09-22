import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useStore } from "./hooks/useStore";

function App() {
  const { setFromLanguage, fromLanguage } = useStore();
  return (
    <>
      <h1>Google Translate</h1>
      <button
        onClick={() => {
          setFromLanguage("ca");
        }}
      >
        Cambiar a español
      </button>
      {fromLanguage}
    </>
  );
}

export default App;
