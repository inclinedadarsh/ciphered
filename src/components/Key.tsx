import { Input } from "@/components/ui/input";

import { KeyProps } from "@/types";

const Key = ({ value, setValue }: KeyProps) => {
  const handleKeyChange = (value: string | number) => {
    setValue(value);
  };
  return (
    <Input
      value={value}
      onChange={(event) => handleKeyChange(event.target.value)}
    />
  );
};

export default Key;
