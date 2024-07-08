import React, {useState} from 'react';
import {Button} from "@/components/ui/button.tsx";
import {ChevronRightIcon} from "@radix-ui/react-icons";
import {Textarea} from "@/components/ui/textarea.tsx";

interface MessageInputProps {
	onSendMessage: (text: string) => void;
}

const MessageInput: React.FC<MessageInputProps> = ({ onSendMessage }) => {
	const [message, setMessage] = useState('');

	const handleSend = () => {
		if (message.trim()) {
			onSendMessage(message);
			setMessage('');
		}
	};

	return (
			<div className='flex items-center gap-2 w-full'>
				<Textarea
						className="resize-none"
						value={message}
						onChange={e => setMessage(e.target.value)}
				/>
				<Button
						className='hover:bg-foreground'
					disabled={!message.trim()}
					size='icon'
					onClick={handleSend}>
						<ChevronRightIcon/>
				</Button>
			</div>
	);
};

export default MessageInput;