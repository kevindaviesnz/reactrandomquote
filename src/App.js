
import './App.css';

const Quote = (props) => {
  return (
    <h1>
      {props.quote}
    </h1>
  );
};

function App() {
  const quotes = [
    "Say hello to my little friend.",
    "The first rule of Fight Club is you do not talk about Fight Club"
  ]
  const idx = Math.floor(Math.random() * quotes.length)
  return (
    <div className="App">
      <h1>{quotes[idx]}</h1>
      <Quote quote={quotes[idx]} />
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

    </div>
  );
}

export default App;

