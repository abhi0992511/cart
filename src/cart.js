import { directive } from '@babel/types';
import React from 'react';
import CartItem from './cartItem';
class Cart extends React.Component {
    constructor() {
        super()
        this.state = {
           products:[
               {
                price: 999,
                tiltle: 'phone',
                qty:1
               },
               {
                price: 99,
                tiltle: 'watch',
                qty:10
               },
               {
                price: 995,
                tiltle: 'tab',
                qty:12
               },
               {
                price: 25252,
                tiltle: 'tooth',
                qty:13
               }
           ]
        }
        //this.increasequantity=this.increasequantity.bind(this);
    }
    render(){
        //const arr=[1,2,3,4,5];
        const {products}=this.state;
        return(
            <div className="cart-name"><CartItem/>
           
                {
                    products.map((product)=>{
                        return
                            <CartItem product={product}/ >

                        
                    })
                }
            {/* <CartItem/>
            <CartItem/>
            <CartItem/> */}
            </div>
        )
    }


}



export default Cart;