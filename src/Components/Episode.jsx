import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import "../Styles/Location.css";
import { Link} from "react-router-dom";
import '../Styles/Catalog.css'

export default function Location() {
  const [post, setPost] = useState();
  const [load, setLoad] = useState(false);
  const [data, setData] = useState([]);
  const [id, setId] = useState('')

  useEffect(
    (e) => {
      async function app() {
        setLoad(true);
        let res = await axios.get(`https://rickandmortyapi.com/api/episode`);
        setData(res.data.results);
        setLoad(true);
      }
      app();
    },
    [post]
  );


  console.log(data);

  function change(e) {
   

        console.log(id);
  }


  return (
    <div>
      <Navbar />
      <div className="container total d-flex">
        <div className="b1">
        <select
          className="cars form-select select"
          aria-label="Disabled select example"
        >
          <option disabled selected>
            choose
          </option>
          {data.map((i) => {
            return <option value={id} onChange={e => setId(e.target.value)} onClick={change}>{i.id}</option>;
          })}
        </select>
        </div>
        <div className="b2 d-flex">
        {data.map((e) => {
          const active = () => {
            if (e.status === "Alive") {
              return "green";
            } else if (e.status === "Dead") {
              return "dead";
            } else if (e.status === "unknown") {
              return "uncown";
            }
          };
          return (
            <div className="catalog" key={crypto.randomUUID()}>
              <img src={e.image} alt="" className="img-item" width="260px" />
              <div className="inf">
                <span className={active()}>{e.status}</span>
                <span className="name h2 d-block">{e.name}</span>
                <span className="location d-block mt-4">Last Location</span>
                <span className="d-block h5 mt-1">{e.dimension}</span>
                <Link className="link text-decoration-none btn btn-primary" to={`/${e.id}`}>
                  More
                </Link>
              </div>
            </div>
          );
        })}
        </div>
      </div>
    </div>
  );
}
