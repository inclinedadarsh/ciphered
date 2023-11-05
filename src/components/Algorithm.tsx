import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { AlgorithmProps, AlgorithmType } from "@/types";

const Algorithm = ({ value, setValue }: AlgorithmProps) => {
  const handleAlgorithmChange = (value: AlgorithmType) => {
    setValue(value);
  };
  return (
    <Select value={value} onValueChange={handleAlgorithmChange}>
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
