import { directive } from '@babel/types';
import React from 'react';
import CartItem from './cartItem';
class Cart extends React.Component {
    render(){
        //const arr=[1,2,3,4,5];
        return(
            <div className="cart-name"><CartItem/>
            <CartItem/>
            <CartItem/>
            <CartItem/>
            <CartItem/>
            </div>
        )
    }


}



export default Cart;