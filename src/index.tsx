import React, { createContext } from 'react';
import ReactDom from 'react-dom';

import App from './components/app/app';

import firebase from 'firebase';
import 'firebase/auth';

// Initialize Firebase
firebase.initializeApp(
	{
		apiKey: "AIzaSyDkiCFh8kWDyn_8POawX22-naDBY3VASVw",
		authDomain: "task-app-aa165.firebaseapp.com",
		projectId: "task-app-aa165",
		storageBucket: "task-app-aa165.appspot.com",
		messagingSenderId: "889869754035",
		appId: "1:889869754035:web:dd9b35c64903feb13f9ac6",
	}
);

export const Context = createContext(null);

const auth = firebase.auth();
export const firestore = firebase.database();


ReactDom.render(
	<Context.Provider value={{
		firebase,
		auth,
		firestore
	}}>
		<App/>
	</Context.Provider>, 
	document.getElementById('root'));

