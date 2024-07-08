import {ReactElement} from "react";


const CenteredBlock = ({children}:{children: ReactElement}) => {
	return (
			<div className='flex justify-center items-center min-h-[100dvh]'>
				{children}
			</div>
	);
};

export default CenteredBlock;