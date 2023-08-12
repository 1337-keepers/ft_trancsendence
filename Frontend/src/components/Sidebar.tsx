import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Sidebar = ({location}:{location : string}) => {
	return (
		<>
			<div className="sm:block hidden">
				<div className="border-r border-black w-[75px] h-screen bg-[#000355] sm:bg-[#33437D] z-10 flex flex-col justify-between">
					<div className="sm:bg-[#33437D] sm:block hidden">
						<div className="flex justify-center mb-[50px] mt-[20px] hover:">
							<Image className="sm:block hidden" src={"/Profile_off.png"} alt="image" width={30} height={30}/>
						</div>
						<div className="flex justify-center mb-[50px] mt-[20px]">
							<Image className="sm:block hidden" src={"/Game_off.png"} alt="image" width={37} height={37}/>
						</div>
						<div className="flex justify-center mb-[50px] mt-[20px]">
							<Image className="sm:block hidden" src={"/Friends_off.png"} alt="image" width={26} height={26}/>
						</div>
						<div className="flex justify-center mb-[50px] mt-[20px]">
							<Image className="sm:block hidden" src={"/Chat_off.png"} alt="image" width={29} height={29}/>
						</div>
					</div>
					<div className="flex justify-center mb-[80px] bg-[#33437D]">
						<div className="sm:block hidden">
							<Image src={"/Settings_off.png"} alt="image" width={32} height={32}/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Sidebar;