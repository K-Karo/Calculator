import React from 'react'
import {DistanceBox, InputUp, InputDown, ConvertBtn, SignUpDistance, SignDownDistance} from "./StyledComponents"
import { RiArrowUpDownFill } from "react-icons/ri"
import { BiRuler } from "react-icons/bi"

const Converter = ({distance, setDistance, distanceInputUp, setDistanceInputUp, distanceInputDown, setDistanceInputDown}) => {

    const distanceTextUp = (e) => {
        setDistanceInputUp(e.target.value);
        setDistanceInputDown("");
    }

    const distanceTextDown = (e) => {
        setDistanceInputDown(e.target.value);
    }

    const distanceAction = () => {
        if (distanceInputDown === "") {
            setDistanceInputDown(((distanceInputUp*0.3937).toFixed(4)).replace(/(\.0+|0+)$/, ''))} 
        else {setDistanceInputUp(((distanceInputDown/0.3937).toFixed(4)).replace(/(\.0+|0+)$/, ''))}        
    }

    return(
        <div>
            {distance ? <DistanceBox>
                <SignUpDistance>Cm</SignUpDistance>
                <InputUp value={distanceInputUp} onChange={distanceTextUp}></InputUp>
                <ConvertBtn onClick={distanceAction}><RiArrowUpDownFill Icon size={25}/> <BiRuler Icon size={25}/></ConvertBtn>
                <InputDown  value={distanceInputDown} onChange={distanceTextDown}></InputDown>
                <SignDownDistance>In</SignDownDistance>
            </DistanceBox> : null}
        </div>            
    )
}

export default Converter