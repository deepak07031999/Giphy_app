import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Header from './Header';
import ReadCard from './ReadCard';
import { useHistory } from "react-router-dom";

export default function ReadNow(props) {
  const history = useHistory();
  const [favoriteGiphyList, setFavoriteGiphyList] = useState([]);
  const [image, setImage] = useState([]);
  const defaultImg = "https://visualpharm.com/assets/30/User-595b40b85ba036ed117da56f.svg";

  const checkuser = () => {
    if (localStorage.getItem('isAuthenticated') === 'true');
    else {
      alert("Invalid Username &password");
      history.push("/login")
    }
  }
  const start = () => {
    axios.get("http://localhost:3100/users")
      .then((res) => {
        const userdata = (res.data.filter((user) => user.username === localStorage.getItem('username')));
        setFavoriteGiphyList(userdata[0].giphy);
        if (userdata[0].image === "") {
          setImage(defaultImg);
        }
        else setImage(userdata[0].image)
      })
  }

  useEffect(() => {
    checkuser();
    start();

  }, []);

  const deleteGiphy = (newGiphy) => {
    axios
      .get('http://localhost:3100/users')
      .then((res) => {
        const userdata = (res.data.filter((user) => user.username === localStorage.getItem('username')));
        const temp = [];
        for (let i = 0; i < userdata[0].giphy.length; i++) {
          if (userdata[0].giphy[i].url === newGiphy.url) continue;
          temp.push(userdata[0].giphy[i]);
        }
        userdata[0].giphy = temp;
        axios.put(`http://localhost:3100/users/${userdata[0].id}`, userdata[0], {
            headers: { 'Content-Type': 'application/json' },
          })
          .then(function (response) {
            if (response.status === 200) {
              setFavoriteGiphyList(userdata[0].giphy);
            }
          })
          .catch(function (error) {
          });
      })
  };

  return (
    <div>
      <Header
        username={localStorage.getItem('username')} 
        image={image}/>
      <div className='container' >
        <div className='row' style={{ width: "max" }}>
          {favoriteGiphyList.map((giphy) => (
            <ReadCard
              giphyUrl={giphy.url}
              giphyimage={giphy.image}
              deleteGiphy={deleteGiphy}
            />
            ))
          }
        </div>
      </div>
    </div>
  )
}
