import React, {useContext} from 'react';

import {observer} from 'mobx-react-lite';
import {usersStore} from '../../store/users-store';

import {Context} from '../../index';
import firebase from 'firebase';

import './log-in.css';

const LogIn = observer(() => {

	const {auth} = useContext(Context);
	const {setIdUser} = usersStore;

	const login: React.FormEventHandler<HTMLFormElement> = async (evt) => {
		evt.preventDefault();
		const provider = new firebase.auth.GoogleAuthProvider();
		const {user} = await auth.signInWithPopup(provider);

		if(user) {
			setIdUser(user.uid);
		}
	}
	
	return (
		<div className="card text-white bg-primary mb-3 mt-5">
			<h1 className="card-header text-center">Войти через Google</h1>
			<form className="login-form" onSubmit={login} autoComplete="off">
				<div className="login-form__bottom">
					<button className="login-form__btn btn btn-secondary" type="submit">Войти</button>
				</div>
			</form>
		</div>
	)
});

export default LogIn;