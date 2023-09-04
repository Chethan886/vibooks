// src/Book.js
import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({ title, author, description }) => {
  return (
    <div className="book">
      <h2>{title}</h2>
      <div className='down'>
      <img src='https://w0.peakpx.com/wallpaper/242/1007/HD-wallpaper-one-piece-luffy-anime-luffy-monkey-d-luffy-mugiwara-one-piece.jpg'/>
      <br></br>
      <br></br>
      <Link to="/one" className="btn btn-dark">Read now</Link>

      </div>
      <p>By {author}</p>
      <h3>Introduction</h3>
      <div className="intro">
      {description}
      </div>
    </div>
  );
};

export default Book;
