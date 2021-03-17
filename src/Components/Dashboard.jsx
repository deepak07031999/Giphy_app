import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Card from './Card';
// import Card from './card/Card';
export default function Dashboard() {

  const limit=20;
  const apikey="idUSQLedlFRlsJ0JEGQwM4vd689Ocyo9";
  const [trending, setTrending] = useState([]);
  const [search, setSearch] = useState([]);
  // const Api=b909d678e82f454a84d8487e1da59893;
  useEffect(() => {
    axios.get(`https://api.giphy.com/v1/gifs/trending?api_key=${apikey}&limit=${limit}&rating=g`)
      .then((res) => {
        setTrending(res.data.data);
        // console.log(trending);
      })
  }, []);

  const saveGiphy = (newGiphy) => {
    axios
      .post('http://localhost:3100/giphy', newGiphy, {
        headers: { 'Content-Type': 'application/json' },
      })
      .then(function (response) {
        if (response.status === 201) {

        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };


  const searchGiphy= ()=>{
    // const url=`https://api.giphy.com/v1/gifs/search?api_key=idUSQLedlFRlsJ0JEGQwM4vd689Ocyo9&q=${search}&limit=12&offset=0&rating=g&lang=en`
    const url=`https://api.giphy.com/v1/gifs/search?api_key=${apikey}&q=${search}&limit=${limit}&offset=0&rating=g&lang=en`
  
    axios.get(url)
      .then((res) => {
        setTrending(res.data.data);
        console.log(trending);
      })

    console.log(url);
    setSearch("");
  }

  return (
    <div className='container'>
      <div className="search-bar">
        <div className="input-group">
          <div className="form-outline " style={{ background: "transparent", width: "80%", height: "10%" }}>
            <input type="search" 
            placeholder="Search the Giphy" 
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
            id="form1" className="form-control" 
            />
          </div>
          <div className="d-inline" >
          <button type="button" id="searchbtn" className="btn btn-primary" onClick={()=>{
          searchGiphy();}}
          style={{width:"5rem" }}
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
  )
}
