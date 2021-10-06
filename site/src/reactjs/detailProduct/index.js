import { ContainerDetail } from "./styled";
import { Link, useHistory} from "react-router-dom";
import { useState } from "react";
import Cookie from 'js-cookie'


export default function DetailProduct(props){
    const [products, setProducts] = useState(props.location.state);
    const navigation = useHistory();

    function buy(){
        let cart = Cookie.get('cart');
        cart = cart !== undefined
                ? JSON.parse(cart)
                : [];


        if (cart.some(item => item.id === products.id) === false)
            cart.push({...products, qtd: 1});

        Cookie.set('cart', JSON.stringify(cart));

        navigation.push('/cart')
    }

    return(
        <ContainerDetail>

            <div>
                <Link to="/">Voltar</Link>
                <h1>Detalhes do Produto</h1>

                <div><img src={products.image} alt=""/></div>
                <div><h1>{products.title}</h1></div>
                <div><h3>{products.price}</h3></div>
            </div>

            <div>
                <h2>Descrição</h2>
                <div>{products.description}</div>

                <h2>Especificações</h2>
                <div>{products.specifications}</div>

                <div> <button onClick={buy}>Comprar</button></div>

            </div>

        </ContainerDetail>
    )
}