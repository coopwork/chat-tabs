import {useEffect, useRef} from 'react';
import { Message } from '@/utils/types';
import {ScrollArea} from "@/components/ui/scroll-area.tsx";
import {Card} from "@/components/ui/card.tsx";
import {UsersState} from "@/utils/types.ts";
import {useUsers} from "@/store/UsersStore.tsx";

interface MessageListProps {
	messages: Message[];
}

const MessageList = ({ messages }:MessageListProps) => {
	const usersStore:UsersState = useUsers();
	const scrollAreaRef = useRef(null)
	useEffect(():void =>{
		scrollAreaRef.current.scrollIntoView(false);
	},[messages])
	return (
			<ScrollArea  className="pe-5 h-[calc(100dvh-200px)] lg:h-[400px]">
				<div ref={scrollAreaRef} className='my-3 flex flex-1 flex-col h-full'>
				{messages.length? messages.map((msg, index) => (
						<Card key={index} className={`w-[80%] max-w-fit my-1 py-2 px-3 ${msg.sender === usersStore.user.data?.id && 'ml-auto'} ${msg.sender === usersStore.user.data?.id ? 'bg-muted' : 'bg-secondary'}`}>
							<h6 className='font-semibold mb-2'>
								{msg.sender === usersStore.user.data?.id? 'Вы' : usersStore.interlocutor.data?.firstName}
							</h6>
							<p className='mb-2'>{msg.text}</p>
							<small className='cursor-default opacity-30'>{new Date(msg.timestamp).toLocaleTimeString()}</small>
						</Card>
				))
					:
				<p className='text-center text-2xl font-semibold opacity-35 mt-[50%] lg:mt-[25%]'>Диалог пуст</p>
				}
				</div>
			</ScrollArea>
	);
};

export default MessageList;