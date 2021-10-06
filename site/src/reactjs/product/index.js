import { ContainerProduct } from "./styled";
import { Link } from "react-router-dom";


export default function Product(props) {
    return (
        <ContainerProduct>

            <img className="cape" src={props.info.image} alt=""/>
            <div className="title">{props.info.title}</div>
            <div className="price">{props.info.price}</div>

            <Link to={{
                pathname: '/detail',
                state: props.info
            }}>
            
            <button>Ver Detalhes</button>
            </Link>
        </ContainerProduct>
    )
}