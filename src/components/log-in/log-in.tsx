import React, {useContext} from 'react';

import { observer } from 'mobx-react-lite';
import {usersStore} from '../../users-store';

import {Context} from '../../index';
import firebase from 'firebase';

import './log-in.css';

const LogIn = observer(() => {

	const {auth} = useContext(Context);

	const {onSubmit, setIdUser} = usersStore;

	const login = async () => {

		const provider = new firebase.auth.GoogleAuthProvider();
		const {user} = await auth.signInWithPopup(provider);

		setIdUser(user.uid);
		
		//console.log(user.displayName);
	}
	

	return (
		<form className="login-form" onSubmit={onSubmit} autoComplete="off">
			{/* <input type="text" name="user" placeholder="Введите имя" required/>
			<input type="password" name="pass" placeholder="Введите пароль" required/> */}
			<div className="login-form__bottom">
				<button className="login-form__btn btn btn-secondary" type="submit" onClick={login}>Войти</button>
			</div>
		</form>
	)
});

export default LogIn;