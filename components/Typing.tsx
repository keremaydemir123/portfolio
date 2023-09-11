import { TypeAnimation } from "react-type-animation";

function Typing({
  cb = () => {},
  text,
}: {
  cb?: () => void;
  text: (string | number)[];
}) {
  return (
    <TypeAnimation
      sequence={[...text, 200, () => cb()]}
      wrapper="span"
      cursor={false}
      speed={60}
    />
  );
}

export default Typing;
