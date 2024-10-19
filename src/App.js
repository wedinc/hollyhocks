import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let [countlive, setCount] = useState(0);
  let [countbad, setCountb] = useState(0);
  return (
    <div className="App">
      <header className="App-header bg-cookie text-3xl">
        <img
          src={
            "https://www.japan-ex.net/resources/upload/products/SN00012_b.jpg"
          }
          className="App-logo"
          alt="logo"
        />
        <p className="text-chocolate text-3xl">
          里に <code></code> にようこそ
        </p>
        <a
          className="text-chocolate underline"
          href="https://www.meiji.co.jp/products/brand/kinotake/"
          target="_blank"
          rel="noopener noreferrer"
        >
          移住する
        </a>
        <p
          onClick={() => {
            setCount(countlive + 1);
          }}
        >
          <boton class="joinBtn">🏠{countlive}</boton>
        </p>
        <p
          onClick={() => {
            setCountb(countbad + 1);
          }}
        >
          <boton class="joinBtn">👎{countbad}</boton>
        </p>
      </header>
    </div>
  );
}

export default App;
