import React from 'react'
// import  { useState, useEffect } from 'react'

export default function Card(props) {
  // const[description,setdescription]=useState('');
  // const[id,setid]=useState('');
  // useEffect(() => {
  //  setdescription(props.description);
  //  setid(props.id);
  //     });
  
  const favorite = () => {
    const newGiphy={
      url:props.giphyUrl,
      image:props.giphyimage,
    }
    props.saveGiphy(newGiphy,props.username);
};
    return (
        <div className="card-inline" style={{width:"17rem" ,border:"1px solid black" ,margin:"5px" }}>
        <div className="card-body">
        <div className="card-image-myimg" >
          <img id="myimg1" className="myimg myimg1" src={props.giphyimage} 
          alt={"Server not Working..."}
          />
          <img  id="myimg2" className="myimg myimg2" src={props.giphyUrl} 
          alt={"Server not Working..."}
          />
          </div>
        <button type="submit" className="btn btn-primary" onClick={() => {favorite();}}
          style={{width:"14rem" ,margin:"5px" }}
        >
                Add to Favorite
        </button>
      </div>
    </div>
    )
}
