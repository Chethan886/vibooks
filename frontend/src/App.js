import {  BrowserRouter as Router, Routes,  Route} from "react-router-dom";
import './App.css';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Signup from './Pages/Signup';
import About from './Pages/About';
import BookPage from './Booking/BookPage';
import UploadPage from "./Pages/UploadPage";
import One from "./Booking/One";
import Login from "./Pages/Login";

function App() {
  const isLoggedIn = true;
return (
  <Router>
    <Routes>
    {isLoggedIn ? (
      <>
     <Route exact path="/"
                 element={<Home />}>
               </Route>
               <Route exact path="/about"
               element={<About />}>
             </Route>
             <Route exact path="/contact"
            element={<Contact />}>
          </Route>
          <Route exact path="/dub"
            element={<BookPage/>}>
          </Route>
          <Route exact path="/one"
                  element={<One />}>
                </Route>
          <Route exact path="/up"
            element={<UploadPage/>}>
          </Route>
          <Route exact path="/signup"
                  element={<Signup />}>
                </Route>
                <Route exact path="/login"
                  element={<Login />}>
                </Route>        
             </>
    
    ) : (
      <Route exact path="/signup"
                  element={<Signup />}>
                </Route>
            
    )}
    </Routes>
  </Router>
);
}
export default App;