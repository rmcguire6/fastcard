import React from 'react';
import Card from './Card'


const CardList =({list}) => {
return (
  <div className="list">
  {list.map((word) => (
        <Card key={word.id} word={word.word}/>
        ))}
  </div>
  )
}
export {CardList as default}