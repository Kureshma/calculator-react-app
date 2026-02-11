import { useState } from "react";
import "./calculator.css";

function Calculator() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleEqual = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput("Error");
    }
  };

  return (
    <div className="calculator-container">
      <div className="calculator">
        <input
          type="text"
          className="calculator-screen"
          value={input}
          placeholder="0"
          readOnly
        />

        <div className="calculator-buttons">
          <button className="clear span-two" onClick={handleClear}>C</button>
          <button className="operator" onClick={() => handleClick("%")}>%</button>
          <button className="operator" onClick={() => handleClick("/")}>÷</button>

          <button onClick={() => handleClick("7")}>7</button>
          <button onClick={() => handleClick("8")}>8</button>
          <button onClick={() => handleClick("9")}>9</button>
          <button className="operator" onClick={() => handleClick("*")}>×</button>

          <button onClick={() => handleClick("4")}>4</button>
          <button onClick={() => handleClick("5")}>5</button>
          <button onClick={() => handleClick("6")}>6</button>
          <button className="operator" onClick={() => handleClick("-")}>−</button>

          <button onClick={() => handleClick("1")}>1</button>
          <button onClick={() => handleClick("2")}>2</button>
          <button onClick={() => handleClick("3")}>3</button>
          <button className="operator" onClick={() => handleClick("+")}>+</button>

          <button className="span-two" onClick={() => handleClick("0")}>0</button>
          <button onClick={() => handleClick(".")}>.</button>
          <button className="equal" onClick={handleEqual}>=</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
