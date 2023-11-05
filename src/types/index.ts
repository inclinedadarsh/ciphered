import { Dispatch, SetStateAction } from "react";

export type Algorithms = "caesarCipher" | "";

// * For future use
export type KeyType<T extends Algorithms> = T extends "caesarCipher"
  ? number
  : never;

export interface AlgorithmProps {
  value: Algorithms;
  setValue: Dispatch<SetStateAction<Algorithms>>;
}

export interface KeyProps {
  value: string | number;
  setValue: Dispatch<SetStateAction<string | number>>;
}
