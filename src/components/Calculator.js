import React from 'react'
import { BiRuler } from "react-icons/bi"
import {AiOutlineHome} from "react-icons/ai"
import {AiFillGithub} from "react-icons/ai" 
import {MainMenuBtn, TodoGitBtn, Btn, Number, Wrapper, ContainerCalc, InputMain, 
        InputSecondary, BtnAc, BtnOps, BtnEqual, Mes} from "./StyledComponents"
import Converter from "./Converter"

const Calculator = ({preState, setPreState, curState, setCurState, operator, setOperator, 
                    inputText, setInputText, sign, setSign, pressButton, setPressButton,
                    measure, setMeasure, distance, setDistance, weight, setWeight, temp, setTemp,
                    distanceInputUp, setDistanceInputUp, distanceInputDown, setDistanceInputDown,
                    weightInputUp, setWeightInputUp, weightInputDown, setWeightInputDown,
                    tempInputUp, setTempInputUp, tempInputDown, setTempInputDown
                  }) => {

    const buttonHandler = (e) => {   
        setCurState(curState + e.target.innerText);
        setInputText(curState + e.target.innerText);
        setSign("");
        setPressButton("0");
      }
    
      const operatorHandler = (e) => {
        if (pressButton === "0") {
        setOperator(e.target.innerText);
        setSign(e.target.innerText);
        setPreState(+preState + +inputText);
        setCurState("");
        setPressButton("");
    
        switch (operator) {
          case "+":
            setPreState(+inputText + +preState);
            break;
    
          case "-":
            if (preState === "") {
              setPreState(+inputText - +preState);
            } else {
              setPreState(+preState - +inputText);
            };
            break;
            
          case "×":
            setPreState(+inputText * +preState);
            break;
    
          case "÷":
            if (preState === "" || preState === "1") {
              setPreState(+inputText / +preState);
            } else {
              setPreState(+preState / +inputText);
            };
            break;
        };
      };
      }
    
    const refreshHandler = () => {
        setCurState("");
        setPreState("");
        setInputText("0");
        setOperator();
        setSign("");
        setPressButton("0");
    }
    
    const inputTextHandler = () => {
        setInputText(curState);
    }
    
    const percentHandler = (e) => {
        setInputText(((inputText/100).toFixed(4)).replace(/(\.0+|0+)$/, ''));
        setSign(e.target.innerText);
    }
    
    const minusPlusHandler = (e) => {
        setInputText(-inputText);
        setSign(e.target.innerText);
    }
    
    const equalHandler = () => {
        setSign("");
        switch (operator) {
          case "+":
            setInputText(((+preState + +inputText).toFixed(4)).replace(/(\.0+|0+)$/, ''));
            setPreState("");
            break;
    
          case "-":
            setInputText((+preState - +inputText).toFixed(4).replace(/(\.0+|0+)$/, ''));
            setPreState("");
            break;
            
          case "×":
            setInputText((+preState * +inputText).toFixed(4).replace(/(\.0+|0+)$/, ''));
            setPreState("1");
            break;
    
          case "÷":
            setInputText((+preState / +inputText).toFixed(4).replace(/(\.0+|0+)$/, ''));
            setPreState("1");
            break;
        };
    }

    const openModal = () => {
        setMeasure(prev => !prev);
    };

    function refreshPage() {
      window.location.reload();
    }
    
    return(
    <div>
          <MainMenuBtn onClick={ refreshPage }><AiOutlineHome Icon size={30}></AiOutlineHome></MainMenuBtn>
          <form action="https://github.com/K-Karo/Todo">
                <TodoGitBtn type="submit"><AiFillGithub Icon size={30}></AiFillGithub></TodoGitBtn>
          </form>
          <ContainerCalc>
            <InputMain value={inputText} onChange={inputTextHandler}></InputMain>
            <InputSecondary value={sign} onChange={operatorHandler}></InputSecondary>
            <Wrapper> 
                <BtnAc onClick={refreshHandler}> AC </BtnAc>
                <BtnOps onClick={percentHandler}> % </BtnOps>
                <BtnOps onClick={minusPlusHandler}> +/- </BtnOps>
                <BtnOps onClick={operatorHandler}> ÷ </BtnOps>
            </Wrapper>

            <Wrapper> 
                <Number onClick={buttonHandler}> 7 </Number>
                <Number onClick={buttonHandler}> 8 </Number>
                <Number onClick={buttonHandler}> 9 </Number>       
                <BtnOps onClick={operatorHandler}> × </BtnOps>
            </Wrapper>

            <Wrapper>
                <Number onClick={buttonHandler}> 4 </Number>
                <Number onClick={buttonHandler}> 5 </Number>
                <Number onClick={buttonHandler}> 6 </Number>
                <BtnOps onClick={operatorHandler}> + </BtnOps>
            </Wrapper>

            <Wrapper>
                <Number onClick={buttonHandler}> 1 </Number>
                <Number onClick={buttonHandler}> 2 </Number>
                <Number onClick={buttonHandler}> 3 </Number>
                <BtnOps onClick={operatorHandler}> - </BtnOps>
            </Wrapper>

            <Wrapper>
                <Mes onClick={openModal}> <BiRuler Icon size={40}/> </Mes>
                <Number onClick={buttonHandler}> 0 </Number>
                <Btn onClick = {buttonHandler}> . </Btn>
                <BtnEqual onClick ={equalHandler}> = </BtnEqual>
            </Wrapper>
        </ContainerCalc> 

        <Converter measure={measure} setMeasure={setMeasure}
               distance={distance} setDistance={setDistance}
               weight={weight} setWeight={setWeight}
               temp={temp} setTemp={setTemp}
               distanceInputUp={distanceInputUp} setDistanceInputUp={setDistanceInputUp}
               distanceInputDown={distanceInputDown} setDistanceInputDown={setDistanceInputDown}
               weightInputUp={weightInputUp} setWeightInputUp={setWeightInputUp}
               weightInputDown={weightInputDown} setWeightInputDown={setWeightInputDown}
               tempInputUp={tempInputUp} setTempInputUp={setTempInputUp}
               tempInputDown={tempInputDown} setTempInputDown={setTempInputDown}>
        </Converter>
    </div>
    )
}

export default Calculator
