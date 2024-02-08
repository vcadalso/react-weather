import logo from './logo.svg';
import './App.css';
import Weather from "./Weather";
import Url from "./Url";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Weather</h1>
        <Weather/>
        <Url/>

      </header>
    </div>
  );
}

export default App;
