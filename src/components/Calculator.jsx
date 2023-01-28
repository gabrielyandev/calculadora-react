import { Container } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "./Calculator.css";
import { useState } from "react";

export default function Calculator() {
    const[num,setNum]=useState(0);
    const[oldNum,setOldNum]=useState(0);
    const[operator,setOperator]=useState();

    function inputNum(e) {
        var input = e.target.value;
        if (num === 0) {
            setNum(input);
        } else {
            setNum(num + input);
        }
    }

    function clear() {
        setNum(0);
    }

    function porcent() {
        setNum(num / 100);
    }

    function changeSign() {
        if (num>0) {
            setNum(-num)
        }else{
            setNum(Math.abs(num));
        }
    }

    function operatorHandler(e) {
        var operatorInput = e.target.value;
        setOperator(operatorInput);
        setOldNum(num);
        setNum(0);
    }

    function calculate() {
        if (operator === "+") {
            setNum(parseInt(num) + parseInt(oldNum));
        }
        if (operator === "-") {
            setNum(parseInt(oldNum) - parseInt(num));
        }
        if (operator === "*") {
            setNum(parseInt(num) * parseInt(oldNum));
        }
        if (operator === "/") {
            setNum(parseInt(oldNum) / parseInt(num));
        }
    }



  return (
    <div>
      <Container maxWidth="xs">
        <div className="wrapper">
            <div className="display">
                <h1 className="result">{num}</h1>
            </div>
          <button onClick={clear}>AC</button>
          <button onClick={changeSign}>+/-</button>
          <button onClick={porcent}>%</button>
          <button className="orange" onClick={operatorHandler} value={"/"}>/</button>
          <button className="gray" onClick={inputNum} value={7}>7</button>
          <button className="gray" onClick={inputNum} value={8}>8</button>
          <button className="gray" onClick={inputNum} value={9}>9</button>
          <button className="orange" onClick={operatorHandler} value={"*"}>X</button>
          <button className="gray" onClick={inputNum} value={4}>4</button>
          <button className="gray" onClick={inputNum} value={5}>5</button>
          <button className="gray" onClick={inputNum} value={6}>6</button>
          <button className="orange" onClick={operatorHandler} value={"-"}>-</button>
          <button className="gray" onClick={inputNum} value={1}>1</button>
          <button className="gray" onClick={inputNum} value={2}>2</button>
          <button className="gray" onClick={inputNum} value={3}>3</button>
          <button className="orange" onClick={operatorHandler} value={"+"}>+</button>
          <button className="gray zero" onClick={inputNum} value={0}>0</button>
          <button className="gray" onClick={inputNum} value={"."}>.</button>
          <button className="orange" onClick={calculate}>=</button>
        </div>
      </Container>
    </div>
  );
}
