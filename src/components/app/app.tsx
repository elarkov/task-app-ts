import React from "react";
import {BrowserRouter} from 'react-router-dom';
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
