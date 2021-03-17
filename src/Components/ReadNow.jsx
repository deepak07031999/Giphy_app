import axios from 'axios';
import React, { useState, useEffect } from 'react';
import ReadCard from './ReadCard';

export default function ReadNow() {
    const [favoriteGiphyList, setFavoriteGiphyList] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3100/giphy")
            .then((res) => {
                setFavoriteGiphyList(res.data);
            })
    }, []);
    const deleteGiphy = (newGiphy) => {
        axios
          .delete(`http://localhost:3100/giphy/${newGiphy.id}`, {
            headers: { 'Content-Type': 'application/json' },
          })
          .then((response) => {
            if (response.status === 200) {
                setFavoriteGiphyList(favoriteGiphyList.filter((favoriteGiphy) => favoriteGiphy.id !== newGiphy.id));
            }
          });
      };
    return (
        <div className='container' >
            <div className='row' style={{ width: "max" }}>
                {favoriteGiphyList.map((giphy) => (
                    <ReadCard
                        giphyUrl={giphy.url}
                        id={giphy.id}
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
    )
}
