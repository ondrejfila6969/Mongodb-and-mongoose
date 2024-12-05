import React from 'react'
import { Link, useParams, useNavigation, useNavigate } from 'react-router-dom';
import { getSportById, deleteSport } from '../../../models/sports';
import { useState, useEffect } from 'react';

export default function ViewSport() {
  const { id } = useParams();
  const [sport, setSport] = useState();
  const [isLoaded, setLoaded] = useState(false);
  const [info, setInfo] = useState();
  const [formData, setFormData] = useState();
  const navigate = useNavigate();

  const load = async () => {
    const data = await getSportById(id);
    if(data.status === 500 || data.status === 404) return setLoaded(null);
    if(data.status === 200) {
      setSport(data.payload);
      setLoaded(true);
    }
  }

  useEffect(() => {
    load();
  }, []);

  const handleInput = (e) => {
    setFormData(e.target.value);
  }

  const handleButton = async (e) => {
    e.preventDefault();
    if(sport.name === formData) {
      const data = await deleteSport(id);
      if(data.status === 200) return navigate("/");
      return setInfo(data.message);
    }
    setInfo("Wrong input !");
  }

  if(isLoaded === null) {
    return (
      <>
        <p>Sport mínus</p>
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
      <h1>View sport</h1>
      <p>{id}</p>
      <p>{sport.name}</p>
      <p>{sport.nationality}</p>
      <p>{sport.sport}</p>
      <form>
        <input type="text" placeholder="Enter sport name" onChange={handleInput}/>
        <button onClick={handleButton}>Delete sport</button>
        <p>{info}</p>
      </form>
      <Link to={`/update-sport/${id}`}>
        <button>Update sport</button>
      </Link>
      <Link to={"/"}>
        <p>Go home</p>
      </Link>
    </>
  )
}
