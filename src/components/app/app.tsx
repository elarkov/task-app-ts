import React from "react";

import {Router, Switch, Route} from '../../router';

import history from '../../history';
import PrivateRoute from '../../private-route';

import Dashboard from '../../pages/dashboard';
import Registr from '../../pages/registr';
import Login from '../../pages/login';



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
