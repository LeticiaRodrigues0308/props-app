import { useState } from "react";


export default function Counter() {
    const [qtd, setQtd] = useState(0);

    function count(){
        setQtd(qtd + 1);
    }

    function reset() {
        setQtd(0);
    }


    return (
        <div className="container">
            <h1>Contador</h1>
            <div>{qtd}</div>
            <button onClick={count}>Contar</button>
            <CountSon onReset={reset} qtd={qtd}/>
        </div>
    )
}


function CountSon(props){
    function reset(){
        props.onReset();
    }

    return(
        <div className="container">
            <button onClick={reset}>Resetar</button>
            <div>{props.qtd}</div>
        </div>
    )
}