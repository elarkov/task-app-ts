import {Task, NewTask} from '../types/data';

import {firestore} from '../index';

/**Делаем запрос к серверу */
const getTasks = (cb: {(): void}): void => {
	firestore.ref('tasks').once('value', (snapshot) => {
		const data = snapshot.val();
		cb(data);
	});
};

/*Добавляем заметку в БД*/
const addTask = (formData: NewTask|null|undefined, onSuccess: { (): void; }): void => {
	firestore.ref('tasks').push(
		formData
	).then(()=> {
		onSuccess();
	})
}

/**Обновляем заметку в БД после редактирования */
const updateTask = (id: number, formData: Task, onDone: { (): void; }): void => {
	firestore.ref('tasks/' + id).set(
		formData
	).then(() => {
		onDone();
	})
}

/**Удаляем заметку из БД */
const deleteTask = (id: number): void => {
	firestore.ref('tasks/' + id).remove();
};



export {getTasks, addTask, deleteTask, updateTask};