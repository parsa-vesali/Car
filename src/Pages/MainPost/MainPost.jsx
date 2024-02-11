import React from 'react'
import './MainPost.css'
import { useParams } from 'react-router-dom'

export default function MainPost() {
    let params = useParams()
    console.log(params.postId);
  return (
    <div>MainPost</div>
  )
}
