import {useEffect} from "react";
import CenteredBlock from "@/components/ui/centered-block.tsx";
import {Card, CardContent, CardFooter, CardHeader} from "@/components/ui/card.tsx";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar.tsx";
import {UsersState} from "@/utils/types.ts";
import {useUsers} from "@/store/UsersStore.tsx";
import ThemeToogler from "@/components/blocks/theme-toogler.tsx";

const UserSelector = () => {
	const usersStore:UsersState = useUsers();
	useEffect(()=>{
		document.title = 'Чат - Вход'
	},[])
	return (
			<CenteredBlock>
				<Card className='w-full max-w-xl m-5'>
					<CardHeader>
						<h2 className='text-center font-semibold text-xl'>Выберите аккаунт</h2>
					</CardHeader>
					<CardContent className='flex flex-col gap-3'>
						{usersStore.all.map(user => (
								<Card className='flex items-center gap-2 cursor-pointer rounded-3xl hover:bg-muted' key={user.id} onClick={() => usersStore.user.setData(user)}>
									<Avatar>
										<AvatarImage src={user.photo} />
										<AvatarFallback className='bg-yellow-200 font-semibold'>{user.firstName[0]}{user.lastName[0]}</AvatarFallback>
									</Avatar>
									<p>
										{user.firstName} {user.lastName}
									</p>
								</Card>
						))}
					</CardContent>
					<CardFooter>
						<ThemeToogler/>
					</CardFooter>
				</Card>
			</CenteredBlock>
	);
};

export default UserSelector;