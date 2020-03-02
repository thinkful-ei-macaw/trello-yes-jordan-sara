import React from 'react';
import Card from './Card'
import './List.css';



function List(props){


  //returns an array of elements

const cards = props.cards.map(card => 
<Card key={card.id} title={card.title} content={card.content} />)

  return (
    <section className="List">
    <header className="List-header"><h2>{props.header}</h2></header>
    <div className="List-cards">
      {cards}
      
    </div>
    <button type="button" class="List-add-button">+ Add Random Card
      </button>
    </section>
  );
}

export default List;