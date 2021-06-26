
import './App.css';
import { reduce } from 'async';
import Cart from './cart';
import Navbar from './navbar';
import react from 'react';
import { render } from '@testing-library/react';
import React from 'react';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      products: [
        {
          price: 999,
          title: 'phone',
          qty: 1,
          img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9iaWxlJTIwcGhvbmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          id: 1
        },
        {
          price: 99,
          title: 'watch',
          qty: 10,
          img: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2F0Y2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          id: 2
        },
        {
          price: 995,
          title: 'tab',
          qty: 12,
          img: 'https://images.unsplash.com/photo-1606166325683-e6deb697d301?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dGFifGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', id: 3
        },
        {
          price: 25252,
          title: 'laptop',
          qty: 13, img: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGxhcHRvcHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', id: 4
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
  handledecrease = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    if (products[index].qty === 0) {
      return;
    }
    products[index].qty -= 1;
    this.setState({
      products: products
    })


  }
  handledelete = (id) => {
    const { products } = this.state;
    const item = products.filter((item) => item.id !== id)
    this.setState({
      products: item
    })

  }
  getCount = () => {
    const { products } = this.state
    let count = 0;
    products.forEach((product) => {
      count += product.qty;
    });
    return count;
  }
  getTotal = () => {
    const { products } = this.state;
    let total = 0;
    products.map((product)=>{
      total=total+product.qty*product.price;
    })
    return total;

  }

  render() {
    const { products } = this.state;
    return (
      <div className="App">
        
          <Navbar count={this.getCount()} />
          <Cart
            products={products}
            onIncrese={this.handleincrease}
            onDecrease={this.handledecrease}
            onDelete={this.handledelete} />
          <div style={{padding:5,background:'grey',display:'flex',justifyContent:"flex-end"}}>TOTAL: {this.getTotal()}.00</div>


        
      </div>
    );
  }
}



export default App;
