import { useState } from "react";
import { ContainerHome } from "./styled";
import Product from "../product";


export default function Home(){
    const [produtos, setProdutos] = useState([]);

    function list(){
        const l = [
                {
                    id: 10001,
                    image: "https://http2.mlstatic.com/D_NQ_NP_755842-MLB47599396706_092021-O.webp",
                    title: "PC Gamer linha premium",
                    price: "R$ 19.654,00",
                    description: "Computador T-Home AMD Cardinal 4700S, 16GB, 240GB, RX 550 2GB LVL 1",
                    specifications: "Esse produto é de ótima qualidade você não vai se arrepender jamais na sua vidinha!!"
                  },
                  {
                    id: 10002,
                    image: "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/m/c/mcr-fnr-pp0131.jpg",
                    title: "Combo Gamer",
                    price: "R$ 1.350,00",
                    description: "T-Dagger Legion 4 em 1, Teclado, Mouse, Headset e Mousepad, T-TGS003 PT",
                    specifications: "Esse produto é de ótima qualidade você não vai se arrepender jamais na sua vidinha!!"
                  },
                  {
                    id: 10003,
                    image: "https://images-americanas.b2w.io/produtos/1846627018/imagens/teclado-gamer-de-uma-mao-hxsj-j50-com-led-mouse-gamer-iluminado-com-fio/1846627018_1_large.jpg",
                    title: "Cadeira Gamer RGB",
                    price: "R$ 2.120,00",
                    description: "Elements Veda Lux, RGB, Reclinável",
                    specifications: "Esse produto é de ótima qualidade você não vai se arrepender jamais na sua vidinha!!" 
                  }
        ]
        setProdutos(l)
        console.log(l)
    }
 

    return(
        <ContainerHome>

            <h1>Sejam bem-vindos!!</h1>

            <button onClick={list}>Listar</button>

            <div className="products">
                {produtos.map(item => 
                    <Product info={item}/>
                )}
            </div>

        </ContainerHome>
    )
}