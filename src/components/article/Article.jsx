import React from 'react'
import './article.css';

const Article = ({image, text}) => {

  return (
    <div className='gpt3__article'>
      <div className='gpt3__article-image'>
        <img src={image} alt="imageBlog" />
      </div>
      <div className='gpt3__article-content'>
        <p>Sep 26, 2021</p>
        <h3>{text}</h3>
      </div>
      <p>Read Full article</p>
    </div>
  )
}

export default Article;