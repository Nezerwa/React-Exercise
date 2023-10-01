import { useState } from "react";

function ButtonComponent() {
  let [count, setCount] = useState(0);
  const onclickHandler = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <div className="relative top-24 left-80">
      <p className="text-lg">button has clicked: {count} times</p>
      <button className="text-lg bg-slate-400 px-5 mt-6" onClick={onclickHandler}>Click me</button>
    </div>
  );
}

export default ButtonComponent;
