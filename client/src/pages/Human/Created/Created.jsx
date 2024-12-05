import React from 'react'
import { useParams, Link } from 'react-router-dom';

export default function Created() {
  const {id} = useParams();

  return (
    <>
        <h1>New human was created: {id}</h1>
        <Link to={`/view-human/${id}`}>
            <p>View human</p>
        </Link>
        <Link to={`/`}>
            <p>Return to home page</p>
        </Link>
    </>
  )
}
