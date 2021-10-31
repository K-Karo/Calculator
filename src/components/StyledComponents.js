import styled from "styled-components"

export const MainMenuBtn = styled.button`
 position: absolute;
 top: 2px;
 height: 46px;
 right: 2%;
 width: 10%;
 border: none;
 border-radius: 10px;
 color: aliceblue;
 background-color: DarkSlateBlue;
 &:hover {
  background: white;
  border: 3px solid DarkSlateBlue;
  color: DarkSlateBlue;
}
&:active {     
  background: white;
  border: 3px solid LightSteelBlue;
  color: LightSteelBlue;    
}
@media screen and (max-width: 499px) {
  right: 1%;
  width: 15%;
}
`
export const TodoGitBtn = styled.button`
 position: absolute;
 top: 2px;
 height: 46px;
 left: 2%;
 width: 10%;
 border: none;
 border-radius: 10px;
 color: aliceblue;
 background-color: DarkSlateBlue;
 &:hover {
  background: white;
  border: 3px solid DarkSlateBlue;
  color: DarkSlateBlue;
}
&:active {     
  background: white;
  border: 3px solid LightSteelBlue;
  color: LightSteelBlue;    
}
@media screen and (max-width: 499px) {
  left: 1%;
  width: 15%;
}
`
export const ContainerCalc = styled.div`
    position: absolute;
    height: 500px;
    width: 30%;
    top: 100px;
    left: 35%;    
    background-color: gray;
    @media screen and (max-width: 1000px) {
      left: 20%;
      width: 60%;
    }
    @media screen and (max-width: 499px) {
      left: 3%;
      width: 94%;
    }
`

export const InputMain = styled.input`
    width: 100%;
    position: relative;
    font-size: 30px;
    top: 0px;
    height: 100px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-bottom: none;
    background-color: HoneyDew;
    text-align: right;  
    color: SlateGrey;  
    padding: 10px;
    outline: none;
`

  export const InputSecondary = styled.input`
    width: 100%;
    position: relative;
    font-size: 30px;
    top: 0px;
    height: 50px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-top: none;
    background-color: HoneyDew;
    text-align: right;  
    color: MediumSlateBlue;  
    padding: 10px;
    outline: none;
`

  export const Btn = styled.button`
    position: relative;
    top: 0px;
    height: 70px;
    display: grid;
    color: black;
    cursor: pointer;
    font-size: 25px;
    background-color: GhostWhite;
    align-items: center;
    border: 1px solid lightgray;
    &:hover {
      background: AliceBlue;
    }
    &:active {     
      background-color: lightgray;    
    }
  `

  export const Wrapper = styled.div`
    display: grid;
    height: 70px;
    width: 100%;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(6, 1fr);
    gap: 0px;
  `

  export const Number = styled(Btn)``

  export const BtnAc = styled(Btn)`
    color: Tomato;
  `

  export const BtnOps = styled(Btn)`
    color: MediumSlateBlue;
  `

  export const BtnEqual = styled(Btn)`
    color: white;
    background-color: MediumSlateBlue;
    &:hover {
      background: lightblue;
    }
    &:active {     
      background-color: lightgray;    
    }
  `

  export const Mes = styled(Btn)`
    display: inline-block;
    color: DarkOrange;
    &:hover {
      background: white;
      color: DarkSlateBlue;
    }
    &:active {     
      background: white;
      color: LightSteelBlue;    
    }
  `

  export const Box = styled.div`
    position: absolute;
    border: 1px solid #ccc;
    height: 500px;
    width: 30%;
    top: 100px;
    left: 35%;    
    background-color: HoneyDew;
    @media screen and (max-width: 1000px) {
      left: 20%;
      width: 60%;
    }
    @media screen and (max-width: 499px) {
      left: 3%;
      width: 94%;
    }
  `

  export const CalcBtn = styled.button`
    position: absolute;
    height: 50px;
    top: 430px;
    width: 20%;
    left: 40%;
    border: 3px solid DarkOrange;
    border-radius: 20px;
    background-color: white;
    color: DarkOrange;
    &:hover {
      background: white;
      border: 3px solid DarkSlateBlue;
      color: DarkSlateBlue;
    }
    &:active {     
      background: white;
      border: 3px solid LightSteelBlue;
      color: LightSteelBlue;    
    }
    @media screen and (max-width: 400px) {
      left: 35%;
      width: 30%;
    }
  `
  export const DistanceBtn = styled.button`
    position: absolute;
    height: 50px;
    top: 30px;
    width: 20%;
    left: 10%;
    border: 3px solid Silver;
    border-radius: 20px;
    background-color: white;
    color: Silver;
    &:hover {
      background: white;
      border: 3px solid DarkSlateBlue;
      color: DarkSlateBlue;
    }
    &:focus {     
      background: white;
      border: 3px solid DarkSlateBlue;
      color: DarkSlateBlue;    
    }
    @media screen and (max-width: 400px) {
      left: 7%;
      width: 24%;
    }
  `
  export const WeightBtn = styled.button`
    position: absolute;
    height: 50px;
    top: 30px;
    width: 20%;
    left: 40%;
    border: 3px solid Silver;
    border-radius: 20px;
    background-color: white;
    color: Silver;
    &:hover {
      background: white;
      border: 3px solid DarkSlateBlue;
      color: DarkSlateBlue;
    }
    &:focus {     
      background: white;
      border: 3px solid DarkSlateBlue;
      color: DarkSlateBlue;    
    }
    @media screen and (max-width: 400px) {
      left: 38%;
      width: 24%;
    }
  `

  export const TempBtn = styled.button`
    position: absolute;
    height: 50px;
    top: 30px;
    width: 20%;
    right: 10%;
    border: 3px solid Silver;
    border-radius: 20px;
    background-color: white;
    color: Silver;
    &:hover {
      background: white;
      border: 3px solid DarkSlateBlue;
      color: DarkSlateBlue;
    }
    &:focus {     
      background: white;
      border: 3px solid DarkSlateBlue;
      color: DarkSlateBlue;    
    }
    @media screen and (max-width: 400px) {
      right: 7%;
      width: 24%;
    }
  `

  export const DistanceBox = styled.div`
  position: absolute;
  height: 200px;
  width: 25%;
  top: 280px;
  left: 37.5%;    
  background-color: HoneyDew;
  border: none;
  @media screen and (max-width: 1000px) {
    left: 25%;
    width: 50%;
  }
  @media screen and (max-width: 499px) {
    left: 5%;
    width: 90%;
  }
`
  export const ConvertBtn = styled.button`
    position: absolute; 
    top: 40%;
    left: 30%;
    width: 40%;
    height: 20%;
    border: 3px solid Silver;
    border-radius: 15px;
    background-color: white;
    color: Silver;
    &:hover {
      background: white;
      border: 3px solid DarkSlateBlue;
      color: DarkSlateBlue;
    }
    &:active {     
      background: white;
      border: 3px solid LightSteelBlue;
      color: LightSteelBlue;    
    }
  ` 

  export const WeightBox = styled.div`
    position: absolute;
    height: 200px;
    width: 25%;
    top: 280px;
    left: 37.5%;    
    background-color: HoneyDew;
    border: none;
    @media screen and (max-width: 1000px) {
      left: 25%;
      width: 50%;
    }
    @media screen and (max-width: 499px) {
      left: 5%;
      width: 90%;
    }
`
  export const TempBox = styled.div`
  position: absolute;
  height: 200px;
  width: 25%;
  top: 280px;
  left: 37.5%;    
  background-color: HoneyDew;
  border: none;
  @media screen and (max-width: 1000px) {
    left: 25%;
    width: 50%;
  }
  @media screen and (max-width: 499px) {
    left: 5%;
    width: 90%;
  }
`
  export const InputUp = styled.input`
    position: absolute;
    height: 50px;
    width: 80%;
    top: 0%;
    left: 0%;   
    text-align: center;
    font-size: 25px; 
    background-color: white;
    border: 1px solid LightSteelBlue;
    color: DarkSlateBlue;
    outline: none;
    border-radius: 20px 0px 0px 20px;
`
export const SignUpTemp = styled.div`
    position: absolute;
    height: 50px;
    width: 20%;
    top: 0%;
    right: 0%;   
    line-height: 60px; 
    background-color: DarkSlateBlue;
    border: 2px solid LightSteelBlue;
    color: white;
    border-radius: 0px 20px 20px 0px;
`
export const SignUpWeight = styled.div`
    position: absolute;
    height: 50px;
    width: 20%;
    top: 0%;
    right: 0%;   
    line-height: 45px; 
    font-size: 20px;
    background-color: DarkSlateBlue;
    border: 2px solid LightSteelBlue;
    color: white;
    border-radius: 0px 20px 20px 0px;
`
export const SignUpDistance = styled.div`
    position: absolute;
    height: 50px;
    width: 20%;
    top: 0%;
    right: 0%;   
    line-height: 45px; 
    font-size: 20px;
    background-color: DarkSlateBlue;
    border: 2px solid LightSteelBlue;
    color: white;
    border-radius: 0px 20px 20px 0px;
`
  export const InputDown = styled.input`
    position: absolute;
    height: 50px;
    width: 80%;
    bottom: 0%;
    left: 0%;    
    text-align: center;
    font-size: 25px; 
    background-color: white;
    border: 1px solid LightSteelBlue;
    color: DarkSlateBlue;
    outline: none;
    border-radius: 20px 0px 0px 20px;
`
export const SignDownTemp = styled.div`
    position: absolute;
    height: 50px;
    width: 20%;
    bottom: 0%;
    right: 0%;    
    line-height: 60px;
    background-color: DarkSlateBlue;
    border: 2px solid LightSteelBlue;
    color: white;
    border-radius: 0px 20px 20px 0px;
`
export const SignDownWeight = styled.div`
    position: absolute;
    height: 50px;
    width: 20%;
    bottom: 0%;
    right: 0%;    
    line-height: 45px;
    font-size: 20px;
    background-color: DarkSlateBlue;
    border: 2px solid LightSteelBlue;
    color: white;
    border-radius: 0px 20px 20px 0px;
`
export const SignDownDistance = styled.div`
    position: absolute;
    height: 50px;
    width: 20%;
    bottom: 0%;
    right: 0%;    
    line-height: 45px;
    font-size: 20px;
    background-color: DarkSlateBlue;
    border: 2px solid LightSteelBlue;
    color: white;
    border-radius: 0px 20px 20px 0px;
`
export const H1 = styled.h1`
    position: relative;
    text-align: center;
    top: 40px;
`