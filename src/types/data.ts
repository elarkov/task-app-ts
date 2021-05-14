export interface Task {
	id: number;
	text: string;
	user_id: string;
	isComplete: boolean
}

export interface NewTask {
	text: string,
	user_id: string,
	isComplete: boolean
}

export enum FilterMarks {
	All = 'all',
	Uncomplete = 'uncomplete',
	Complete = 'complete'
}