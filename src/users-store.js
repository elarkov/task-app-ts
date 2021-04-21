import { makeAutoObservable } from "mobx";
import {getUsers, addUser} from './api/server-users.js';

import history from './history.js';

class UsersStore {
	currentUser = null

	constructor() {
		makeAutoObservable(this);
	}

	getListUsers = () => {
		const id = localStorage.getItem('user_id');
		getUsers()
			.then((users) => {
				const userItems = users.filter((user) => user.id === Number(id));
				this.currentUser = userItems[0].login
			})
	}

	handleSubmit = (evt) => {
		evt.preventDefault();

		const newUser = {
			login: evt.target.elements.user.value,
			password: evt.target.elements.pass.value
		}

		const onSuccess = () => {
			alert('Вы успешно зарегистрировались');
			history.push('/');
		}

		if(newUser.password !== evt.target.elements.pass_two.value) {
			alert('Не совпадают пароли!');
		} else {
			getUsers()
			.then((users) => {
				const user = users.find((user) => user.login === newUser.login);
				if(!user) {
					addUser(newUser, onSuccess);
				} else {
					alert('Пользователь с таким именем уже есть в БД');
				}
			})
			evt.target.reset();
		}
	}

	onSubmit = (evt) => {
		evt.preventDefault();

		const currentUser = {
			login: evt.target.elements.user.value,
			pass: evt.target.elements.pass.value
		}

		getUsers()
			.then((users) => {
				const user = users.filter((user) => user.login === currentUser.login);
				
				if(user.length > 0 && user[0].password === currentUser.pass) {
					localStorage.setItem('user_id', user[0].id);
					history.push('/');
				} else {
					console.log('false')
				}
				
			})
	}

}

const usersStore = new UsersStore();

export {usersStore};