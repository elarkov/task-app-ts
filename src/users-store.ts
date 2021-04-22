import { makeAutoObservable } from "mobx";
import {getUsers, addUser} from './api/server-users';

import history from './history';

import {User} from './types/data';

class UsersStore {
	currentUser = null

	constructor() {
		makeAutoObservable(this);
	}

	getListUsers = () => {
		const id = localStorage.getItem('user_id');
		getUsers()
			.then((users) => {
				const userItems = users.filter((user: User) => user.id === Number(id));
				this.currentUser = userItems[0].login
			})
	}

	handleSubmit: React.FormEventHandler<HTMLFormElement> = (evt) => {
		evt.preventDefault();

		const newUser = {
			login: (evt.target as any).elements.user.value,
			password: (evt.target as any).elements.pass.value
		}

		const onSuccess = () => {
			console.log('Вы успешно зарегистрировались');
			history.push('/');
		}

		if(newUser.password !== (evt.target as any).elements.pass_two.value) {
			alert('Не совпадают пароли!');
		} else {
			getUsers()
			.then((users) => {
				const user = users.find((user: User) => user.login === newUser.login);
				if(!user) {
					addUser(newUser, onSuccess);
				} else {
					alert('Пользователь с таким именем уже есть в БД');
				}
			});
			(evt.target as any).reset();
		}
	}

	onSubmit: React.FormEventHandler<HTMLFormElement> = (evt) => {
		evt.preventDefault();

		const currentUser = {
			login: (evt.target as any).elements.user.value,
			pass: (evt.target as any).elements.pass.value
		}

		getUsers()
			.then((users) => {
				const user = users.filter((user: User) => user.login === currentUser.login);
				
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