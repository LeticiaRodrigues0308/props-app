import { useState } from "react";
import { ContainerCartItem, RemoveIcon } from "./styled";
import Counter from "../counter"; 


export default function CartItem(props) {
    const [products, setProducts] = useState(props.info);

    function changeQtd(qtd) {
        setProducts({...products, qtd});

        props.onUpdate(products.id, qtd)
    }

    function remove() {
        props.onRemove(products.id);
    }

    return (
        <ContainerCartItem>

            <div>
                <img className="cape" src={products.image} alt="" />
                <Counter onChange={changeQtd} value={products.qtd}/>
            </div>

            <div className="title">
                {products.title}
            </div>

            <div className="price">
                <span>Preço unitário</span>
                {products.price}
            </div>

            <div className="qtd">
                <span>Qtd</span>
                {products.qtd}
            </div>

            <div className="remove"> <RemoveIcon onClick={remove}/> </div>

        </ContainerCartItem>

    )
}