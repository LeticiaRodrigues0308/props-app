import { ContainerCart } from "./styled";
import { Link } from "react-router-dom";
import Cookie from 'js-cookie';
import { useEffect, useState } from "react";
import CartItem from "./cartItem";


export default function Cart(){
    const [products, setProducts] = useState([]);

    useEffect(uploadCart, []);

    function uploadCart() {
        let cart = Cookie.get('cart');
        cart = cart !==  undefined
                ? JSON.parse(cart)
                : [];
        
        setProducts(cart);
    }

    function removePoducts(id) {
        let cart = products.filter(item => item.id !== id);

        Cookie.set('cart', JSON.stringify(cart));
        setProducts([...cart]);
    }

    function changeProduct(id, qtd) {
        let changed = products.filter(item => item.id === id)[0];
        changed.qtd = qtd;

        Cookie.set('cart', JSON.stringify(products));
    }

    return(
        <ContainerCart>
            <h1>Carrinho</h1>

            <Link to="/">Voltar</Link>

            <div className="itens">
                {products.map(item =>
                    <CartItem key={item.id}
                        info={item}
                        onUpdate={changeProduct}
                        onRemove={removePoducts}>
                    </CartItem>
                )}
            </div>
        </ContainerCart>
    )  
}