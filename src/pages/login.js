import React from 'react';

import LogIn from '../components/log-in/log-in.js';

const Login = () => {
	return (
		<div className="card text-white bg-primary mb-3 mt-5">
			<h1 className="card-header text-center">Авторизируйтесь</h1>
			<LogIn/>
		</div>
	)
};

export default Login;