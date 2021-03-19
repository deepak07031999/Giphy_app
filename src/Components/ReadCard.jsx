import React from 'react'

export default function Card(props) {

  const deletebtn = () => {
    const newGiphy = {
      url: props.giphyUrl
    }
    props.deleteGiphy(newGiphy);
  };

  return (
    <div className="card-inline" style={{ width: "17rem", border: "1px solid black", margin: "5px" }}>
      <div className="card-body ">
        <div className="card-image-myimg" >
          <img id="myimg1" className="myimg myimg1" src={props.giphyimage} alt={props.giphyUrl} />
          <img id="myimg2" className="myimg myimg2" src={props.giphyUrl} alt={"Server not Working..."} />
        </div>
        <button type="submit" className="btn btn-primary" onClick={() => { deletebtn(); }}
          style={{ width: "14rem", margin: "5px" }}>
          Delete
        </button>
      </div>
    </div>
  )
}
