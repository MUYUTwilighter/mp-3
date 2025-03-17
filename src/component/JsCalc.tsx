import {useState} from 'react';

function sum(a: number, b: number) {
    return a + b;
}

function subtract(a: number, b: number) {
    return a - b;
}

function multiply(a: number, b: number) {
    return a * b;
}

function divide(a: number, b: number) {
    return b === 0 ? "Cannot divide by 0" : a / b;
}

function power(a: number, b: number) {
    if (b < 0) return "Cannot calculate m^(-n)";
    if (b === 0) return 1;
    let r = 1;
    for (let i = 0; i < b; i++) {
        r *= a;
    }
    return r;
}

export default function JsCalc() {
    const [inputA, setInputA] = useState("");
    const [inputB, setInputB] = useState("");
    const [result, setResult] = useState("result...");

    function clear() {
        setInputA("");
        setInputB("");
        setResult("result...");
    }

    function calc(operation: { (a: number, b: number): number | string }) {
        const a = Number(inputA);
        const b = Number(inputB);
        if (inputA.length === 0 || inputB.length === 0 || isNaN(a) || isNaN(b)) {
            setResult("Invalid input");
            return;
        }
        const result: number | string = operation(a, b);
        setResult(result.toString());
    }

    return <table>
        <tbody>
        <tr>
            <td>
                <label htmlFor="input-a"></label>
                <input type="text" id="input-b" value={inputA} placeholder="First number"
                       onChange={event => setInputA(event.target.value)}/>
            </td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>|-</td>
            <td>
                <button onClick={() => calc(sum)} id="add-button">+</button>
                <button onClick={() => calc(subtract)} id="subtract-button">-</button>
                <button onClick={() => calc(multiply)} id="multiply-button">*</button>
                <button onClick={() => calc(divide)} id="divide-button">/</button>
                <button onClick={() => calc(power)} id="power-button">^</button>
                <button onClick={() => clear()} id="clear-button">C</button>
            </td>
            <td>=</td>
            <td>
                <p id="result">{result}</p>
            </td>
        </tr>
        <tr>
            <td>
                <label htmlFor="input-b"></label>
                <input type="text" id="input-b" value={inputB} placeholder="Second number"
                       onChange={event => setInputB(event.target.value)}/>
            </td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        </tbody>
    </table>
}