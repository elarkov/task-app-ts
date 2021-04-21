import React from 'react';

import { observer } from 'mobx-react-lite';
import {usersStore} from '../../users-store.js';

import {Link} from '../../router.js';

import './sign-up.css';


const SignUp = observer (() => {

	const {handleSubmit} = usersStore;

 return (
	<form className="login-form bg-danger" onSubmit={handleSubmit} autoComplete="off">
		<input type="text" name="user" placeholder="Введите имя" required/>
		<input type="password" name="pass" placeholder="Введите пароль" required/>
		<input type="password" name="pass_two" placeholder="Введите пароль повторно" required/>
		<div className="login-form__bottom">
			<button className="login-form__btn btn btn-secondary" type="submit">Зарегистрироваться</button>
			<Link className="login-form__btn btn btn-primary" to="/login">Войти</Link>
		</div>
	</form>
 )
});

export default SignUp;