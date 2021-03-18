import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Card from './Card';
import Header from './Header';
import { useHistory } from "react-router-dom";
// import Card from './card/Card';
export default function Dashboard(props) {

  const limit = 20;
  const apikey = "idUSQLedlFRlsJ0JEGQwM4vd689Ocyo9";
  const history = useHistory();
  const [trending, setTrending] = useState([]);
  const [search, setSearch] = useState([]);
  //const [userdata, setUserdata] = useState([]);
  const [alluser, setAlluser] = useState([]);
  // const Api=b909d678e82f454a84d8487e1da59893;
  useEffect(() => {
    if(localStorage.getItem('isAuthenticated') ==='true');
    else
    {
          alert("Invalid ")
          //console.log("wrong")
          history.push("/login")
    }
    axios.get(`https://api.giphy.com/v1/gifs/trending?api_key=${apikey}&limit=${limit}&rating=g`)
      .then((res) => {
        setTrending(res.data.data);
        // console.log(trending);
      })
  }, []);

  const saveGiphy = (newGiphy, username) => {

    axios
      .get('http://localhost:3100/users')
      .then((res) => {
        const userdata=(res.data.filter((user) => user.username === username));
        //console.log(userdata)
        if(userdata.length==0)
        {
          alert("Invalid User login again")
          //console.log("wrong")
          history.push("/login")
        }
        else{ 
        userdata[0].giphy.push(newGiphy);
        axios
          .put(`http://localhost:3100/users/${userdata[0].id}`, userdata[0], {
            headers: { 'Content-Type': 'application/json' },
          })
          .then(function (response) {
            if (response.status === 201) {
            }
          })
          .catch(function (error) {
            //console.log(error);
          });
        }                
        
      })
  };


  const searchGiphy = () => {
    // const url=`https://api.giphy.com/v1/gifs/search?api_key=idUSQLedlFRlsJ0JEGQwM4vd689Ocyo9&q=${search}&limit=12&offset=0&rating=g&lang=en`
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apikey}&q=${search}&limit=${limit}&offset=0&rating=g&lang=en`

    axios.get(url)
      .then((res) => {
        setTrending(res.data.data);
        //console.log(trending);
      })

    //console.log(url);
    setSearch("");
  }

  return (
    <div>
      <Header
        username={localStorage.getItem('username')}
      />
      <div className='container'>
        {/* <h1>{props.match.params.username}</h1> */}
        <div className="search-bar">
          <div className="input-group">
            <div className="form-outline " style={{ background: "transparent", width: "80%", height: "10%" }}>
              <input type="search"
                placeholder="Search the Giphy"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                id="form1" className="form-control"
              />
            </div>
            <div className="d-inline" >
              <button type="button" id="searchbtn" className="btn btn-primary" onClick={() => {
                searchGiphy();
              }}
                style={{ width: "5rem" }}
              >
                <i className="fas fa-search"></i>
              </button>

            </div>

          </div>
        </div>

        <div className='row' style={{ width: "max" }}>
          {trending.map((giphy) => (
            <Card
              // giphyUrl={giphy.images.fixed_height_small.url}
              username={localStorage.getItem('username')}
              giphyimage={giphy.images.fixed_width_small_still.url}
              giphyUrl={giphy.images.fixed_width_small.url}
              saveGiphy={saveGiphy}
            // title={news.title}
            // author={news.author}
            // readLater={readLater}
            // description={news.description}
            // url={news.url}
            />
          ))
          }
          {/* <div className="col-md-6 mt-4">
                        <AddContact addContact={saveContact}/>
                </div> */}

        </div>
      </div>
    </div>
  )
}
