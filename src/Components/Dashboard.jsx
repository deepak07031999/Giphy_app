import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Card from './Card';
import Header from './Header';
import { useHistory } from "react-router-dom";

export default function Dashboard(props) {
  const apikey = "idUSQLedlFRlsJ0JEGQwM4vd689Ocyo9";
  const history = useHistory();
  const [trending, setTrending] = useState([]);
  const [search, setSearch] = useState([]);
  // const [image, setImage] = useState([]);
  const [limit, setLimit] = useState(20);
  
  const checkuser = () => {
    if (localStorage.getItem('isAuthenticated') === 'true');
    else {
      alert("Invalid User");
      history.push("/login")
    }
  }
  const fetchGiphy = () => {
    axios.get(`https://api.giphy.com/v1/gifs/trending?api_key=${apikey}&limit=${limit}&rating=g`)
      .then((res) => {
        setTrending(res.data.data);
      })
  }

  // const start = () => {
  //   axios
  //     .get('http://localhost:3100/users')
  //     .then((res) => {
  //       const userdata = (res.data.filter((user) => user.username === localStorage.getItem('username')));
  //       if (userdata[0].image === "") setImage(defaultImg);
  //       else setImage(userdata[0].image)

  //     })
  // }

  useEffect(() => {
    checkuser();
    // start();
    fetchGiphy();
  }, [limit]);

  const searchGiphy = () => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apikey}&q=${search}&limit=${limit}&offset=0&rating=g&lang=en`
    axios.get(url)
      .then((res) => {
        setTrending(res.data.data);
      })
    setSearch("");
  }

  return (
    <div>
      <Header/>
      <div className='container'>
        <div className="search-bar">
          <div className="input-group">
            <div className="form-outline " style={{ background: "transparent", width: "80%", height: "10%" }}>
              <input type="search" placeholder="Search the Giphy" value={search}
                onChange={(e) => setSearch(e.target.value)} id="form1" className="form-control"
              />
            </div>
            <div className="d-inline" >
              <button type="button" id="searchbtn" className="btn btn-primary"
                onClick={() => { searchGiphy(); }}
                style={{ width: "5rem" }}>
                <i className="fas fa-search"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="mb-3" style={{ margin: "5rem" }}>
          <input type="text" placeholder="Number of giphy" className="form-control"
            style={{ width: "10rem", position: "absolute", right: "5rem", top: "8rem" }} value={limit}
            onChange={(e) => { setLimit(e.target.value) }} />
        </div>

        <div className='row ' style={{ width: "max" }}>
          {trending.map((giphy) => (
            <Card
              id={giphy.id}
              key={giphy.id}
              username={localStorage.getItem('username')}
              giphyimage={giphy.images.fixed_width_small_still.url}
              giphyUrl={giphy.images.fixed_width_small.url}
            />
          ))
          }
        </div>
      </div>
    </div>
  )
}
