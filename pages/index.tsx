import type { NextPage } from "next";
import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import axios from "axios";

function Component({ color }: { color: "green" | "blue" }) {
  return <div style={{ color: color }}>lol</div>;
}
// A react component that is a counter with plus and minus buttons that renders the count
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className="text-3xl">
      <button
        className="p-2 rounded bg-gray-100"
        onClick={() => setCount(count - 1)}
      >
        -
      </button>
      <span className="bg-pink-100 p-2 mx-2 rounded-md">{count}</span>
      <button
        className="p-2 rounded bg-gray-100"
        onClick={() => setCount(count + 1)}
      >
        +
      </button>
    </div>
  );
}

async function getCatFacts() {
  const { data } = await axios.get("https://catfact.ninja/fact");
  console.log(data);
  return data.all;
}

function CatFacts() {
  const [facts, setFacts] = useState<string[]>(["cat1", "cat2", "cat3"]);
  return (
    <>
      <button onClick={async () => await getCatFacts()}>Get a new fact</button>
      {facts.map((fact, idx) => (
        <div key={idx}>{fact}</div>
      ))}
    </>
  );
}

const Home: NextPage = () => {
  return (
    <div className="h-screen bg-indigo-200 flex flex-col justify-center items-center">
      <CatFacts />
      <Counter />
    </div>
  );
};

export default Home;
