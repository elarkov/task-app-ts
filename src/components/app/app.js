import React from "react";

import {Router, Switch, Route} from '../../router.js';

import history from '../../history.js';
import PrivateRoute from './../../private-route.js';

import Dashboard from '../../pages/dashboard.js';
import Registr from '../../pages/registr.js';
import Login from '../../pages/login.js';



const App = () => {

	return (
		<Router history={history}>
			<div className="wrapper">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<Switch>
								<PrivateRoute exact path="/" component={Dashboard} />
								<Route exact path="/registr">
									<Registr/>
								</Route>
								<Route exact path="/login">
									<Login/>
								</Route>
							</Switch>
						</div>
					</div>
				</div>
			</div>
		</Router>
	)
};

export default App;
