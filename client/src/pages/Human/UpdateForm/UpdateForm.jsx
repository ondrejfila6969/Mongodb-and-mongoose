import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { updateHuman, getHumanById } from "../../../models/human";

export default function UpdateForm() {
  const { id } = useParams();
  const [human, setHuman] = useState();
  const [isLoaded, setLoaded] = useState(false);

  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
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


  const sendData = async () => {
    const res = await updateHuman(id, formData);
    if (res.status === 200)
      return navigate(`/view-human/${res.payload._id}`);
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
        <p>Člověk mínus</p>
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
      <h1>Update human</h1>
      <form>
        <input
          type="number"
          name="height"
          placeholder="Enter height"
          required
          onChange={handleInput}
          defaultValue={human.height}
        />
        <input
          type="number"
          name="age"
          placeholder="Enter age"
          required
          onChange={handleInput}
          defaultValue={human.age}
        />
        <input
          type="text"
          name="gender"
          placeholder="Enter gender"
          required
          onChange={handleInput}
          defaultValue={human.gender}
        />
        <button onClick={handleButton}>Update human</button>
      </form>
      <p>{info}</p>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
