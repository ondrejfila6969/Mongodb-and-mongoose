import React from 'react'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getAllHumans } from '../../../models/human';
import ListLink from './ListLink';

export default function ViewAll() {
  const [humans, setHumans] = useState();
  const [isLoaded, setLoaded] = useState(false);

  const load = async () => {
    const res = await getAllHumans();
    if(res.status === 500 || res.status === 404) return setLoaded(null);
    if(res.status === 200) {
      setHumans(res.payload);
      setLoaded(true);
    }
  }

  useEffect(() => {
    load();
  }, []);

  if(isLoaded === null) {
    return (
      <>
        <p>Humans minus</p>
      </>
    )
  }

  if(!isLoaded) {
    return(
      <>
        <p>Loading ...</p>
      </>
    )
  }

  return (
    <>
      <h1>Human list</h1>
      {
        humans.map((human, index) => (
          <ListLink key={index} {...human} />
        ))
      }
      <Link to={"/"}>
        <button>Go back</button>
      </Link>
    </>
  )
}
