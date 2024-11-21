import React from 'react'
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
        <h1>My CRUD MERN application</h1>
        <Link to={"/create-monkey"}>
          <p>Add new monkey</p>
        </Link>
        <Link to={"/viewAllMonkeys"}>
          <p>Monkeys</p>
        </Link>
    </>
  )
}
