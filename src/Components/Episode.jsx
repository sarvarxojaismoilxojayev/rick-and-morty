import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import "../Styles/Location.css";
import { Link } from "react-router-dom";
import "../Styles/Catalog.css";
import Load from "./Load";

export default function Location() {
  const [load, setLoad] = useState(false);
  let [lyrcs, setLyrcs] = useState(null);
  const [data, setData] = useState([]);
  const [item, setItem] = useState([]);
  const [number, setNumber] = useState(1);
  

  // let url = `https://rickandmortyapi.com/api/location/1`;

  // useEffect(() => {
  //   fetch(url).then((res) => res.json()).then((data) => {
  //     let api = data.residents[0]
  //     data.residents[0]
  //     fetch(api).then((res) => res.json()).then((data) => {
  //       setItem(data);
  //     })
  //   })
  // }, [URL]);

  let url = `https://rickandmortyapi.com/api/episode/${number}`;
 
  useEffect(() => {
    (async function () {
      const data = await fetch(url).then((res) => res.json());
      setItem(data);

      const x = await Promise.all(
        data.characters.map((item) => {
          return fetch(item).then((res) => res.json());
        })
      );
      setLoad(true)
      setData(x);
    })();
  }, [url]);

  



  return (
    <div>
      <Navbar />
      {load ? lyrcs : <Load />}
      <div className="banner">
        <span className="text-primary title d-block"> <span className="text-dark">Location  :  </span>{item.name}</span>
        <span className="discription">Air Date : {item.air_date}</span>
      </div>
      <div className="container total d-flex">
        <div className="b1">
          <select
            className="cars form-select select"
            aria-label="Disabled select example"
            onChange={(e) => setNumber(e.target.value)}
          >
            {data.map((i, index) => {
                return (
                  <option>{index + 1}</option>
                )
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
                  <Link
                    className="link text-decoration-none btn btn-primary"
                    to={`/${e.id}`}
                  >
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
