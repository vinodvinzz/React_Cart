import React,{Component} from 'react';
import {render} from 'react-dom';
import './index.css';
import Cart from'./cart';
 
class Index extends Component{
    constructor(){
        super();
        this.state ={
            name:'ShoppingCart'
        };
    }
    
    render(){
        return (
            <div>
                <Cart/>
            </div>
        );
    }
}

render(<Index/>,document.getElementById('root'));