import { CardActions, IconButton } from '@mui/material'
import React from 'react'
import { IPost, IReaction } from '../features/api/apiSlice'
const reactionEmoji = {
    thumbsUp: '👍',
    wow: '😮',
    heart: '❤️',
    rocket: '🚀',
    coffee: '☕'
}
const ReactionButtons = ({post}:{post:IPost}) => {
    const reactionButtons = Object.entries(reactionEmoji).map(([name,emoji])=>{
        return(
            <IconButton aria-label={name}>
{emoji}{post.reactions[name as keyof IReaction]}
            </IconButton>  
        )
    })
  return (
   <CardActions>
    {reactionButtons}
   </CardActions>
  )
}

export default ReactionButtons