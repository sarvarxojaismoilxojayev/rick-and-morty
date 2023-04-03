import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import "../Styles/Catalog.css";
import Load from "./Load";
import "../Styles/Header.css";

export default function Api() {
  const [product, setProdct] = useState([]);
  const [value, setValue] = useState("character");
  const [post, setPost] = useState('')
  const [result, setResult] = useState("");
  const [load, setLoad] = useState(false);
  let [lyrcs, setLyrcs] = useState(null);
  const [api, setApi] = useState('')
  const dispatch = useDispatch()


  let url = `https://rickandmortyapi.com/api/${value}/?name=${post}&status=${api}`

  useEffect((e) => {
    async function app() {
      setLoad(true);
      let res = await axios.get(url).catch((err) => alert(err))
      setProdct(res.data.results);
      setLoad(true);
    }
    app();
  }, [url]);

  function handleSubmit(e) {
    e.preventDefault();
    setPost(result)
    console.log(result);

  }


  function clickBtn() {
    setApi("alive")
  }

  function clickTwo() {
    setApi("dead")
  }

  function clickThre() {
    setApi("unknown")
  }

  function location(e) {
    setApi("")
  }


  return (
    <div>
      {load ? lyrcs : <Load />}
      <div>
        <div className="search-page container">
          <span className="h1 d-block">Characters</span>
          <form action="" className="Control" onSubmit={handleSubmit}>
            <input
              type="text"
              className="form-control search-input"
              placeholder="Search for characters"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              value={result}
              onChange={e => setResult(e.target.value)}
            />
            <button type="button" className="btn btn-primary" onClick={handleSubmit}>
              Search
            </button>
          </form>
        </div>
      </div>
      <div className="container d-flex Maps">
        <div className="menu">
          <div class="dropdown">
            <div className="filter">
              <span className="d-block h1 title">Filter</span>
              <button className="clear-btn text-primary" onClick={location}>Clear Filters</button>
            </div>
            <button
              class="btn btn-secondary dropdown-toggle temp text-primary"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Dropdown button
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <button class="dropdown-item text-primary" onClick={clickBtn}>
                Alive
              </button>
              <button class="dropdown-item text-primary" onClick={clickTwo}>
                Dead
              </button>
              <button class="dropdown-item text-primary" onClick={clickThre}>
                Unknown
              </button>
            </div>
          </div>
        </div>
        <div className="items">
          {product.map((i) => {
            const active = () => {
              if (i.status === "Alive") {
                return "green";
              } else if (i.status === "Dead") {
                return "dead";
              } else if (i.status === "unknown") {
                return "uncown";
              }
            };
            return (
              <div className="catalog" key={crypto.randomUUID()}>
                <img src={i.image} alt="" className="img-item" width="260px" />
                <div className="inf">
                  <span className={active()}>{i.status}</span>
                  <span className="name h2 d-block">{i.name}</span>
                  <span className="location d-block mt-4">Last Location</span>
                  <span className="d-block h5 mt-1">{i.location?.name}</span>
                  <Link className="link text-decoration-none btn btn-primary" to={`/${i.id}`}>
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
