import React from "react";
import Unassigned from "./Unassigned";
import "./pics.css";
import './unassigned.css'


export default function Pics({setCurrentPhoto,pics}) {
  
  
  const picsMap = pics.map((pic, id) => (
    <div key={id}>
      <img
        src={pic.src}
        alt="season pic"
        onClick={() => {
            setCurrentPhoto(pic.id);
          }}
        
      ></img>
    </div>
  ));

  return (
    <div >
        <section className="unassigned"> unassigend photos
      <section className="picsDiv">{picsMap}</section>
      </section>
    </div>
  );
}
