import React, { useEffect, useState } from "react";
import { useParams, Link} from "react-router-dom";
import axios from "axios";
import Navbar from "../Components/Navbar";

export default function Profile() {
  const [item, setItem] = useState([]);
  let { id } = useParams();
  let url = `https://rickandmortyapi.com/api/character/${id}`;

  useEffect(() => {
    let res = axios.get(url).then((res) => setItem(res.data));
  }, [url]);

   console.log(item);

    const active = () => {
              if (item.status === "Alive") {
                return "green";
              } else if (item.status === "Dead") {
                return "dead";
              } else if (item.status === "unknown") {
                return "uncown";
              }
            };

  return (
    <div>
      <Navbar />
      <div className="container">
      <Link to="/location" className="btn btn-primary mt-4">Aslamboi</Link>
      <div className="catalog catalog-two">
                <img src={item.image} alt="" className="img-item" width="260px" />
                <div className="inf">
                  <span className={active()}>{item.status}</span>
                  <span className="name h2 d-block">{item.name}</span>
                  <span className="location d-block mt-4">Last Location</span>
                  <span className="d-block h5 mt-1">{item.location?.name}</span>
                </div>
              </div>
      </div>
    </div>
  );
}
