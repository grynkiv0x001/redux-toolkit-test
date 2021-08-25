import React from 'react'
import { useSelector } from 'react-redux'
import { RouteComponentProps } from 'react-router-dom'

import { RootState } from '../../app/store'

export const Post = ({ match }: RouteComponentProps<{ postId: string }>) => {
  const { postId } = match.params

  const post = useSelector((state: RootState) =>
    state.posts.find((post: { id: string }) => post.id === postId)
  )

  if (!post) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    )
  }

  return (
    <section>
      <article className="post">
        <h2>{post.title}</h2>
        <p className="post-content">{post.content}</p>
      </article>
    </section>
  )
}
