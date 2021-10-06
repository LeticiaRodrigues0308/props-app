import { useState, useEffect } from "react";
import { ContainerHome } from "./styled";
import Product from "../product";
import Cookie from 'js-cookie'


export default function Home(){
    const [products, setProducts] = useState([]);

    useEffect(uploadHome, []);

    function uploadHome() {
        let home = Cookie.get('home');
        home = home !==  undefined
                ? JSON.parse(home)
                : [];
        
        setProducts(home);
    }

    function uploadHome(){
        const l = [
                {
                    id: 10001,
                    image: "https://images-americanas.b2w.io/produtos/01/00/img/1871094/7/1871094786_1SZ.jpg",
                    title: "PC Gamer linha premium",
                    price: "R$ 19.654,00",
                    description: "Computador T-Home AMD Cardinal 4700S, 16GB, 240GB, RX 550 2GB LVL 1",
                    specifications: "Esse produto é de ótima qualidade você não vai se arrepender jamais na sua vidinha!!"
                  },
                  {
                    id: 10002,
                    image: "https://images-americanas.b2w.io/produtos/3162943378/imagens/combo-teclado-mouse-gamer-led-usb-t400-dpi-jogos-pc-notebook/3162943378_1_xlarge.jpg",
                    title: "Combo Gamer",
                    price: "R$ 1.350,00",
                    description: "T-Dagger Legion 4 em 1, Teclado, Mouse, Headset e Mousepad, T-TGS003 PT",
                    specifications: "Esse produto é de ótima qualidade você não vai se arrepender jamais na sua vidinha!!"
                  },
                  {
                    id: 10003,
                    image: "https://ecadeiraslegacy.vteximg.com.br/arquivos/ids/165302/cadeira-gamer-tanker-em-pvc-e-tecido-sintetico-giratoria-reclinavel-roxa-e-preta-com-braco-a-default-EC000019937.jpg?v=637449615186400000",
                    title: "Cadeira Gamer RGB",
                    price: "R$ 2.120,00",
                    description: "Elements Veda Lux, RGB, Reclinável",
                    specifications: "Esse produto é de ótima qualidade você não vai se arrepender jamais na sua vidinha!!" 
                  }
        ]
        setProducts(l);
    }
 

    return(
        <ContainerHome>

            <h1>Sejam bem-vindos!!</h1>

            <div className="products">
                {products.map(item => 
                    <Product info={item}/>
                )}
            </div>

        </ContainerHome>
    )
}