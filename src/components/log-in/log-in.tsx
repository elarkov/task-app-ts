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

	}
	
	return (
		<div className="card text-white bg-primary mb-3 mt-5">
			<h1 className="card-header text-center">Авторизируйтесь</h1>
			<form className="login-form" onSubmit={onSubmit} autoComplete="off">
				<div className="login-form__bottom">
					<button className="login-form__btn btn btn-secondary" type="submit" onClick={login}>Войти</button>
				</div>
			</form>
		</div>
	)
});

export default LogIn;