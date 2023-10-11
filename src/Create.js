import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Create() {
  // use state to store data()
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const header = { "Access-Control-Allow-Origin": "*" };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(
      "https://64ca693a700d50e3c704ddaa.mockapi.io/Crud2", //url
      {
        name: name, //data
        email: email,
        headers: header, //header
      }
    )
    .then(()=>{
        navigate("/read");
    });
    
  };

  return (
    <>
    <div className="d-flex justify-content-between m-2">
      <h1>Create</h1>
      <Link to="/read">
      <button className="btn btn-primary">Show Data</button>
      </Link>
      </div>
      <form>
        <div className="mb-3">
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="name"
              className="form-control"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
            onChange={(e) => setEmail(e.target.value)} //data capture kene k liye form se
          />
          <div className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </>
  );
}

export default Create;
