export const CalcButton = ({ input, setInput, setInputArray }) => {
  function add() {
    if (input !== "") {
      setInputArray((prev) => [...prev, input]);
      setInput("");
    }
  }

  return <button onClick={() => add()}>Add</button>;
};
