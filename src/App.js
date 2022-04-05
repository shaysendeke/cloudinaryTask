import logo from './logo.svg';
import './App.css';
import Pics from './components/Pics';
import { useState } from 'react';
import PhotosByTag from './components/PhotosByTag';
import Tags from './components/Tags';

const tagsList = [
  { title: "TAG 1", color: "blue" },
  { title: "TAG 2", color: "red" },
  { title: "TAG 3", color: "purple" }
];
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

const taggedPhotosInit = {};


function App() {
  const [photos, setPhotos] = useState([]);
  const [taggedPhotos, setTaggedPhotos] = useState(taggedPhotosInit);
  const [tags, setTags] = useState(tagsList);
  const [currentPhoto, setCurrentPhoto] = useState("");
  const [currentTag, setCurrentTag] = useState("");

  return (
    <div className="App">
      <Tags
      tags={tags}
      setTags={setTags}
      photos={photos}
      setPhotos={setPhotos}
      currentPhoto={currentPhoto} 
      setCurrentPhoto={setCurrentPhoto}
      taggedPhotos={taggedPhotos}
      setTaggedPhotos={setTaggedPhotos}
      currentTag={currentTag}
      setCurrentTag={setCurrentTag}
      pics={pics}
      ></Tags>
      <Pics setCurrentPhoto={setCurrentPhoto} pics={pics}></Pics>
      <PhotosByTag
      tags={tags}
      taggedPhotos={taggedPhotos}
      setTaggedPhotos={setTaggedPhotos}
      ></PhotosByTag>
    </div>
  );
}

export default App;
