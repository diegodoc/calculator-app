import { useState } from "react";
import Button from "./components/Button";
import "./styles/App.css";
import Switch from "@mui/material/Switch";

function App() {
  const [result, setResult] = useState("0");
  const [isDarkMode, setIsDarkMode] = useState(true);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
    !isDarkMode
      ? document.documentElement.style.setProperty(
          "--background-color",
          "hsl(0, 0%, 90%)"
        )
      : document.documentElement.style.setProperty(
          "--background-color",
          "hsl(268, 75%, 9%)"
        );
  };

  const calculateResult = () => {
    if (isLastCharacterSymbol(result)) {
      const calculatedResult = eval(result.slice(0, -1));
      setResult(calculatedResult.toString());
    } else {
      const calculatedResult = eval(result);
      setResult(calculatedResult.toString());
    }
  };
  const isFirstCharacterSymbol = (str) => {
    let firstCharacter = str.charAt(0);
    let symbolRegex = /[/\*]/;
    return symbolRegex.test(firstCharacter);
  };
  const isLastCharacterSymbol = (str) => {
    let lastCharacter = str.charAt(str.length - 1);
    let symbolRegex = /[+\-\/\*]/;

    return symbolRegex.test(lastCharacter);
  };

  const handleNumbers = (value) => {
    if (isLastCharacterSymbol(result) && isLastCharacterSymbol(value)) {
      setResult(result);
    } else if (isFirstCharacterSymbol(value) && result=='0') {
      setResult(result);
    } else {
      result == "0" ? setResult(value) : setResult(result + value);
    }
  };

  const handleFunctions = (value) => {
    if (value == "del") {
      if (result.length == 1) {
        setResult("0");
      } else setResult(result.slice(0, -1));
    } else if (value == "reset") return setResult("0");
  };

  return (
    <div className={isDarkMode ? "container" : "dark-container"}>
      <header>
        <Switch onChange={handleToggle} color="secondary" />
      </header>
      <div className={isDarkMode ? "display" : "dark-display"}>{result}</div>
      <div
        className={isDarkMode ? "buttons-container" : "dark-buttons-container"}
      >
        <Button
          className={isDarkMode ? "button-white" : "dark-number"}
          value="7"
          handleClick={() => handleNumbers("7")}
        />
        <Button
          className={isDarkMode ? "button-white" : "dark-number"}
          value="8"
          handleClick={() => handleNumbers("8")}
        />
        <Button
          className={isDarkMode ? "button-white" : "dark-number"}
          value="9"
          handleClick={() => handleNumbers("9")}
        />
        <Button
          className={isDarkMode ? "button-blue" : "dark-blue-number"}
          value="DEL"
          handleClick={() => handleFunctions("del")}
        />
        <Button
          className={isDarkMode ? "button-white" : "dark-number"}
          value="4"
          handleClick={() => handleNumbers("4")}
        />
        <Button
          className={isDarkMode ? "button-white" : "dark-number"}
          value="5"
          handleClick={() => handleNumbers("5")}
        />
        <Button
          className={isDarkMode ? "button-white" : "dark-number"}
          value="6"
          handleClick={() => handleNumbers("6")}
        />
        <Button
          className={isDarkMode ? "button-white" : "dark-number"}
          value="+"
          handleClick={() => handleNumbers("+")}
        />
        <Button
          className={isDarkMode ? "button-white" : "dark-number"}
          value="1"
          handleClick={() => handleNumbers("1")}
        />
        <Button
          className={isDarkMode ? "button-white" : "dark-number"}
          value="2"
          handleClick={() => handleNumbers("2")}
        />
        <Button
          className={isDarkMode ? "button-white" : "dark-number"}
          value="3"
          handleClick={() => handleNumbers("3")}
        />
        <Button
          className={isDarkMode ? "button-white" : "dark-number"}
          value="-"
          handleClick={() => handleNumbers("-")}
        />
        <Button
          className={isDarkMode ? "button-white" : "dark-number"}
          value="."
          handleClick={() => handleNumbers(".")}
        />
        <Button
          className={isDarkMode ? "button-white" : "dark-number"}
          value="0"
          handleClick={() => handleNumbers("0")}
        />
        <Button
          className={isDarkMode ? "button-white" : "dark-number"}
          value="/"
          handleClick={() => handleNumbers("/")}
        />
        <Button
          className={isDarkMode ? "button-white" : "dark-number"}
          value="x"
          handleClick={() => handleNumbers("*")}
        />
        <Button
          id="dark-reset"
          className={isDarkMode ? "button-blue" : "dark-blue-number"}
          value="RESET"
          handleClick={() => handleFunctions("reset")}
        />
        <Button
          id={isDarkMode ? "button-equals" : "dark-equals"}
          value="="
          handleClick={calculateResult}
        />
      </div>
    </div>
  );
}

export default App;
