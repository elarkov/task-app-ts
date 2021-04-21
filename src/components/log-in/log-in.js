import React from 'react';

import { observer } from 'mobx-react-lite';
import {usersStore} from '../../users-store.js';

import {Link} from '../../router.js';

import './log-in.css';

const LogIn = observer(() => {

	const {onSubmit} = usersStore;

	return (
		<form className="login-form" onSubmit={onSubmit} autoComplete="off">
			<input type="text" name="user" placeholder="Введите имя" required/>
			<input type="password" name="pass" placeholder="Введите пароль" required/>
			<div className="login-form__bottom">
				<button className="login-form__btn btn btn-secondary" type="submit">Войти</button>
				<Link className="login-form__btn btn btn-danger" to="/registr">Регистрация</Link>
			</div>
		</form>
	)
});

export default LogIn;