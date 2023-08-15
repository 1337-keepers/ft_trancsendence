import React from "react";
import { Channel } from "@/app/types";

const ChannelContent = ({channel} : {channel : Channel | null}) => {
	return (
		<div className="flex flex-col-reverse overflow-auto h-[52rem] border">
			{channel?.messages.map((message) => (
				<div className="border-b" key={message.id}>
					<p>{message.content}</p>
				</div>
			))}
		</div>
	)
}

export default ChannelContent;