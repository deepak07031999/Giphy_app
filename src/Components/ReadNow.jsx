import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Header from './Header';
import ReadCard from './ReadCard';
import { useHistory } from "react-router-dom";

export default function ReadNow(props) {
    const history = useHistory();
    const [favoriteGiphyList, setFavoriteGiphyList] = useState([]);
    useEffect(() => {
        if(localStorage.getItem('isAuthenticated') !=='true')
        {
          alert("Invalid User login again")
          //console.log("wrong")
          history.push("/login")
        }
        axios.get("http://localhost:3100/users")
            .then((res) => {
                const userdata=(res.data.filter((user) => user.username === localStorage.getItem('username')));
                if(userdata.length==0)
                {
                    alert("Invalid User login again")
                    //console.log("wrong")
                    history.push("/login")
                }
                else{
                    setFavoriteGiphyList(userdata[0].giphy);
                }
                
            })
    }, []);

    const deleteGiphy = (newGiphy) => {

    axios
      .get('http://localhost:3100/users')
      .then((res) => {
        const userdata=(res.data.filter((user) => user.username === localStorage.getItem('username')));
        //console.log(userdata)
        // if(userdata.length==0)
        // {
        //   alert("Invalid User login again")
        //   console.log("wrong")
        //   history.push("/login")
        // }
        
        // userdata[0].giphy.push(newGiphy);
        //console.log(userdata[0].giphy.length);
        const temp=[];
        for(let i=0;i<userdata[0].giphy.length;i++)
        {
            if(userdata[0].giphy[i].url===newGiphy.url)continue;
            temp.push(userdata[0].giphy[i]);
        }
        //console.log(temp);
        userdata[0].giphy=temp;
    
        // userdata[0].giphy.filter((giphy)=>giphy.url!==newGiphy.url)
        // console.log(userdata[0].giphy)
        axios
          .put(`http://localhost:3100/users/${userdata[0].id}`, userdata[0], {
            headers: { 'Content-Type': 'application/json' },
          })
          .then(function (response) {
            if (response.status === 200) {
                setFavoriteGiphyList(userdata[0].giphy);
            }
          })
          .catch(function (error) {
            //console.log(error);
          });               
        
      })

        // axios
            // .delete(`http://localhost:3100/giphy/${newGiphy.id}`, {
            //     headers: { 'Content-Type': 'application/json' },
            // })
        //     .then((response) => {
        //         if (response.status === 200) {
        //             setFavoriteGiphyList(favoriteGiphyList.filter((favoriteGiphy) => favoriteGiphy.id !== newGiphy.id));
        //         }
        //     });
    };
    
    return (
        <div>
            <Header 
            username={localStorage.getItem('username')}/>
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
                    {/* <div className="col-md-6 mt-4">
                        <AddContact addContact={saveContact}/>
                </div> */}

                </div>
            </div>
        </div>
    )
}
