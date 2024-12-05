import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { createSport } from "../../../models/sports";

export default function CreateSportForm() {
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const navigate = useNavigate();

  const sendData = async () => {
    const res = await createSport(formData);
    if (res.status === 201)
      return navigate(`/created-sport/${res.payload._id}`);
    setInfo(res.message);
  };

  const handleInput = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleButton = (e) => {
    e.preventDefault();
    sendData();
  };

  return (
    <>
      <h1>Create sport</h1>
      <form>
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          required
          onChange={handleInput}
        />
        <input
          type="text"
          name="nationality"
          placeholder="Enter nationality"
          required
          onChange={handleInput}
        />
        <input
          type="text"
          name="sport"
          placeholder="Enter sport"
          required
          onChange={handleInput}
        />
        <button onClick={handleButton}>Create sport</button>
      </form>
      <p>{info}</p>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
