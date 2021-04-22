import {User} from '../types/data';

const getUsers = async() => {
	const response = await fetch('http://localhost:3000/users')
	const result = await response.json();
	return result;
};

const addUser = (formData: { login: any; password: any; }, onSuccess: any) => {
	fetch('http://localhost:3000/users', 
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
		})
}

export {getUsers, addUser};