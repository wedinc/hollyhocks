import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  let [fine, setfine] = useState(0);
  let [ill, setill] = useState(0);
  const [data, setData] = useState(undefined);

  useEffect(() => {
    fetch("https://api.github.com/users/yurunull")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  return (
    <div className="App-header bg-light-pink">
      <header className="App-header bg-lightpink">
        <img
          src="https://w7.pngwing.com/pngs/806/733/png-transparent-big-hero-6-baymax-illustration-baymax-tadashi-hamada-hiro-hamada-groot-the-walt-disney-company-others-white-mammal-carnivoran-thumbnail.png "
          className="App-logo"
          alt="logo"
        />
        <p className="text-white text-3xl">Baymax Clinic</p>
        <a
          className="text-lightpink underline hover:text-yellow"
          href="https://www.disney.co.jp/fc/bighero6"
          rel="noopener noreferrer"
        >
          Which is your physical condition?
        </a>

        <a href="/newpage" class="text-pastel-red" underline>
          コミュニティぺージ
        </a>

        <p
          className="text-pastel-purple text-2xl bg-yellow p-1 m-2 rouded-lg hover:text-4xl"
          onClick={() => {
            setfine(fine + 1);
          }}
        >
          😊{fine}
        </p>
        <p
          className="text-pastel-purple text-2xl bg-yellow p-1 m-2 rouded-lg hover:text-4xl"
          onClick={() => {
            setill(ill + 1);
            document.write("bless you...");
          }}
        >
          😥{ill}
        </p>

        {data ? (
          <>
            <img
              className="w-32 rouded-full mt-10"
              alt="icon"
              src={data.avatar_url}
            />
            <p className="text-light-pink">{data.login}</p>
          </>
        ) : (
          <p>no data</p>
        )}
      </header>
    </div>
  );
}

export default App;
