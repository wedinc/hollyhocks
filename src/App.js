import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let [count = 0, setCount] = useState(0);
  return (
    <div className="App">
      <header className="App-header bg-burlywood">
        <img
          src="https://images.photowall.com/products/48547/snowboard-jump-from-ramp.jpg?h=699&q=85"
          className="App-logo"
          alt="logo"
        />
        <p className="text-maroon">
          <code>WED</code> Communityにようこそ！
        </p>
        <a
          className="text-maroon text-4xl underline"
          href="https://wed.company/"
          target="_blank"
          rel="noopener noreferrer"
        >
          WEDについて
        </a>
        <p className="text-4xl">{count}</p>
        <p
          className="text-4xl"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          👍
        </p>

        <p
          className="text-4xl"
          onClick={() => {
            setCount(count - 1);
          }}
        >
          👎
        </p>
      </header>
    </div>
  );
}

export default App;
