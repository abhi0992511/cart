import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase';
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyB_Xh1RVZaJBekmnyaJwsUvILylqf5dHYo",
  authDomain: "cart-c79d2.firebaseapp.com",
  projectId: "cart-c79d2",
  storageBucket: "cart-c79d2.appspot.com",
  messagingSenderId: "363373684463",
  appId: "1:363373684463:web:543a92308aa96f23ae1d1a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig); 
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
