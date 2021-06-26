//import { directive } from '@babel/types';
import React from 'react';
import CartItem from './cartItem';
const Cart =(props)=> {

    
    

        // handledecrease =( product)=>{

        // }
        //const arr=[1,2,3,4,5];
        const { products } = props;
        return (
            <div className="cart-name">

                {
                    products.map((product) => {
                        return <CartItem product={product} key={product.id}
                            onIncrese={props.onIncrese}
                            onDecrease={props.onDecrease}
                            onDelete={props.onDelete} />


                    })
                }

            </div>
        )
    }






export default Cart;