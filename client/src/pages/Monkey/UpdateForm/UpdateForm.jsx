import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { updateMonkey, getMonkeyById } from "../../../models/monkeys";

export default function UpdateForm() {
  const { id } = useParams();
  const [monkey, setMonkey] = useState();
  const [isLoaded, setLoaded] = useState(false);

  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
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


  const sendData = async () => {
    const res = await updateMonkey(id, formData);
    if (res.status === 200)
      return navigate(`/view-monkey/${res.payload._id}`);
    setInfo(res.message);
  };

  const handleInput = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleButton = (e) => {
    e.preventDefault();
    sendData();
  };

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
      <h1>Update monkey</h1>
      <form>
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          required
          onChange={handleInput}
          defaultValue={monkey.name}
        />
        <input
          type="text"
          name="race"
          placeholder="Enter race"
          required
          onChange={handleInput}
          defaultValue={monkey.race}
        />
        <input
          type="text"
          name="gender"
          placeholder="Enter gender"
          required
          onChange={handleInput}
          defaultValue={monkey.gender}
        />
        <button onClick={handleButton}>Update monkey</button>
      </form>
      <p>{info}</p>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
