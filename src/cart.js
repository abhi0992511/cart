import { directive } from '@babel/types';
import React from 'react';
import CartItem from './cartItem';
class Cart extends React.Component {

    constructor() {
        super()
        this.state = {
            products: [
                {
                    price: 999,
                    title: 'phone',
                    qty: 1,
                    img: '',
                    id: 1
                },
                {
                    price: 99,
                    title: 'watch',
                    qty: 10,
                    img: '',
                    id: 2
                },
                {
                    price: 995,
                    title: 'tab',
                    qty: 12,
                    img: '', id: 3
                },
                {
                    price: 25252,
                    title: 'tooth',
                    qty: 13, img: '', id: 4
                }
            ]
        }
        //this.increasequantity=this.increasequantity.bind(this);
    }
    handleincrease = (product) => {

        console.log('hey inc', product);

        const { products } = this.state;
        const index = products.indexOf(product);
        products[index].qty += 1;
        this.setState({
            products: products
        });





    }
    handledecrease =(product)=>{
        const {products}=this.state;
        const index=products.indexOf(product);
        if(products[index].qty===0)
        {
            return;
        }
        products[index].qty-=1;
        this.setState({
            products:products
        })


    }
    handledelete =(id)=>{
        const {products}=this.state;
    const item=products.filter((item)=>item.id!==id)
    this.setState({
        products:item
    })

    }
    render() {

        // handledecrease =( product)=>{

        // }
        //const arr=[1,2,3,4,5];
        const { products } = this.state;
        return (
            <div className="cart-name">

                {
                    products.map((product) => {
                        return <CartItem product={product} key={product.id}
                            onIncrese={this.handleincrease}
                            onDecrease={this.handledecrease}
                            onDelete={this.handledelete} />


                    })
                }

            </div>
        )
    }


}



export default Cart;