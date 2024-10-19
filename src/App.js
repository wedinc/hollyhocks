import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  let [count1, setCount] = useState(0);
  let [count2, badCount] = useState(0);
  const [data, setData] = useState(undefined);
  useEffect(() => {
    fetch("https://api.gethub.com/ussers/t-riku-hub")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);
  return (
    <div className="App">
      <header className="App-header bg-pastel-green">
        <img
          src="https://png.pngtree.com/png-vector/20240525/ourlarge/pngtree-person-a-logo-with-a-person-in-it-vector-png-image_6930827.png"
          className="App-logo"
          alt="logo"
        />
        <p className="text-pastel-purple underline">
          <code>WED</code> Communityへようこそ
        </p>
        <a
          className="text-pastel-red underline "
          href="https://wed.company/"
          target="_blank"
          rel="noopener noreferrer"
        >
          WEDについて→
        </a>
        <a href="/newpage" className="text-pastel-red underline">
          コミュニティーページ
        </a>
        <p
          className="text-pastel-red text-2xl bg-pastel-purple p-1 m-2 rounded-lg hover:text-4xl"
          onClick={() => {
            setCount(count1 + 1);
          }}
        >
          👍{count1}
        </p>
        <p
          className="text-pastel-red text-2xl bg-pastel-purple p-1 m-2 rounded-lg hover:text-4xl"
          onClick={() => {
            badCount(count2 + 1);
          }}
        >
          👎{count2}
        </p>
        <p
          className="text-pastel-red text-2xl bg-pastel-purple"
          onclick={() => {}}
        >
          ボタンを押した回数:{count1 + count2}
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
