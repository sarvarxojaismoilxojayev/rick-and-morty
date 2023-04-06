import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import "../Styles/Location.css";
import { Link } from "react-router-dom";
import "../Styles/Catalog.css";
import Load from "./Load";

export default function Location() {
  const [load, setLoad] = useState(false);
  const [data, setData] = useState([]);
  const [item, setItem] = useState([]);
  let [lyrcs, setLyrcs] = useState(null);
  let [number, setNumber] = useState(1);
  

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

  let url = `https://rickandmortyapi.com/api/location/${number}`;
 
  useEffect(() => {
    (async function () {
      const data = await fetch(url).then((res) => res.json());
      setItem(data);

      const x = await Promise.all(
        data.residents.map((item) => {
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
        <span className="discription">Dimension:  {item.dimension}</span>
        <span className="planet">Type : {item.type}</span>
      </div>
      <div className="container total d-flex">
        <div className="b1">
          <select
            className="cars form-select select"
            aria-label="Disabled select example"
            onChange={(e) => setNumber(e.target.value)}
          >      
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  <option>10</option>
                  <option>11</option>
                  <option>12</option>
                  <option>13</option>
                  <option>14</option>
                  <option>15</option>
                  <option>16</option>
                  <option>17</option>
                  <option>18</option>
                  <option>19</option>
                  <option>20</option>
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
