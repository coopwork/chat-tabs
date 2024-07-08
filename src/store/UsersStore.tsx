import {createContext, ReactElement, useContext, useState} from "react";
import {User, UsersState} from "@/utils/types.ts";
import {users} from "@/utils/users.ts";

const initialState:UsersState = {
	user: {
		data: null,
		setData: ():null => null
	},
	interlocutor: {
		data: null,
		setData: ():null => null
	},
	all: []
}

const UsersContext = createContext(initialState)

const UsersStore = ({children}:{children:ReactElement}) => {
	const [currentUser, setCurrentUser] = useState<User | null>(null);
	const [chattingWith, setChattingWith] = useState<User | null>(null);

	const value:UsersState = {
		user: {
			data: currentUser,
			setData: (newState):void => {
				setCurrentUser(newState)
			}
		},
		interlocutor: {
			data: chattingWith,
			setData: (newState):void => {
				setChattingWith(newState)
			}
		},
		all: users
	}

	return (
			<UsersContext.Provider value={value}>
				{children}
			</UsersContext.Provider>
	);
};

export default UsersStore;

export function useUsers() {
	return useContext(UsersContext)
}