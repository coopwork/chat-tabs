import {useUsers} from "@/store/UsersStore.tsx";
import {UsersState} from "@/utils/types.ts";
import Element = React.JSX.Element;
import {lazy, Suspense} from 'react';
import Loading from "@/components/ui/loading.tsx";

const tabs = {
	UserSelector :lazy(()=> import("@/components/chat/UserSelector.tsx")),
	ChatList: lazy(()=> import("@/components/chat/ChatList.tsx")),
	Chat: lazy(()=> import("@/components/chat/Chat.tsx"))
}



const AppTabs = ():Element => {
	const usersStore:UsersState = useUsers();

	if (!usersStore.user.data) {
		return <Suspense fallback={<Loading/>}><tabs.UserSelector /></Suspense>;
	}
	if (!usersStore.interlocutor.data) {
		return <Suspense fallback={<Loading/>}><tabs.ChatList /></Suspense>;
	}
	return <Suspense fallback={<Loading/>}><tabs.Chat /></Suspense>;
};

export default AppTabs;