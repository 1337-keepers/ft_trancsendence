import React, { use, useEffect } from 'react';
import { User, Message, Channel, ChatType } from '@/app/types';
import { useState } from 'react';
import ChannelsList from './ChannelsList';
import ChannelContent from './ChannelContent';
import ChannelDetails from './ChannelDetails';

const Chat = ( {user}:{user: User} ) => {
	const [channels, setChannels] = useState<Channel[]>([...user.channels]);
	const [selectedChannel, setSelectedChannel] = useState<Channel | null>(null);

	// useEffect(() => {
	// 	// const fetchChannels = async () => {
	// 		// 	// await fetch("/api/channels")
	// 		// 	// 	.then((res) => res.json())
	// 		// 	// 	.then((data) => setChannels(data));
	// 		// 	updateChannels(user.channels);
	// 		// }
	// 		// fetchChannels();
	// }, []);

	const updateChannels = (channels : Channel[]) => {
		setChannels(channels)
	}
	const updateSelectedChannel = (channel : Channel | null) => {
		setSelectedChannel(channel)
	}

	return (
		<div className="flex flex-col w-[60rem] h-[60rem] rounded-[25px] bg-[#33437D]">
			<div className="flex border-b">
				<div className="flex pl-[2rem] items-center text-2xl text-white w-[15rem] h-[4rem] border-r">
					Chat room
				</div>
				<div className="flex items-center justify-evenly w-[45rem]">
					<ChannelDetails channel={selectedChannel} updateSelectedChannel={updateSelectedChannel} />
				</div>
			</div>
			<div className="flex">
				<div className="w-[15rem] h-[55.8rem] border-r">
					<ChannelsList
						channels={channels}
						updateSelectedChannel={updateSelectedChannel}
					/>
				</div>
				<div className="w-[45rem]">
					<ChannelContent channel={selectedChannel} />
				</div>
			</div>
		</div>
	)
};


export default Chat;
