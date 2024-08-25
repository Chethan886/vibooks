
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Cards = () => {
  const [books, setBooks] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [updateFormData, setUpdateFormData] = useState({
    title: '',
    author: '',
    imageUrl: '',
    description: '',
    genre: '',
  });

  useEffect(() => {
    // Fetch books from your server's API endpoint (e.g., /api/books)
    const fetchBooks = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/books');
        setBooks(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBooks();
  }, []);

  const handleDeleteBook = async (bookId) => {
    try {
      // Send a DELETE request to delete the book by its ID
      await axios.delete(`http://localhost:3001/api/books/${bookId}`);

      // After successful deletion, update the list of books on the client-side
      setBooks((prevBooks) => prevBooks.filter((book) => book._id !== bookId));
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdateFormDataChange = (e) => {
    const { name, value } = e.target;
    setUpdateFormData({ ...updateFormData, [name]: value });
  };

  const handleUpdateBook = async (bookId) => {
    try {
      // Send a PUT request to update the book by its ID with the updated data
      await axios.put(`http://localhost:3001/api/books/${bookId}`, updateFormData);

      // After successful update, reload the list of books
      const response = await axios.get('http://localhost:3001/api/books');
      setBooks(response.data);

      // Clear the update form data
      setUpdateFormData({
        title: '',
        author: '',
        imageUrl: '',
        description: '',
        genre: '',
      });
    } catch (error) {
      console.error(error);
    }
  };

  // Filter the books based on selectedGenre and searchQuery
  const filteredBooks = books.filter((book) => {
    const matchesGenre = selectedGenre === 'All' || book.genre === selectedGenre;
    const lowerCaseSearchQuery = searchQuery.toLowerCase();
    const matchesTitle = book.title.toLowerCase().includes(lowerCaseSearchQuery);
    const matchesAuthor = book.author.toLowerCase().includes(lowerCaseSearchQuery);
    return matchesGenre && (matchesTitle || matchesAuthor);
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 mb-4">
          {/* Search input */}
          <input
            type="text"
            placeholder="Search by title or author..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="form-control"
          />
          {/* Filter buttons */}
          {['All', 'Mystery', 'Science Fiction', 'Romance', 'Fantasy'].map((genre) => (
            <button
              key={genre}
              className={`btn btn-${selectedGenre === genre ? 'primary' : 'secondary'} mx-2`}
              onClick={() => setSelectedGenre(genre)}
            >
              {genre}
            </button>
          ))}
        </div>
        {filteredBooks.map((book) => (
          <div key={book._id} className="col-md-3 mb-4">
            <div className="card h-100">
              {/* Kebab menu in the top-right corner */}
              <div className="kebab-menu">
                <div className="dropdown">
                  <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    id={`kebab-menu-${book._id}`}
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    ...
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end" aria-labelledby={`kebab-menu-${book._id}`}>
                    <li>
                      <div className="update-book-form">
                        <form onSubmit={() => handleUpdateBook(book._id)}>
                          <div className="mb-3">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Title"
                              name="title"
                              value={updateFormData.title}
                              onChange={handleUpdateFormDataChange}
                            />
                          </div>
                          <div className="mb-3">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Author"
                              name="author"
                              value={updateFormData.author}
                              onChange={handleUpdateFormDataChange}
                            />
                          </div>
                          <div className="mb-3">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Image URL"
                              name="imageUrl"
                              value={updateFormData.imageUrl}
                              onChange={handleUpdateFormDataChange}
                            />
                          </div>
                          <div className="mb-3">
                            <textarea
                              className="form-control"
                              placeholder="Description"
                              name="description"
                              value={updateFormData.description}
                              onChange={handleUpdateFormDataChange}
                            />
                          </div>
                          <div className="mb-3">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Genre"
                              name="genre"
                              value={updateFormData.genre}
                              onChange={handleUpdateFormDataChange}
                            />
                          </div>
                          <button type="submit" className="btn btn-primary">Update Book</button>
                        </form>
                      </div>
                    </li>
                    <li>
                      <button
                        className="btn btn-warning"
                        onClick={() => handleDeleteBook(book._id)}
                      >
                        Delete
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              {/* Card content */}
              <img src={book.imageUrl} className="image" alt={book.title} />
              <div className="card-body">
                <h5 className="card-title">{book.title}</h5>
                <p className="card-text">Author: {book.author}</p>
                <p className="card-text">Genre: {book.genre}</p>
                <Link to="/dub" className="btn btn-info">Read now</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;




