import React from "react"
import Channel from "components/Channel"

const channel = ({ channel }) => {
  return <Channel channel={channel} />
}

export async function getServerSideProps({ params }) {
  const res = await fetch(
    `https://api.are.na/v2/channels/${params.slug}?page=1&amp;per=50`
  )
  const channel = await res.json()

  return {
    props: {
      channel,
    },
  }
}

export default channel
