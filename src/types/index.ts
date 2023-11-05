import { Dispatch, SetStateAction } from "react";

export type Algorithms = "caesarCipher" | "";

export interface AlgorithmProps {
  value: Algorithms;
  setValue: Dispatch<SetStateAction<Algorithms>>;
}
