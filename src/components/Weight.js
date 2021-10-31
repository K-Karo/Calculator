import React from 'react'
import {WeightBox, InputUp, InputDown, ConvertBtn, SignUpWeight, SignDownWeight} from "./StyledComponents"
import { RiArrowUpDownFill } from "react-icons/ri"
import { GiWeight } from "react-icons/gi"

const Converter = ({weight, setWeight, weightInputUp, setWeightInputUp, weightInputDown, setWeightInputDown}) => {

    const weightTextUp = (e) => {
        setWeightInputUp(e.target.value);
        setWeightInputDown("");
    }

    const weightTextDown = (e) => {
        setWeightInputDown(e.target.value);
    }

    const weightAction = () => {
        if (weightInputDown === "") {
            setWeightInputDown(((weightInputUp*0.453592).toFixed(4)).replace(/(\.0+|0+)$/, ''))} 
        else {setWeightInputUp(((weightInputDown/0.453592).toFixed(4)).replace(/(\.0+|0+)$/, ''))}        
    }

    return(
        <div>
            {weight ? <WeightBox>
                <SignUpWeight>lb</SignUpWeight>
                <InputUp value={weightInputUp} onChange={weightTextUp}></InputUp>
                <ConvertBtn onClick={weightAction}><RiArrowUpDownFill Icon size={25}/> <GiWeight Icon size={25}/></ConvertBtn>
                <InputDown  value={weightInputDown} onChange={weightTextDown}></InputDown>
                <SignDownWeight>Kg</SignDownWeight>
            </WeightBox> : null}
        </div>            
    )
}

export default Converter