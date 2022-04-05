import {useState} from 'react'
import { randomColor } from "randomcolor";


export default function Tags({tags, setTags}) {
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

    </div>
  )
}
