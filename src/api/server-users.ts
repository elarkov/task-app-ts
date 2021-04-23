import {User} from '../types/data';

const getUsers = async(): Promise<any> => {
	const response = await fetch('http://localhost:3000/users')
	const result = await response.json();
	console.log(typeof result);
	return result;
};

const addUser = (formData: User, onSuccess: { (): void } ): void => {
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