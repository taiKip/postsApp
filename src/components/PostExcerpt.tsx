import { Card, CardHeader ,Avatar, CardContent, Typography, CardActions, IconButton} from "@mui/material"
import { red } from "@mui/material/colors"
import { IPost } from "../features/api/apiSlice"
import ReactionButtons from "./ReactionButtons"


const PostExcerpt = ({post}:{post:IPost}) => {
  return (
    <Card sx={{maxWidth:345}}>
<CardHeader
avatar ={
    <Avatar sx={{ bgcolor: red[500] }} aria-label="author">
    R
  </Avatar> 
}
title="Shrimp and Chorizo"
subheader="September 14,2016"
/>
<CardContent>
    <Typography>
    itaque id aut magnam\npraesentium quia et ea odit e…uia     
    </Typography>
</CardContent>
<ReactionButtons post={post}/>
    </Card>
  )
}

export default PostExcerpt