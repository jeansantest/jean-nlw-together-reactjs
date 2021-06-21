import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyAZwOY3B0t25osFAG_Fe2lcHuqLNkiOMtk',
  authDomain: 'letmeask-nlw-5ca7f.firebaseapp.com',
  databaseURL: 'https://letmeask-nlw-5ca7f-default-rtdb.firebaseio.com',
  projectId: 'letmeask-nlw-5ca7f',
  storageBucket: 'letmeask-nlw-5ca7f.appspot.com',
  messagingSenderId: '444701984890',
  appId: '1:444701984890:web:2a5b937640faf7d67713c3',
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const database = firebase.database();
