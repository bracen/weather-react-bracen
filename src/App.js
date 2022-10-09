import "./App.css";
import Weather from "./Weather";
import "./Weather.css";


export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Paris"/>
      </div>
      <small>
        <a
          href="https://github.com/bracen/weather-react-bracen.git"
          rel="noreferrer"
          target="_blank"
        >
          Open-sourced code
        </a>{" "}
        by Nina Bracen
      </small>
    </div>
  );
}
