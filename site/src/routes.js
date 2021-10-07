import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./reactjs/home";
import CartProduct from './reactjs/cartProduct';
import DetailProduct from "./reactjs/detailProduct";
import Counter from "./reactjs/counter";


export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={Home}/>
                <Route path="/detail" component={DetailProduct}/>
                <Route path="/cart" component={CartProduct}/>
                <Route path="/counter" component={Counter}/>
            </Switch>
        </BrowserRouter>
    )
}