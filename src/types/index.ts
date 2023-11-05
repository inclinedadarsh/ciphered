import { Dispatch, SetStateAction } from "react";

export type AlgorithmType = "caesarCipher" | "";

// * For future use
export type KeyType<T extends AlgorithmType> = T extends "caesarCipher"
  ? number
  : never;

export interface AlgorithmProps {
  value: AlgorithmType;
  setValue: Dispatch<SetStateAction<AlgorithmType>>;
}

export interface KeyProps {
  value: string | number;
  setValue: Dispatch<SetStateAction<string | number>>;
}
