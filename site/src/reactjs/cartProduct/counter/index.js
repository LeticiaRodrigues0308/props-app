import { useState } from "react";
import { ContainerCounter } from "./styled";


export default function Counter(props){
    const [qtd, setQtd] = useState(props.value);

    function add() {
        if (qtd >= 10)
            return;
        setQtd(qtd+1)
    }

    function remove() {
        if (qtd === 0)
            return;
        setQtd(qtd-1)
    }

    return(
        <ContainerCounter>
            <div className="minus" onClick={remove}> - </div>

            <div className="plus" onClick={add}> + </div>
        </ContainerCounter>
    )
}