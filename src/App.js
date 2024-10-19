import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let [count, setCount] = useState(0);
  let [count_1, setCount_1] = useState(0);
  return (
    <div className="App">
      <header className="App-header bg-aliceblue">
        <img
          src="https://www.min-nekozukan.com/data/catKind/norwegian-forest-cat/main_norwegian-forest-cat_954e6_detail.jpg"
          width={300}
        />
        <p className="text-royalblue" class="text-3xl">
          <code>WED</code> Communityにようこそ！
        </p>
        <a
          className="text-royalblue underline"
          href="https://wed.company/"
          target="_blank"
          rel="noopener noreferrer"
        >
          WEDについて
        </a>
        <p
          onClick={() => {
            setCount(count + 1);
          }}
        >
          👍{count}
        </p>
        <p
          onClick={() => {
            setCount_1(count_1 + 1);
          }}
        >
          😍{count_1}
        </p>
      </header>
    </div>
  );
}

export default App;
