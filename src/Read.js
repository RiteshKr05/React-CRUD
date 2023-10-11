import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Read() {
  // Now lets store data
  const [data, setData] = useState([]);

  function getData() {
    axios
      .get("https://64ca693a700d50e3c704ddaa.mockapi.io/Crud2")
      .then((res) => {
        console.log(res);
        setData(res.data);
      });
  }

  //Delete function====================
  function handleDelete(id) {
    axios
      .delete(`https://64ca693a700d50e3c704ddaa.mockapi.io/Crud2/${id}`)
      .then(() => {
        getData();
      });
  }
  const setLocalStrogae=((id, name, email)=>{
    localStorage.setItem("id", id)
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);


  })


  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="d-flex justify-content-between m-2">
      <h1>Read</h1>
      <Link to="/">
      <button className="btn btn-primary">Create</button>
      </Link>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        {data.map((eachData) => {
          return (
            <>
              <tbody>
                <tr>
                  <th scope="row">{eachData.id}</th>
                  <td>{eachData.name}</td>
                  <td>{eachData.email}</td>
                  <td>
                    <Link to="/update">
                      <button
                        className="btn-sucess"
                        onClick={() =>
                          setLocalStrogae(
                            eachData.id,
                            eachData.name,
                            eachData.email
                          )
                        }
                      >
                        Edit
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button
                      className="btn-danger"
                      onClick={() => handleDelete(eachData.id)}
                    >
                      delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </>
          );
        })}
      </table>
    </>
  );
}

export default Read;
