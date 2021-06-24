import { directive } from '@babel/types';
import React from 'react';
class CartItem extends React.Component {

   
    increasequantity =() => {
        // this.state.qty+=1;
       // console.log('this.state',this.state);
       this.setState({
            qty:this.state.qty+1
        });
       // this.testing();
    }
    decreasequantity=()=>{
        const {qty}=this.state;
        if(qty===0)
        {
            return;
        }
        this.setState((prevState)=>{
            return{
                qty:prevState.qty-1
            }
        });
    }
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
    
    render() {
        const { price, qty, title } = this.state.product;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} />
                </div>
                <div className="right-block">
                    <div style={{ fontSize: 25, fontFamily: 'serif' }}>{title}</div>
                    <div style={{ color: 'red', fontFamily: 'sans-serif' }}>{price}</div>
                    <div>qty:{qty}</div>
                    <div className="cart-item-actions">
                        <img alt="increase " className="action-icons" src="https://t4.ftcdn.net/jpg/01/07/62/07/240_F_107620769_UwNVSoXnKS4VNcOKoZjPohlEPn83oE38.jpg" onClick={this.increasequantity} />
                        <img alt="decrese " className="action-icons" src="https://t4.ftcdn.net/jpg/02/78/84/57/240_F_278845758_9xl3srVgd8p4jquxgxugGaHV1e5EOlLO.jpg" onClick={this.decreasequantity}/>
                        <img alt="delete " className="action-icons" src="https://t3.ftcdn.net/jpg/02/58/95/14/240_F_258951445_Md7JDFw3Qj4LPTorWUYdImTzS49fSnOf.jpg" />
                    </div>
                </div>
            </div>

        );
    }


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