import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header bg-wed">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="text-wed-dark">
          Welcome to <code>WED</code> Community.
        </p>
        <a
          className="text-wed-dark underline"
          href="https://wed.company/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn WED
        </a>
      </header>
    </div>
  );
}

export default App;
