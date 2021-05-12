import { makeAutoObservable } from "mobx";

class UsersStore {
	idUser = '';

	constructor() {
		makeAutoObservable(this);
	}

	setIdUser = (id:string) => {
		this.idUser = id;
		localStorage.setItem('user_id', id);
	}

	onSubmit: React.FormEventHandler<HTMLFormElement> = (evt) => {
		evt.preventDefault();
	}

}

const usersStore = new UsersStore();

export {usersStore};