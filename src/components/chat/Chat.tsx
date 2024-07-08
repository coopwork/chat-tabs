import { useState, useEffect } from 'react';
import {Message, UsersState} from '@/utils/types';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import CenteredBlock from "@/components/ui/centered-block.tsx";
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Cross2Icon} from "@radix-ui/react-icons";
import {useUsers} from "@/store/UsersStore.tsx";

const Chat = () => {
	const usersStore:UsersState = useUsers();
	const [messages, setMessages] = useState<Message[]>([]);

	const getFilteredMessages = (messages:Message[]) => {
		const filteredMessages = messages
				.filter(
				msg =>
						(msg.sender === usersStore.user.data?.id && msg.receiver === usersStore.interlocutor.data?.id) ||
						(msg.sender === usersStore.interlocutor.data?.id && msg.receiver === usersStore.user.data?.id)
			)
		return filteredMessages
	}

	useEffect(() => {
		const storedMessages = JSON.parse(localStorage.getItem('messages') || '[]') as Message[];
		setMessages(getFilteredMessages(storedMessages));
	}, [usersStore]);

	useEffect(() => {
		const handleStorage = () => {
			const storedMessages = JSON.parse(localStorage.getItem('messages') || '[]') as Message[];
			setMessages(getFilteredMessages(storedMessages));
		};
		window.addEventListener('storage', handleStorage);
		return () => {
			window.removeEventListener('storage', handleStorage);
		};
	}, [usersStore]);

	const sendMessage = (text: string) => {
		const newMessage = {
			sender: usersStore.user.data?.id,
			receiver: usersStore.interlocutor.data?.id,
			text,
			timestamp: Date.now(),
		};
		const updatedMessages = [...messages, newMessage];
		setMessages(updatedMessages);
		localStorage.setItem('messages', JSON.stringify([...JSON.parse(localStorage.getItem('messages') || '[]'), newMessage]));
	};

	useEffect(()=>{
		document.title = `Чат - ${usersStore.interlocutor.data?.firstName} ${usersStore.interlocutor.data?.lastName}`
	},[])
	return (
			<CenteredBlock>
				<Card className='relative w-full h-[100dvh] rounded-none lg:rounded-xl lg:max-h-[600px] max-w-3xl'>
					<CardHeader className='flex flex-row justify-between items-center border-b-2 border-b-muted'>
						<CardTitle className='flex items-center gap-2'>
							<Avatar>
								<AvatarImage src={usersStore.interlocutor.data?.photo} />
								<AvatarFallback className='bg-yellow-200 font-semibold'>{usersStore.interlocutor.data?.firstName[0]}{usersStore.interlocutor.data?.lastName[0]}</AvatarFallback>
							</Avatar>
							<p className='text-lg font-semibold'>{usersStore.interlocutor.data?.firstName} {usersStore.interlocutor.data?.lastName}</p>
						</CardTitle>
						<Button onClick={()=>usersStore.interlocutor.setData(null)} size='icon' variant='ghost' className='rounded-full'>
							<Cross2Icon className='w-6 h-6'/>
						</Button>
					</CardHeader>
					<CardContent className='pb-0 overflow-y-auto'>
						<MessageList messages={messages} />
					</CardContent>
					<CardFooter className='pt-5 border-t-2 border-t-muted'>
						<MessageInput onSendMessage={sendMessage} />
					</CardFooter>
				</Card>
			</CenteredBlock>
	);
};

export default Chat;