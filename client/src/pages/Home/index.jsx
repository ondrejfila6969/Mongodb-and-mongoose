import React from 'react'
import { Link } from 'react-router-dom';
import "./home.css";

export default function Home() {
  return (
    <>
        <h1>My CRUD MERN application</h1>

        <h2 className='monkeTitle'>MONKEEES</h2>
        <img src="../../public/monke.jpg" alt="" width={400} height={200}/>
        <Link to={"/create-monkey"}>
          <p>Add new monkey</p>
        </Link>
        <Link to={"/viewAllMonkeys"}>
          <p>Monkeys</p>
        </Link>

        <h1>SPORTZZ</h1>
        <Link to={"/create-sport"}>
          <p>Add new sport</p>
        </Link>
        <Link to={"/viewAllSports"}>
          <p>Sports</p>
        </Link>
    </>
  )
}
