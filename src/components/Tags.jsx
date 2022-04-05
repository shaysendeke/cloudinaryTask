import {useState} from 'react'
import { randomColor } from "randomcolor";
import './tags.css'

export default function Tags({tags, setTags, photos, setPhotos, currentPhoto, SetCurrentPhoto, taggedPhotos, setTaggedPhotos, currentTag, setCurrentTag
}) {
    const [newTag, setNewTag] = useState("");
    const addNewTag = (tagName) => {
        if (tags.some((tag) => tag.label === tagName) || !tagName) {
          console.log("error");
          return;
        }
        const tagObj = { label: newTag, color: randomColor() };
        setTags([...tags, tagObj]);
        setNewTag("");
      };
      const title = currentPhoto
      ? `photo ${currentPhoto?.userId} - Assigned tags`
      : "Available Tags";

      const style = { border: `1px solid ${currentTag.color}` };

      const editTagName = (tagName) => {};

      const deleteTag = (tagName) => {
        const temp = [...tags].filter((tag) => tag.label !== tagName);
        setTags(temp);
      };

      const tagPhoto = (tagName) => {
        currentPhoto.tag = tagName.label;
        const temp = [...photos].filter((photo) => photo.id !== currentPhoto.id);
        setTaggedPhotos([...taggedPhotos, currentPhoto]);
        setPhotos(temp);
        // setCurrentPhoto("");
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
              {tag.label}
              {/* <span>
                {
                  <AiOutlineEdit
                    title="Rename"
                    onClick={() => editTagName(tag.label)}
                  />
                }
                {
                  <AiFillDelete
                    title="Delete"
                    onClick={() => deleteTag(tag.label)}
                  />
                }
              </span> */}
            </li>
            /*: <input type="text" value={tag.label}/>*/
            /*: <input type="text" value={tag.label}/>*/
            /*: <input type="text" value={tag.label}/>*/
            /*: <input type="text" value={tag.label}/>*/
            /*: <input type="text" value={tag.label}/>*/
           /*: <input type="text" value={tag.label}/>*/);
        })}
        {currentTag && currentPhoto ? (
          <button
            onClick={() => {
              tagPhoto(currentTag);
            }}
          >
            Apply
          </button>
        ) : null}
      </div>

    </div>
  )
}
