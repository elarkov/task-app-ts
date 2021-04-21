/**Делаем запрос к серверу */
const getTasks = async () => {
	const response = await fetch('http://localhost:3000/tasks');
	const res = await response.json();
	return res;
};

/*Добавляем заметку в БД*/
const addTask = (formData, onSuccess) => {
	fetch('http://localhost:3000/tasks', 
	{
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(formData),
	}).then((response) => {
		if(response.ok) {
			onSuccess();
		}
	});
}

/**Обновляем заметку в БД после редактирования */
const updateTask = (id, formData, onDone) => {
	fetch('http://localhost:3000/tasks/' + id, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(formData)
	}).then((response) => {
		if(response.ok){
			onDone();
		}
	})
}

/**Удаляем заметку из БД */
const deleteTask = (id) => {
	fetch('http://localhost:3000/tasks/' + id, {
		method: 'DELETE'
	}).then(res => {
		console.log(res.statusText);
	})
};



export {getTasks, addTask, deleteTask, updateTask};