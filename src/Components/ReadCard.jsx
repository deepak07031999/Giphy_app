import React from 'react'
// import  { useState, useEffect } from 'react'

export default function Card(props) {
  // const[description,setdescription]=useState('');
  // const[id,setid]=useState('');
  // useEffect(() => {
  //  setdescription(props.description);
  //  setid(props.id);
  //     });
  const deletebtn = () => {
    const newGiphy={
      url:props.giphyUrl,
      id:props.id
    }
    props.deleteGiphy(newGiphy);
};

  return (
    <div className="card-inline" style={{ width: "17rem", border: "1px solid black", margin: "5px" }}>
      <div className="card-body ">
        {/* <div className="card-image-myimg" ><img className="myimg" src={props.giphyUrl} /> </div> */}
        <div className="card-image-myimg" >
          <img id="myimg1" className="myimg myimg1" src={props.giphyimage} 
          alt={props.giphyUrl}
          />
          <img  id="myimg2" className="myimg myimg2" src={props.giphyUrl} 
          alt={"Server not Working..."}
          />
          </div>
        {/* <p className="card-title" >{props.title}</p>
        <p className="card-author"><b>{props.author}</b></p>
        <b><h5>Description</h5></b>
        <p className="card-description" >{props.description}</p> */}
        <button type="submit" className="btn btn-primary" onClick={() => { deletebtn(); }}
          style={{ width: "14rem", margin: "5px" }}
        >
          Delete
                </button>
      </div>
    </div>
  )
}
