
type NullReturningFunction = () => null;
type ObjectVoidFunction = (user:User) => void;

export interface User {
	id: number;
	firstName: string;
	lastName: string;
	photo: string;
}

export interface Message {
	sender: string | number;
	receiver: string | number;
	text: string;
	timestamp: number;
}

export interface UsersState {
	all: User[],
	user: {
		data: User | null,
		setData: ObjectVoidFunction | NullReturningFunction
	},
	interlocutor: {
		data: User | null,
		setData: ObjectVoidFunction | NullReturningFunction
	}
}