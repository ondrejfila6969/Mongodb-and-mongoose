import React from 'react'
import { useParams, Link } from 'react-router-dom';

export default function CreatedCar() {
  const {id} = useParams();

  return (
    <>
        <h1>New sport was created: {id}</h1>
        <Link to={`/view-sport/${id}`}>
            <p>View sport</p>
        </Link>
        <Link to={`/`}>
            <p>Return to home page</p>
        </Link>
    </>
  )
}
