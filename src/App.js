import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  let [count, setCount] = useState(0);
  let [count_1, setCount_1] = useState(0);
  const [data, setData] = useState(undefined);

  useEffect(() => {
    fetch("https://api.github.com/users/necoiro")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

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
        <a href="/newpage" className="text-aliceblue underline">
          コミュニティページ
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
        {data ? (
          <>
            <img
              className="w-32 rounded-full mt-10"
              alt="icon"
              src={data.avatar_url}
            />
            <p className="text-wed-dark">{data.login}</p>
          </>
        ) : (
          <p>no data</p>
        )}
      </header>
    </div>
  );
}

export default App;
