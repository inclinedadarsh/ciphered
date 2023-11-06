import { Dispatch, SetStateAction } from "react";

export type AlgorithmType = "caesarCipher" | "simpleSubstitution" | "";

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

export interface TextProps {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}
