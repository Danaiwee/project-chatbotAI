import React from 'react'
import './features.css';
import Feature from '../../components/feature/Feature';

const Features = () => {
  const featuresData = [
    {
      title: 'Improving and dustrusts instantly',
      text: 'From they find john he gave of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded'
    },
    {
      title:'Become the tended active',
      text:'Considered sympathize ten uncommonly occasional assitance sufficient not. Letter of an become he tended active enable to.'
    },
    {
      title: 'Message or am nothing',
      text: 'Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.'
    },
    {
      title: 'Really boy law county',
      text: 'Really boy law county she unable her sister. Feet you off its like six. Among sex are leave law built now. In built table in an rapid blush.'
    }
  ]
  return (
    <div id='features' className='gpt3__features section__padding'>
      <div className='gpt3__features-heading'>
        <h1 className='gradient__text'>The Future is Now and You Just Need to Realize It. Step into Future Today & Make it Happen.</h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className='gpt3__features-feature'>
       {featuresData.map((item, i)=> (
        <Feature title={item.title} text={item.text} key={i} />
       ))}
      </div>
    </div>
  )
}

export default Features