import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let [count, setCount] = useState(0);
  let comment = "いえい";

  return (
    <div className="App">
      <header className="App-header bg-black">
        <img
          src="https://i1.wp.com/sozai-dc.com/wp-content/uploads/sozai1/map/aiti500112.png"
          className="App-logo"
          alt="logo"
        />
        <p className="text-wed text-2xl hover:underline hover:opacity-20">
          Dreams comes ture <code>WED</code>This is the wowowo heeeeey Do you
          know where i can find money!?!?
        </p>
        <a
          className="text-wed-dark underline"
          href="https://wed.company/"
          target="_blank"
          rel="noopener noreferrer"
        >
          BECOME GOD
        </a>
        <a href="/newpage" className="text-wed underline hover:opacity-20">
          コミュニティーページ
        </a>
        <p
          className="text-xl p-4 m-2 bg-wed rounded-lg hover:text-2xl"
          onClick={() => {
            setCount(count + 1);
            if (count > 100) {
              comment = "すごい";
            }
          }}
        >
          拍手👏喝采
          {count}
          <p>{comment}</p>
        </p>
        <p
          className="text-xl p-4 m-2 bg-wed rounded-lg hover:text-2xl"
          onClick={() => {
            setCount(count * count);
          }}
        >
          盛り上げる
        </p>
        <p
          className="text-xl p-4 m-2 bg-wed rounded-lg hover:text-2xl"
          onClick={() => {
            setCount((count = 0));
          }}
        >
          CHILL
        </p>
      </header>
    </div>
  );
}

export default App;
