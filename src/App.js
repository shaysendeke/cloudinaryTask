import logo from './logo.svg';
import './App.css';
import Pics from './components/Pics';
import { useState } from 'react';
import PhotosByTag from './components/PhotosByTag';
import Tags from './components/Tags';

const tagsList = [
  { title: "TAG 1", color: "blue" },
  { title: "TAG 2", color: "red" },
  { title: "TAG 3", color: "grey" }
];


function App() {
  const [photos, setPhotos] = useState([]);
  const [taggedPhotos, setTaggedPhotos] = useState([]);
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
      ></Tags>
      <Pics></Pics>
      <PhotosByTag
      tags={tags}
      taggedPhotos={taggedPhotos}
      setTaggedPhotos={setTaggedPhotos}
      ></PhotosByTag>
    </div>
  );
}

export default App;
