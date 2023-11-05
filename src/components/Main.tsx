"use client";

import { useState } from "react";
import Algorithm from "./Algorithm";
import Key from "./Key";
import Text from "./Text";

import { Button } from "./ui/button";

import { AlgorithmType } from "@/types";

const Main = () => {
  const [algorithm, setAlgorithm] = useState<AlgorithmType>("");
  const [key, setKey] = useState<string | number>("");
  const [plainText, setPlainText] = useState("");
  const [cipherText, setCipherText] = useState("");

  const handleEncrypt = () => {};

  const handleDecrypt = () => {};

  return (
    <main>
      <div className="max-w-md sm:max-w-3xl w-full mx-auto px-4">
        <div className="grid sm:grid-cols-2 gap-10">
          <div className="">
            <h2 className="text-lg font-semibold mb-4">Algorithm</h2>
            <Algorithm value={algorithm} setValue={setAlgorithm} />
          </div>
          <div className="">
            <h2 className="text-lg font-semibold mb-4">Key</h2>
            <Key value={key} setValue={setKey} />
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-10 mt-12">
          <div className="">
            <h2 className="text-lg font-semibold mb-4">Plain Text</h2>
            <Text value={plainText} setValue={setPlainText} />
            <Button variant="accent" className="mt-5" onClick={handleEncrypt}>
              Encrypt
            </Button>
          </div>
          <div className="">
            <h2 className="text-lg font-semibold mb-4">Cipher Text</h2>
            <Text value={cipherText} setValue={setCipherText} />
            <Button variant="accent" className="mt-5" onClick={handleDecrypt}>
              Decrypt
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
