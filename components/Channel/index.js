import React from "react"

const Channel = ({ channel }) => {
  const contents = channel?.contents?.reverse()
  const channelList = contents.map(block => {
    if (block.class === "Image") {
      return (
        <div className="w-full flex justify-center items-center" key={block.id}>
          <img src={block.image.large.url} alt={block.image.alt} />
        </div>
      )
    }
  })

  return (
    <div className="flex flex-col w-full justify-center items-center space-y-2 py-8">
      <div className="text-center text-6xl w-1/3 font-black p-6 text-slate-800">
        {channel?.title}
      </div>
      <div className="flex flex-col w-1/3 space-y-3">
        {/* <pre>{JSON.stringify(channel, null, 2)}</pre> */}
        {channelList}
      </div>
    </div>
  )
}

export default Channel
