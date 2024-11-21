import React from 'react'
import { Link, useParams, useNavigation, useNavigate } from 'react-router-dom';
import { getMonkeyById, deleteMonkey } from '../../../models/monkeys';
import { useState, useEffect } from 'react';

export default function View() {
  const { id } = useParams();
  const [monkey, setMonkey] = useState();
  const [isLoaded, setLoaded] = useState(false);
  const [info, setInfo] = useState();
  const [formData, setFormData] = useState();
  const navigate = useNavigate();

  const load = async () => {
    const data = await getMonkeyById(id);
    if(data.status === 500 || data.status === 404) return setLoaded(null);
    if(data.status === 200) {
      setMonkey(data.payload);
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
    if(monkey.name === formData) {
      const data = await deleteMonkey(id);
      if(data.status === 200) return navigate("/");
      return setInfo(data.message);
    }
    setInfo("Wrong input !");
  }

  if(isLoaded === null) {
    return (
      <>
        <p>Opička mínus</p>
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
      <h1>View monkey</h1>
      <p>{id}</p>
      <p>{monkey.name}</p>
      <p>{monkey.race}</p>
      <p>{monkey.gender}</p>
      <form>
        <input type="text" placeholder="Enter monkey name" onChange={handleInput}/>
        <button onClick={handleButton}>Delete monkey</button>
        <p>{info}</p>
      </form>
      <Link to={`/update-monkey/${id}`}>
        <button>Update monkey</button>
      </Link>
      <Link to={"/"}>
        <p>Go home</p>
      </Link>
    </>
  )
}
