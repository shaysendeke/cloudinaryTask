import React from "react";
import Unassigned from "./Unassigned";
import "./pics.css";
import './unassigned.css'


export default function Pics() {
  const pics = [
    {
      src: "https://cdn.pixabay.com/photo/2020/02/08/14/36/trees-4830285__340.jpg",
      id: 1,
    },
    {
      src: "https://cdn.pixabay.com/photo/2021/03/20/10/26/field-6109500__340.jpg",
      id: 2,
    },
    {
      src: "https://cdn.pixabay.com/photo/2017/11/04/08/14/tree-2916763__340.jpg",
      id: 3,
    },
    {
      src: "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072821__340.jpg",
      id: 4,
    },
  ];

  const picsMap = pics.map((pic, id) => (
    <div key={id}>
      <img
        src={pic.src}
        alt="season pic"
        onClick={() => console.log("clicked")}
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
