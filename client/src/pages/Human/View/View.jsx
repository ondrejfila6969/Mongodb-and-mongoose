import React from 'react'
import { Link, useParams, useNavigation, useNavigate } from 'react-router-dom';
import { getHumanById, deleteHuman } from '../../../models/human';
import { useState, useEffect } from 'react';

export default function View() {
  const { id } = useParams();
  const [human, setHuman] = useState();
  const [isLoaded, setLoaded] = useState(false);
  const [info, setInfo] = useState();
  const [formData, setFormData] = useState();
  const navigate = useNavigate();

  const load = async () => {
    const data = await getHumanById(id);
    if(data.status === 500 || data.status === 404) return setLoaded(null);
    if(data.status === 200) {
      setHuman(data.payload);
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
    if(human.height === formData) {
      const data = await deleteHuman(id);
      if(data.status === 200) return navigate("/");
      return setInfo(data.message);
    }
    setInfo("Wrong input !");
  }

  if(isLoaded === null) {
    return (
      <>
        <p>Human mínus</p>
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
      <h1>View human</h1>
      <p>{id}</p>
      <p>{human.height}</p>
      <p>{human.age}</p>
      <p>{human.gender}</p>
      <form>
        <input type="number" placeholder="Enter human height" onChange={handleInput}/>
        <button onClick={handleButton}>Delete monkey</button>
        <p>{info}</p>
      </form>
      <Link to={`/update-human/${id}`}>
        <button>Update human</button>
      </Link>
      <Link to={"/"}>
        <p>Go home</p>
      </Link>
    </>
  )
}
