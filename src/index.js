import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCptn0n6mY7Cqz-Sr2XaX67zlPvd25jg-s",
  authDomain: "cursoreactjs-54965.firebaseapp.com",
  projectId: "cursoreactjs-54965",
  storageBucket: "cursoreactjs-54965.appspot.com",
  messagingSenderId: "1011101415125",
  appId: "1:1011101415125:web:d546295e4d92986927145c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);