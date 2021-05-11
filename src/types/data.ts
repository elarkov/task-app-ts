export interface Task {
	id: number;
	text: string;
	user_id: number;
	isComplete: boolean
}

export interface NewTask {
	text: any,
	user_id: string,
	isComplete: boolean
}

export interface User {
	id?: number,
	login: string,
	password: string
}