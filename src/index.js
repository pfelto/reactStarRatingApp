import React from 'react';
import ReactDOM from 'react-dom';
import StarRating from './starRating';
import './index.css';


//star and starRating component to work on state in React
//first start with a stateless functional component for star that is just a clickable star
//Next we will create a starRating App which prints out 5 stars and we can select how many stars

ReactDOM.render(<StarRating />, document.getElementById('root'));
