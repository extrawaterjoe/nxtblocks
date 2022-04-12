import React from "react"

const channel = ({ posts }) => {
  const postsList = posts?.contents.map(post => {
    if (post.class === "Image" || post.class === "Media") {
      return (
        <div className="w-full flex justify-center items-center" key={post.id}>
          <img src={post.image.large.url} alt={post.image.alt} />
        </div>
      )
    }
  })

  return (
    <div className="flex flex-col w-full justify-center items-center space-y-2">
      <h1 className="text-3xl">{posts?.title}</h1>
      <div className="flex flex-col w-1/2 space-y-3">
        {/* <pre>{JSON.stringify(posts, null, 2)}</pre> */}
        {postsList}
      </div>
    </div>
  )
}

export async function getServerSideProps({ params }) {
  const res = await fetch(
    `https://api.are.na/v2/channels/${params.slug}?page=1&amp;per=50`
  )
  const posts = await res.json()

  return {
    props: {
      posts,
    },
  }
}

export default channel
