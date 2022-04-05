import React from 'react'
import './photosByTag.css'

export default function PhotosByTag({taggedPhotos}) {
  return (
    <div className='TagContainer'>
        <h1>photos By Tag</h1>
        <div class="tags-container">
        {Object.keys(taggedPhotos).map((tag) => {
          return (
                  <div className="tag-item">
                      <div className="tag-title">{tag}</div>
                      {taggedPhotos[tag].photos.map((photo) => {
                           return (
                      <div className="tag-photo">
                          <img src={photo.src}/>
                          </div>
                      )
                    })}
                    </div>
          )
            })}
            </div>
        
    </div>
  )
}
