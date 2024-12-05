import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { createHuman } from "../../../models/human";

export default function CreateForm() {
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const navigate = useNavigate();

  const sendData = async () => {
    const res = await createHuman(formData);
    if (res.status === 201)
      return navigate(`/created-human/${res.payload._id}`);
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
      <h1>Create human</h1>
      <form>
        <input
          type="number"
          name="height"
          placeholder="Enter height"
          required
          onChange={handleInput}
        />
        <input
          type="number"
          name="age"
          placeholder="Enter age"
          required
          onChange={handleInput}
        />
        <input
          type="text"
          name="gender"
          placeholder="Enter gender"
          required
          onChange={handleInput}
        />
        <button onClick={handleButton}>Create human</button>
      </form>
      <p>{info}</p>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
