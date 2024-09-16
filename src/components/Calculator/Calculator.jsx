import { useState, useEffect } from "react";

import { CalcButton } from "../CalcButton/CalcButton";
import { CalcInput } from "../CalcInput/CalcInput";

export const Calculator = () => {
  const [input, setInput] = useState("");

  const [inputArray, setInputArray] = useState([]);
  const [result, setResult] = useState(0);

  const calculateResult = () => {
    const sum = inputArray.reduce((acc, curr) => acc + curr, 0);
    setResult(sum);
  };

  console.log(inputArray);

  return (
    <div>
      <CalcInput
        input={input}
        setInput={setInput}
        setResult={setResult}
        sum={sum}
      />
      <CalcButton
        input={input}
        setInput={setInput}
        setInputArray={setInputArray}
      />
    </div>
  );
};
