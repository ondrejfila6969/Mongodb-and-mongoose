import React from 'react'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getAllSports } from '../../../models/sports';
import ListLink from './ListLink';

export default function ViewAllSports() {
  const [sports, setSports] = useState();
  const [isLoaded, setLoaded] = useState(false);

  const load = async () => {
    const res = await getAllSports();
    if(res.status === 500 || res.status === 404) return setLoaded(null);
    if(res.status === 200) {
      setSports(res.payload);
      setLoaded(true);
    }
  }

  useEffect(() => {
    load();
  }, []);

  if(isLoaded === null) {
    return (
      <>
        <p>Sporty minus</p>
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
      <h1>Sports list</h1>
      {
        sports.map((sport, index) => (
          <ListLink key={index} {...sport} />
        ))
      }
      <Link to={"/"}>
        <button>Go back</button>
      </Link>
    </>
  )
}
