export const CalcInput = ({ input, setInput, setResult, sum }) => {
  return (
    <input
      type="number"
      value={input}
      onChange={(e) => {
        setInput(Number(e.target.value));
        setResult(sum)
      }}
    />
  );
};
