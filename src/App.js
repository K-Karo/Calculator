import React, {useState, useEffect} from 'react'
import Calculator from "./components/Calculator"
import './App.css';

function App() {
  const [calculatorActivator, setCalculatorActivator] = useState(false);
  const [calculatorButtonHide, setCalculatorButtonHide] = useState(true);
  const [preState, setPreState] = useState("");
  const [curState, setCurState] = useState("");
  const [operator, setOperator] = useState();
  const [inputText, setInputText] = useState("0");
  const [sign, setSign] = useState("");
  const [pressButton, setPressButton] = useState("0");

  const [measure, setMeasure] = useState(false);
  const [distance, setDistance] = useState(false);
  const [distanceInputUp, setDistanceInputUp] = useState("");
  const [distanceInputDown, setDistanceInputDown] = useState("");
  const [weight, setWeight] = useState(false);
  const [weightInputUp, setWeightInputUp] = useState("");
  const [weightInputDown, setWeightInputDown] = useState("");
  const [temp, setTemp] = useState(false);
  const [tempInputUp, setTempInputUp] = useState("");
  const [tempInputDown, setTempInputDown] = useState("");

  return (
    <div className="App">
      <Calculator 
        calculatorActivator={calculatorActivator} setCalculatorActivator={setCalculatorActivator}
        preState={preState} setPreState={setPreState}
        curState={curState} setCurState={setCurState}
        operator={operator} setOperator={setOperator}
        inputText={inputText} setInputText={setInputText}
        sign={sign} setSign={setSign}
        pressButton={pressButton} setPressButton={setPressButton}
        measure={measure} setMeasure={setMeasure}
        distance={distance} setDistance={setDistance}
        weight={weight} setWeight={setWeight}
        temp={temp} setTemp={setTemp}
        distanceInputUp={distanceInputUp} setDistanceInputUp={setDistanceInputUp}
        distanceInputDown={distanceInputDown} setDistanceInputDown={setDistanceInputDown}
        weightInputUp={weightInputUp} setWeightInputUp={setWeightInputUp}
        weightInputDown={weightInputDown} setWeightInputDown={setWeightInputDown}
        tempInputUp={tempInputUp} setTempInputUp={setTempInputUp}
        tempInputDown={tempInputDown} setTempInputDown={setTempInputDown}>
      </Calculator>
    </div>
  );
}

export default App;
