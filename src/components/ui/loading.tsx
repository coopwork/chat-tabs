import CenteredBlock from "@/components/ui/centered-block.tsx";
import {ReloadIcon} from "@radix-ui/react-icons";


const Loading = () => {
	return (
			<CenteredBlock>
				<ReloadIcon className='w-16 h-16 animate-spin'/>
			</CenteredBlock>
	);
};

export default Loading;