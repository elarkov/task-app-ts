import React from 'react';
import {Redirect} from './router';



class PrivateRoute extends React.Component<{component: any}> {

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