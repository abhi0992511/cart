import { directive } from '@babel/types';
import React from 'react';
import CartItem from './cartItem';
class Cart extends React.Component {
    render(){
        return(
            <div className="cart-name"><CartItem/>
            <CartItem/>
            <CartItem/>
            <CartItem/>
            <CartItem/></div>
        )
    }


}



export default Cart;