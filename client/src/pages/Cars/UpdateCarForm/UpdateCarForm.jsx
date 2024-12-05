import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { updateSport, getSportById} from "../../../models/sports";

export default function UpdateCarForm() {
  const { id } = useParams();
  const [sport, setSport] = useState();
  const [isLoaded, setLoaded] = useState(false);

  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
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


  const sendData = async () => {
    const res = await updateSport(id, formData);
    if (res.status === 200)
      return navigate(`/view-sport/${res.payload._id}`);
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
        <p>Sport mínus = Urban won</p>
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
      <h1>Update sport</h1>
      <form>
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          required
          onChange={handleInput}
          defaultValue={sport.name}
        />
        <input
          type="text"
          name="nationality"
          placeholder="Enter nationality"
          required
          onChange={handleInput}
          defaultValue={sport.race}
        />
        <input
          type="text"
          name="sport"
          placeholder="Enter sport"
          required
          onChange={handleInput}
          defaultValue={sport.gender}
        />
        <button onClick={handleButton}>Update sport</button>
      </form>
      <p>{info}</p>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
