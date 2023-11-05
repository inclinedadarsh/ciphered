"use client";

import { useState, useEffect } from "react";
import Algorithm from "./Algorithm";
import Key from "./Key";

import { Algorithms } from "@/types";

const Main = () => {
  const [algorithm, setAlgorithm] = useState<Algorithms>("");
  const [key, setKey] = useState<string | number>("");

  useEffect(() => {
    console.log(algorithm);
  }, [algorithm]);

  return (
    <main>
      <div className="grid sm:grid-cols-2 max-w-md sm:max-w-3xl w-full mx-auto px-4 gap-10">
        <div className="">
          <h2 className="text-lg font-semibold mb-4">Algorithm</h2>
          <Algorithm value={algorithm} setValue={setAlgorithm} />
        </div>
        <div className="">
          <h2 className="text-lg font-semibold mb-4">Key</h2>
          <Key value={key} setValue={setKey} />
        </div>
      </div>
    </main>
  );
};

export default Main;
