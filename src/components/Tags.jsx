import {useState} from 'react'
import { randomColor } from "randomcolor";
import { AiOutlineEdit, AiFillDelete } from "react-icons/ai";
import './tags.css'

export default function Tags({tags, setTags, photos, setPhotos, currentPhoto, setCurrentPhoto, taggedPhotos, setTaggedPhotos, currentTag, setCurrentTag
,pics}) {
    const [newTag, setNewTag] = useState("");
    const addNewTag = (tagName) => {
        if (tags.some((tag) => tag.title === tagName) || !tagName) {
          console.log("error");
          return;
        }
        const tagObj = { title: newTag, color: randomColor() };
        setTags([...tags, tagObj]);
        setNewTag("");
      };
      const title = currentPhoto
      ? `photo ${currentPhoto?.userId} - Assigned tags`
      : "Available Tags";

      const style = { border: `1px solid ${currentTag.color}` };

      const editTagName = (tagName) => {};

      const deleteTag = (tagName) => {
        const temp = [...tags].filter((tag) => tag.title !== tagName);
        setTags(temp);
      };

      const tagPhoto = (tagName) => {
        
        //currentPhoto.tag = tagName.title;
        const temp = [...pics].filter((photo) => photo.id === currentPhoto);
        if(taggedPhotos[tagName.title]){
            taggedPhotos[tagName.title].photos.push(temp[0])
        }
        else{
            taggedPhotos[tagName.title] = {};
            taggedPhotos[tagName.title].photos= [];
            taggedPhotos[tagName.title].photos.push(temp[0])
        }
        console.log(taggedPhotos);
        setTaggedPhotos(taggedPhotos);
        //setPhotos(temp);
        setCurrentPhoto("");
        setCurrentTag("");
      };
    
    

  
    

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addNewTag(newTag);
        }}
      >
        <input
          type="text"
          placeholder="New tag..."
          value={newTag}
          onChange={(e) => {
            setNewTag(e.target.value);
          }}
        />
        <input type="submit" value="save" />
      </form>
      <div className="TagsList">
        <p>{title}</p>
        {tags.map((tag) => {
          return (
            <li
              style={
                (currentTag?.title === tag.title && style) || {
                  background: tag.color
                }
              }
              key={tag.title}
              onClick={() => setCurrentTag(tag)}
              onDoubleClick={() => setCurrentTag("")}
            >
              {tag.title}
              <span>
                {
                  <AiOutlineEdit
                    title="Rename"
                    onClick={() => editTagName(tag.title)}
                  />
                }
                {
                  <AiFillDelete
                    title="Delete"
                    onClick={() => deleteTag(tag.title)}
                  />
                }
              </span>
            </li>
            /*: <input type="text" value={tag.label}/>*/
            /*: <input type="text" value={tag.label}/>*/
            /*: <input type="text" value={tag.label}/>*/
            /*: <input type="text" value={tag.label}/>*/
            /*: <input type="text" value={tag.label}/>*/
           /*: <input type="text" value={tag.label}/>*/);
        })}
      {currentPhoto}
        {currentTag && currentPhoto ? 
          <button
            onClick={() => {
              tagPhoto(currentTag);
            }}
          >
            Apply
          </button>
         : null} 
      </div>

    </div>
  )
}
