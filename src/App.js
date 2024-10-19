import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let [count = 0, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header bg-b-blue">
        <img
          src="https://x.gd/A39mq"
          className="App-logo bg-c-gray"
          alt="logo"
        />
        <p className="text-c-gray text-2xl">食欲の秋</p>
        <a
          className="text-c-gray underline font-style: nomal"
          href="https://sorami.dev/hokkaidle/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Play Hokkaidle
        </a>

        <a href="/newpage" className="text-c-gray underline">
          コミュニティページ
        </a>
        <p
          onClick={() => {
            setCount(count + 1);
          }}
        >
          👍{count}
        </p>
      </header>
    </div>
  );
}

export default App;
