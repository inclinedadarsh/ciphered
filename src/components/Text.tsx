import { TextProps } from "@/types";
import { Textarea } from "./ui/textarea";

const Text = ({ value, setValue }: TextProps) => {
  const handleTextChange = (value: string) => {
    setValue(value);
  };
  return (
    <Textarea
      rows={10}
      className="w-full"
      placeholder="Type your message here..."
      value={value}
      onChange={(event) => handleTextChange(event.target.value)}
    />
  );
};

export default Text;
