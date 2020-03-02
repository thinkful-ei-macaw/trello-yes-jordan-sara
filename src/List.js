import React from 'react';
import card from './Card'
import app from './App'
import store from './store'



function List(header, cards){

  //get title and content from cards
  //title = title.cards
  //content=content.cards

  //Card(title, content)

  return (
    <div>
    <header>{header}</header>
    <div className="List-cards">

    </div>

    </div>
  );
}

export default List;