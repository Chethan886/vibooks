
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken'); // Import JWT library
const app = express();
const PORT = process.env.PORT || 3001;
app.use(cors());

mongoose.connect('mongodb+srv://chethanb886:pool1234dead@cluster0.ydorjmq.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  imageUrl: String,
  description: String,
  genre: String,
});

const Book = mongoose.model('Book', bookSchema);

app.use(bodyParser.json());

app.post('/api/books', async (req, res) => {
  try {
    const { title, author, imageUrl, description, genre } = req.body;

    const newBook = new Book({ title, author, imageUrl, description, genre });

    await newBook.save();

    res.status(201).json({ message: 'Book saved successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String, // You should hash and store passwords securely
});

const User = mongoose.model('User', userSchema);

const formSchema = new mongoose.Schema({
  Name: String,
  email: String,
  Phone: String,
  date: String,
  gender: String,
  country: String,
  state: String,
  password:String,
});

const FormData = mongoose.model('FormData', formSchema);

app.post('/api/register', async (req, res) => {
  try {
    const { Name, email, Phone, date, gender, country, state, password } = req.body;

    // Check if the email is already registered
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'Email already registered' });
    }

    // Hash the password before saving it to the database
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user with the hashed password
    const newUser = new User({ username: Name, email, password: hashedPassword });
    await newUser.save();

    // Create a new FormData document and save it to MongoDB
    const newFormData = new FormData({ Name, email, Phone, date, gender, country, state, password: hashedPassword });
    await newFormData.save();

    res.status(201).json({ message: 'Registration successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});



// Login
app.post('/api/user', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // Verify the password using bcrypt
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // Generate a JWT token
    const secretKey = 'your_secret_key'; // Replace with your secret key
    const token = jwt.sign({ email: user.email }, secretKey, { expiresIn: '1h' });

    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/api/books', async (req, res) => {
  try {
    const books = await Book.find().lean(); // Use .lean() to get plain JavaScript objects
    res.json(books);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/api/books/:id', async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ error: 'Book not found' });
    }
    res.json(book);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// ...

app.put('/api/books/:id', async (req, res) => {
  try {
    const { title, author, imageUrl, description, genre } = req.body;
    const updatedBook = {
      title,
      author,
      imageUrl,
      description,
      genre,
    };
    
    const book = await Book.findByIdAndUpdate(req.params.id, updatedBook, {
      new: true,
    });
    
    if (!book) {
      return res.status(404).json({ error: 'Book not found' });
    }
    
    res.json(book);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// ...


app.delete('/api/books/:id', async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) {
      return res.status(404).json({ error: 'Book not found' });
    }
    res.json({ message: 'Book deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

