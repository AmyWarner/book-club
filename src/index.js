import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import firebase from 'firebase';

  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyDaQizQKpsF5dx5HM9B_KPYCPz4TH7mK0c",
    authDomain: "book-reviews-317e2.firebaseapp.com",
    databaseURL: "https://book-reviews-317e2.firebaseio.com",
    projectId: "book-reviews-317e2",
    storageBucket: "",
    messagingSenderId: "1033730272659"
  };
  firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
