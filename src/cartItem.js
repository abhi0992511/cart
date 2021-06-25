//import { directive } from '@babel/types';
import React from 'react';
const CartItem = (props) => {


    // increasequantity = () => {
    //     // this.state.qty+=1;
    //     // console.log('this.state',this.state);
    //     this.setState({
    //         qty: this.state.qty + 1
    //     });
    //     // this.testing();
    // }
    // decreasequantity = () => {
    //     const { qty } = this.state;
    //     if (qty === 0) {
    //         return;
    //     }
    //     this.setState((prevState) => {
    //         return {
    //             qty: prevState.qty - 1
    //         }
    //     });
    // }
    // testing()
    // {
    //     const promise=new Promise((resolve,reject)=>{
    //         setTimeout(()=>{
    //             resolve('done');
    //         },5000)
    //     });
    //     promise.then(()=>{
    //         this.setState({
    //             qty:this.state.qty+100
    //         });
    //         this.setState({
    //             qty:this.state.qty+100
    //         });
    //         this.setState({
    //             qty:this.state.qty+100
    //         });
    //     })
    // }


    //console.log('this.props', this.props);
    //const { price, qty, title } = this.props.product;
    const { product, onDecrease, onIncrese, onDelete } = props;
    return (
        <div className="cart-item">
            <div className="left-block">
                <img style={styles.image} />
            </div>
            <div className="right-block">
                <div style={{ fontSize: 25, fontFamily: 'serif' }}>{props.product.title}</div>
                <div style={{ color: 'red', fontFamily: 'sans-serif' }}>{props.product.price}</div>
                <div>qty:{props.product.qty}</div>
                <div className="cart-item-actions">
                    <img alt="increase " className="action-icons" src="https://t4.ftcdn.net/jpg/01/07/62/07/240_F_107620769_UwNVSoXnKS4VNcOKoZjPohlEPn83oE38.jpg" onClick={() => onIncrese(product)} />
                    <img alt="decrese " className="action-icons" src="https://t4.ftcdn.net/jpg/02/78/84/57/240_F_278845758_9xl3srVgd8p4jquxgxugGaHV1e5EOlLO.jpg" onClick={() => onDecrease(product)} />
                    <img alt="delete " className="action-icons" src="https://t3.ftcdn.net/jpg/02/58/95/14/240_F_258951445_Md7JDFw3Qj4LPTorWUYdImTzS49fSnOf.jpg" onClick={() => onDelete(product.id)} />
                </div>
            </div>
        </div>

    );
}



const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        backgroundColor: 'red'
    }
}

export default CartItem;