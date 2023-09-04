import React from 'react';
export default function Carousel() {
  return (
    <div id="carouselExampleRide" className="carousel slide" data-bs-ride="true">
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="3000">
      <img src="https://r4.wallpaperflare.com/wallpaper/662/990/531/fantasy-book-hd-wallpaper-729c189dbe1a8c0375bb313fab1e3b94.jpg" className="d-block w-100" alt="Image not found error 404"/>
      <div className="carousel-caption d-none d-md-block">
        <p className='head'>WELCOME</p>
        <p>To the World's biggest Library:</p>
        <p>All Books @ ViBooks.com</p>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="3000">
      <img src="https://r4.wallpaperflare.com/wallpaper/526/8/1002/library-interior-interior-design-books-wallpaper-5980889d712afd2bf6f7989fc0a1b69d.jpg" className="d-block w-100" alt="Image not found error 404"/>
      <div className="carousel-caption d-none d-md-block">
        <p className='head'>Find your favourite book.</p>
        <p>And jump into a whole new world.</p>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="3000">
      <img src="https://r4.wallpaperflare.com/wallpaper/779/934/569/magic-book-runes-book-dark-magic-hd-wallpaper-db66bc5d83d1ef9965c44b392d3c5ce0.jpg" className="d-block w-100" alt="Image not found error 404"/>
      <div className="carousel-caption d-none d-md-block">
        <p className='head'>JOIN THE JOURNEY</p>
        <p>Experience the beauty and culture of the different parts of this world.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  )
}