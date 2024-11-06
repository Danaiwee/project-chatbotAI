import React from 'react'
import './blog.css';
import Article from '../../components/article/Article';
import blog1Image from '../../assets/blog01.png';
import blog2Image from '../../assets/blog02.png';
import blog3Image from '../../assets/blog03.png';
import blog4Image from '../../assets/blog04.png';
import blog5Image from '../../assets/blog05.png';

const Blog = () => {
  const text = 'GPT-3 and Open AI is the future. Let us explore how it is?';
  const articleData = [
    {image: blog2Image},
    {image: blog3Image},
    {image: blog4Image},
    {image: blog5Image}
  ];
  return (
    <div id='blog' className='gpt3__blog section__padding'>
      <div className='gpt3__blog-heading'>
        <h1 className="gradient__text">
          A lot is happenning,<br/> We are blogging about it.
        </h1>
      </div>
      <div className='gpt3__blog-container'>
        <div className='gpt3__blog-container-groupA'>
          <Article image={blog1Image} text='GPT-3 and Open AI is the future. Let us explore how it is?' />
        </div>
        <div className='gpt3__blog-container-groupB'>
          {articleData.map((item, index)=> (
            <Article image={item.image} text={text} key={text+index} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Blog