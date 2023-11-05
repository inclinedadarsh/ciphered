import { Dispatch, SetStateAction } from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface AlgorithmProps {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}

const Algorithm = ({ value, setValue }: AlgorithmProps) => {
  return (
    <Select value={value} onValueChange={setValue}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select an algorithm" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Algorithms</SelectLabel>
          <SelectItem value="caesarCipher">Caesar Cipher</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default Algorithm;
