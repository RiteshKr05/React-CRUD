import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Update() {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");


  const navigate = useNavigate();

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email"));
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    axios.put(`https://64ca693a700d50e3c704ddaa.mockapi.io/Crud2/${id}`, 
      {
        name: name, //data
        email: email,
      })
      .then(()=>{
        navigate("/read")
      })
  };

  return (
    <>
      <h1>Update</h1>
      <form>
        <div className="mb-3">
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="name"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
            value={email}
            onChange={(e) => setEmail(e.target.value)} //data capture kene k liye form se
          />
          <div className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>

        <button
          type="update"
          className="btn btn-primary"
          onClick={handleUpdate}
        >
          Update
        </button>
        <Link to="/">
        <button className="btn btn-primary mx-2">Back</button>
        </Link>
      </form>
    </>
  );
}

export default Update;
