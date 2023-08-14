import React, { useState } from 'react';

export default function UploadPage() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const [image, setImage] = useState(null);

  const handleUpload = () => {
    // Here, you can implement your logic to upload the book data to your backend (e.g., MongoDB)
    // You can use fetch or any other library to make API requests.
    // Make sure to include necessary error handling and validation.

    // After successful upload, you can redirect the user to another page or show a success message.
  };

  return (
    <div className='containerss'>
      <h2>Upload Your Book</h2>
      <form onSubmit={handleUpload}>
        <div className='form-group'>
          <label>Title</label>
          <input
            type='text'
            className='form-control'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className='form-group'>
          <label>Author</label>
          <input
            type='text'
            className='form-control'
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        <div className='form-group'>
          <label>Genre</label>
          <input
            type='text'
            className='form-control'
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            required
          />
        </div>
        <div className='form-group'>
          <label>Image URL</label>
          <input
            type='text'
            className='form-control'
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
        </div>
        <button type='submit' className='btn btn-primary'>
          Upload
        </button>
      </form>
    </div>
  );
}
