// src/BookPage.js
import React from 'react';
import Book from './Book';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const BookPage = () => {
  const book = {
    title: 'One Piece',
    author: 'Eiichiro Oda',
    description: '"One Piece" is a captivating Japanese manga masterpiece created by Eiichiro Oda. It unfolds a grand saga of adventure and camaraderie in a richly detailed world of vast oceans and islands. The story follows Monkey D. Luffy, an ambitious and carefree young pirate with a dream of becoming the Pirate King. Possessing the ability to stretch his body like rubber after consuming a supernatural fruit, Luffy assembles a diverse crew of friends known as the Straw Hat Pirates. As they navigate treacherous waters, they encounter fierce rivals, menacing pirates, enigmatic islands, and ancient mysteries. Luffy and his crew strive to find the elusive "One Piece," a legendary treasure said to grant ultimate power and authority over the seas. Along their journey, they forge unbreakable bonds, face epic battles, and unearth the hidden histories of a world shaped by past conflicts. The manga masterfully balances action-packed battles with humor, heartwarming moments, and profound themes of friendship, loyalty, and the pursuit of dreams. Eiichiro Odas intricate storytelling weaves an expansive narrative filled with intricate plotlines, well-developed characters, and unforeseen twists that keep readers hooked. Through its exploration of diverse cultures and the complexities of morality, "One Piece" transcends its genre, resonating with audiences of all ages. With its enduring popularity since its inception in 1997, "One Piece" has become a global phenomenon that continues to captivate readers and fans worldwide. As of my last update in September 2021, the manga remains an ongoing adventure, celebrated for its imaginative world-building, powerful character growth, and the spirit of boundless exploration that defines its essence.',
  };

  return (
    <div className="book-page">
      <Navbar/>
      <br></br>
      <Book title={book.title} author={book.author} description={book.description} />
      <div><Footer/></div>
    </div>
  
  );
};

export default BookPage;
