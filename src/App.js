import logo from './logo.svg';
import './App.css';
import Pics from './components/Pics';
import { useState } from 'react';
import PhotosByTag from './components/PhotosByTag';
import Tags from './components/Tags';

function App() {
  const [photos, setPhotos] = useState([]);
  const [taggedPhotos, setTaggedPhotos] = useState([]);
  const [tags, setTags] = useState();
  const [currentPhoto, setCurrentPhoto] = useState("");
  const [currentTag, setCurrentTag] = useState("");

  return (
    <div className="App">
      <Tags
      tags={tags} setTags={setTags}
      ></Tags>
      <Pics></Pics>
      <PhotosByTag></PhotosByTag>
    </div>
  );
}

export default App;
