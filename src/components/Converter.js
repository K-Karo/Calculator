import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalculator, faRuler, faWeightHanging, faThermometerHalf } from '@fortawesome/free-solid-svg-icons'
import {Box, CalcBtn, WeightBtn, DistanceBtn, TempBtn} from "./StyledComponents"
import Distance from "./Distance"
import Weight from "./Weight"
import Temp from "./Temp"

const Converter = ({measure, setMeasure, distance, setDistance, weight, 
                   setWeight, temp, setTemp, distanceInputUp, setDistanceInputUp,
                   distanceInputDown, setDistanceInputDown, weightInputUp, setWeightInputUp,
                   weightInputDown, setWeightInputDown, tempInputUp, setTempInputUp,
                   tempInputDown, setTempInputDown}) => {

    const CalcHandler = () => {
        setMeasure(prev => !prev);
        setDistance(false);
        setWeight(false);
        setTemp(false);
    };

    const distanceHandler = () => {
        setDistance(prev => !prev);
        setWeight(false);
        setTemp(false);
        setDistanceInputUp("");
        setDistanceInputDown("");
    }

    const weightHandler = () => {
        setWeight(prev => !prev);
        setDistance(false);
        setTemp(false);
        setWeightInputUp("");
        setWeightInputDown("");
    }

    const tempHandler = () => {
        setTemp(prev => !prev);
        setDistance(false);
        setWeight(false);
        setTempInputUp("");
        setTempInputDown("");
    }

    return(
        <div>
            {measure ? <Box> 
                            <CalcBtn onClick={CalcHandler}><FontAwesomeIcon icon={faCalculator} size='2x'></FontAwesomeIcon></CalcBtn>
                            <DistanceBtn onClick={distanceHandler}> <FontAwesomeIcon icon={faRuler} size='2x'></FontAwesomeIcon> </DistanceBtn>
                            <WeightBtn onClick={weightHandler}> <FontAwesomeIcon icon={faWeightHanging} size='2x'> </FontAwesomeIcon> </WeightBtn>
                            <TempBtn onClick={tempHandler}> <FontAwesomeIcon icon={faThermometerHalf} size='2x'> </FontAwesomeIcon> </TempBtn>
                       </Box> : null}
                       <Distance distance={distance} setDistance={setDistance} 
                       distanceInputUp={distanceInputUp} setDistanceInputUp={setDistanceInputUp}
                       distanceInputDown={distanceInputDown} setDistanceInputDown={setDistanceInputDown}></Distance>
                       <Weight weight={weight} setWeight={setWeight} 
                       weightInputUp={weightInputUp} setWeightInputUp={setWeightInputUp}
                       weightInputDown={weightInputDown} setWeightInputDown={setWeightInputDown}></Weight>
                       <Temp temp={temp} setTemp={setTemp} 
                       tempInputUp={tempInputUp} setTempInputUp={setTempInputUp}
                       tempInputDown={tempInputDown} setTempInputDown={setTempInputDown}></Temp>
        </div>            
    )
}

export default Converter