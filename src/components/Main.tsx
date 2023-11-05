"use client";

import { useState } from "react";
import Algorithm from "./Algorithm";
import Key from "./Key";
import Text from "./Text";

import { Button } from "./ui/button";
import { useToast } from "./ui/use-toast";

import { CaesarCipher } from "@/lib/algorithms";

import { AlgorithmType } from "@/types";

const Main = () => {
  const { toast } = useToast();

  const [algorithm, setAlgorithm] = useState<AlgorithmType>("");
  const [key, setKey] = useState<string | number>("");
  const [plainText, setPlainText] = useState("");
  const [cipherText, setCipherText] = useState("");

  const handleEncrypt = () => {
    if (algorithm === "")
      toast({
        title: "Please select an algorithm",
        variant: "destructive",
      });
    else if (algorithm === "caesarCipher") {
      const shift = parseInt(key as string);
      if (isNaN(shift)) {
        toast({
          title: "Please enter a valid key",
          description: "Key should be a number for Caesar Cipher",
          variant: "destructive",
        });
      } else {
        const cipher = new CaesarCipher(shift);
        setCipherText(cipher.encrypt(plainText));
      }
    }
  };

  const handleDecrypt = () => {
    if (algorithm === "")
      toast({
        title: "Please select an algorithm",
        variant: "destructive",
      });
    else if (algorithm === "caesarCipher") {
      const shift = parseInt(key as string);
      if (isNaN(shift)) {
        toast({
          title: "Please enter a valid key",
          description: "Key should be a number for Caesar Cipher",
          variant: "destructive",
        });
      } else {
        const cipher = new CaesarCipher(shift);
        setPlainText(cipher.decrypt(cipherText));
      }
    }
  };

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
