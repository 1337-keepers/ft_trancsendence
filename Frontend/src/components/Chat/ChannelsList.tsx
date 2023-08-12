import React from "react";
import { Channel } from "@/app/types";


const ChannelsList = ({channels, updateSelectedChannel} : {channels : Channel[], updateSelectedChannel : (arg : Channel) => void}) => {
  const zob = () => {
    console.log("zob")
  }

	return (
    <div>
      <ul>
        {channels.map((channel : Channel) => (
          <li className="border" key={channel.id}>
            <button onClick={zob}>
              {channel.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ChannelsList;