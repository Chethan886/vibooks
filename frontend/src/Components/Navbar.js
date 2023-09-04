import React from 'react';
import { Link } from 'react-router-dom';
import vilogo from "../Components/vilogo.png";

export default function Navbar() {
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
  return (
    <div >
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/"><img src={vilogo}
                style={{width: '60px'}} alt="logo" />&nbsp;ViBooks</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/about">About us</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/contact">Contact us</Link>
        </li> 
        <li class="nav-item dropdown">
          <a class="nav-link active dropdown-toggle" href="#join" role="button" data-bs-toggle="dropdown" aria-expanded="false"> Join now</a>
          <ul class="dropdown-menu">
          <li><Link className="dropdown-item" to="/signup">Sign-up</Link></li>
            <li><Link className="dropdown-item" to="/login">Login</Link></li>
            <li><hr className="dropdown-divider"/></li>
          </ul>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
    </div>
  )
}