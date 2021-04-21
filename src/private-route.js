import React from 'react';
import {Redirect} from './router.js';



class PrivateRoute extends React.Component {

	render() {
		const Component = this.props.component;
		const isAuthenticated = localStorage.getItem('user_id');

		return isAuthenticated ? (
			<Component/>
		) : (
			<Redirect to={{pathname: '/login'}}/>
		)
	}
}

export default PrivateRoute;