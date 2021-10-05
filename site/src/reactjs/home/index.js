import { useState } from "react";
import { ContainerHome } from "./styled";
import Product from "../product";


export default function Home(){
    const [produtos, setProdutos] = useState([]);

    function list(){
        const l = [
                {
                    id: 10001,
                    image: "https://img.terabyteshop.com.br/produto/g/gabinete-gamer-gamdias-argus-e4-elite-rgb-mid-tower-vidro-temperado-black-sem-fonte-com-1-fan_121133.png",
                    title: "PC Gamer linha premium",
                    price: "R$ 19.654,00",
                    description: "Computador T-Home AMD Cardinal 4700S, 16GB, 240GB, RX 550 2GB LVL 1",
                    specifications: "Esse produto é de ótima qualidade você não vai se arrepender jamais na sua vidinha!!"
                  },
                  {
                    id: 10002,
                    image: "https://img.terabyteshop.com.br/produto/g/combo-gamer-t-dagger-legion-4-em-1-teclado-mouse-headset-e-mousepad-t-tgs003_117551.png",
                    title: "Combo Gamer",
                    price: "R$ 1.350,00",
                    description: "T-Dagger Legion 4 em 1, Teclado, Mouse, Headset e Mousepad, T-TGS003 PT",
                    specifications: "Esse produto é de ótima qualidade você não vai se arrepender jamais na sua vidinha!!"
                  },
                  {
                    id: 10003,
                    image: "https://img.terabyteshop.com.br/produto/g/cadeira-gamer-elements-veda-lux-rgb-reclinavel_119306.jpg",
                    title: "Cadeira Gamer RGB",
                    price: "R$ 2.120,00",
                    description: "Elements Veda Lux, RGB, Reclinável",
                    specifications: "Esse produto é de ótima qualidade você não vai se arrepender jamais na sua vidinha!!" 
                  }
        ]
        setProdutos(l)
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