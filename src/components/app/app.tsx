import React from "react";

// import {Router, Switch, Route} from '../../router';

import {BrowserRouter, Route} from 'react-router-dom';

//import history from '../../history';
//import PrivateRoute from '../../private-route';

import Dashboard from '../../pages/dashboard';
import Registr from '../../pages/registr';
import Login from '../../pages/login';
import AppRouter from "../appRouter/app-router";




const App: React.FC = () => {
	const user = false;
	return ( 
		<BrowserRouter>
			<div className="wrapper">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<AppRouter/>
						</div>
					</div>
				</div>
			</div>
		</BrowserRouter>
	)
};

export default App;
