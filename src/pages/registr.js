import React from "react";
import {getUsers, addUser} from '../api/server-users.js';

import SignUp from '../components/sign-up/sign-up.js';


const Registr = () => {
	return (
		<div className="card text-white bg-danger mb-3 mt-5">
			<h1 className="card-header text-center">Регистрация</h1>
			<SignUp/>
		</div>
	)
};

export default Registr;