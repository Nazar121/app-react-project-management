import { initializeApp } from 'firebase/app';

// IMPORTANT
// This configuration data have to be in the .env file
// and also have to add this .env file to .gitignore file
// Since this is a test project they will stay here
const firebaseConfig = {
  apiKey: 'AIzaSyAz8cwJSojTd3vh14g3Qj69F8pr8S2XmX0',
  authDomain: 'projectmanagement-fcf0d.firebaseapp.com',
  projectId: 'projectmanagement-fcf0d',
  storageBucket: 'projectmanagement-fcf0d.appspot.com',
  messagingSenderId: '792844084467',
  appId: '1:792844084467:web:aeeb7ca0b749ba0ab34386',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
