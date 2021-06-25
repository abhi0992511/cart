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
                title: 'phone',
                qty:1,
                img:'',
                id:1
               },
               {
                price: 99,
                title: 'watch',
                qty:10,
                img:'',
                id:2
               },
               {
                price: 995,
                title: 'tab',
                qty:12,
                img:'',id:3
               },
               {
                price: 25252,
                title: 'tooth',
                qty:13, img:'', id:4
               }
           ]
        }
        //this.increasequantity=this.increasequantity.bind(this);
    }
    render(){
        //const arr=[1,2,3,4,5];
        const {products}=this.state;
        return(
            <div className="cart-name">
           
                {
                    products.map((product)=>{
                        return <CartItem product={product} key={product.id}/>

                        
                    })
                }
            
            </div>
        )
    }


}



export default Cart;