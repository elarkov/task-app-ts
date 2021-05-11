import {User} from '../types/data';

// import db from '../firebase/config';

// const getUsers = async(): Promise<any> => {
// 	const response = db.collection('users');
// 	const result = await response.get();
// 	return result;
// };

const getUsers = async(): Promise<any> => {
	const response = await fetch('http://localhost:3000/users')
	const result = await response.json();
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