import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header bg-pastel-purple">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/SCP_Foundation_%28emblem%29.svg/768px-SCP_Foundation_%28emblem%29.svg.png"
          className="App-logo"
          alt="logo"
        />
        <p className="text-pastel-blue text-3xl">
          <code>SCP</code> 財団にようこそ！
        </p>
        <a
          className="text-pastel-red underline"
          href="http://scp-jp.wikidot.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          ⇒ article ⇐
        </a>
        <a href="/newpage" className="text-pastel-red underline">
          コミュニティページ
        </a>
        <button
          className="text-pastel-red"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          ☝
        </button>
        <p className="text-pastel-red">{count}</p>
        <button
          className="text-pastel-red"
          onClick={() => {
            setCount(count - 1);
          }}
        >
          ☟
        </button>
      </header>
    </div>
  );
}

export default App;
