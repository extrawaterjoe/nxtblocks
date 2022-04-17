import React from "react"

const Channel = ({ channel }) => {
  const contents = channel?.contents?.reverse()
  const channelList = contents.map(block => {
    if (block.class === "Image") {
      return (
        <div className="grid grid-cols-2">
        <div className="w-full flex justify-center flex-col items-center" key={block.id}>
          <pre className="text-slate-800 text-xs w-full overflow-clip">
            {JSON.stringify(block, null, 2)}
          </pre>
        </div>
        <div className="w-full flex justify-center h-fit items-center" key={block.id + "img"}>
          <img src={block.image.large.url} alt={block.image.alt} />
        </div>
        </div>
      )
    }
  })

  return (
    <div className="flex flex-col w-full justify-center items-center space-y-2 py-8">
      <div className="text-center text-6xl w-1/3 font-black p-6 text-slate-800">
        {channel?.title}
      </div>
      <div className="flex flex-col w-2/3">
        {channelList}
      </div>
    </div>
  )
}

export default Channel
