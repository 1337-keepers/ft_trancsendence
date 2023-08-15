import React from "react";
import { Channel } from "@/app/types";

const ChannelDetails = ({channel, updateSelectedChannel} : {channel : Channel | null, updateSelectedChannel : (arg : Channel | null) => void}) => {
	return (
		<>
			{channel && (<>
				<div className="flex flex-col justify-center items-center border">
					<h1 className="text-3xl">{channel.name}</h1>
					{!channel.directMessage && <p className="text-xl">{channel.memberCount} members</p>}
				</div>
				<div className="border ">
					<button>x</button>
				</div>
			</>)}
		</>
	)
}

export default ChannelDetails;