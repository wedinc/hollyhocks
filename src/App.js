import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header bg-black">
        <img
          src="https://msp.c.yimg.jp/images/v2/FUTi93tXq405grZVGgDqG3kYhHZLhOJWWPPnVCRdERf5hHMRW41KNljyUgaBB1W6dMUpPeBtdidpQTWrmtUfEqPxGZbViewaP8TGFFdx4ZKL0zAoV7TqbRB5bsq8RNZn6ZkrjA38aKJVzHPExv5aSaPCyhegI00RTxCVaIG3YQ7-JsblGWJpaoPN5QlLwcxrd2U4cUFUkl97nzUO160yuj_QUXRm-jGOLxdB2E2XpqpDOu_xr6YFvgpOi1kxnUtvYJKshOzVHN1pEKCqpFTJ5xXHn93urccCDv48QGWFCuWbUCbYm2njDjLhzkAuXMB0/webp_202107_009_s.webp"
          className="App-logo"
          alt="logo"
        />
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
        <a href="/newpage" className="text-pastel-red underline">
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
