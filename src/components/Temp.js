import React from 'react'
import {TempBox, InputUp, InputDown, ConvertBtn, SignUpTemp, SignDownTemp} from "./StyledComponents"
import { RiTempHotLine } from "react-icons/ri"
import { RiArrowUpDownFill } from "react-icons/ri"
import { RiCelsiusLine } from "react-icons/ri"
import { RiFahrenheitLine } from "react-icons/ri"

const Converter = ({temp, setTemp, tempInputUp, setTempInputUp, tempInputDown, setTempInputDown}) => {

    const tempTextUp = (e) => {
        setTempInputUp(e.target.value);
        setTempInputDown("");
    }

    const tempTextDown = (e) => {
        setTempInputDown(e.target.value);
    }

    const tempAction = () => {
        if (tempInputDown === "") {
            setTempInputDown(((tempInputUp*(9/5)+32).toFixed(4)).replace(/(\.0+|0+)$/, ''))} 
        else {setTempInputUp((((tempInputDown-32)*(5/9)).toFixed(4)).replace(/(\.0+|0+)$/, ''))}        
    }

    return(
        <div>
            {temp ? <TempBox>
                <SignUpTemp><RiCelsiusLine Icon size={25}/></SignUpTemp>
                <InputUp value={tempInputUp} onChange={tempTextUp}></InputUp>
                <ConvertBtn onClick={tempAction}><RiArrowUpDownFill Icon size={25}/> <RiTempHotLine Icon size={25}/></ConvertBtn>
                <InputDown  value={tempInputDown} onChange={tempTextDown}></InputDown>
                <SignDownTemp><RiFahrenheitLine Icon size={25}/></SignDownTemp>
            </TempBox> : null}
        </div>            
    )
}

export default Converter