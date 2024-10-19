import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  let [goodcount, setgoodCount] = useState(0);
  let [badcount, setbadCount] = useState(0);
  const [data, setData] = useState(undefined);

  useEffect(() => {
    fetch("https://api.github.com/users/IsogaiEito")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  return (
    <div className="App">
      <header className="App-header bg-mediumpurple">
        <img
          src="https://illust8.com/wp-content/uploads/2018/10/animal_panda_illust_1664.png"
          className="App-logo"
          alt="logo"
        />
        <p className="text-aquamarine text-3xl">
          <code>WED</code> Communityにようこそ！
        </p>
        <a
          className="text-navy underline"
          href="https://wed.company/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn WED
        </a>
        <a href="/newpage" className="text-aquamarine underline">
          コミュニティページ
        </a>
        <p
          className="text-aquamarine text-3xl bg-navy p-1 m-2 rounded-lg hover:text-4xl"
          onClick={() => {
            setgoodCount(goodcount + 1);
          }}
        >
          <button>👍</button>
          {goodcount}
        </p>

        <p
          className="text-aquamarine text-3xl bg-navy p-1 m-2 rounded-lg hover:text-4xl"
          onClick={() => {
            setbadCount(badcount + 1);
          }}
        >
          <button>👎</button>
          {badcount}
        </p>
        {data ? (
          <>
            <img
              className="w-32 rounded-full mt-10"
              alt="icon"
              src={data.avatar_ur}
              />
              <p className="text-aquamarine">{data.login}</p>
            </>
        ) : (
          <p>no data</p>
        )}
      </header>
    </div>
  );
}

export default App;
