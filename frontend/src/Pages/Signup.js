import React from 'react'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Sform from '../Components/Sform';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
}
from 'mdb-react-ui-kit';
import vilogo from "../Components/vilogo.png";
const Signup = () => {
  return (
    <>
    <Navbar/>
    <MDBContainer className="my-5 gradient-forms">

      <MDBRow>

        <MDBCol col='6' className="mb-5">
          <div className="d-flex flex-column ms-5">

            <div className="text-center">
              <img src={vilogo}
                style={{width: '185px'}} alt="logo" />
              <h4 className="mt-1 mb-5 pb-1">We are The ViBooks Team</h4>
            </div>
            <center>
            <p>Please Create your account</p>

<Sform/></center>
           

          </div>

        </MDBCol>

        <MDBCol col='6' className="mb-5">
          <div className="d-flex flex-column  justify-content-center gradient-custom-2 h-100 mb-4">

            <div className="text-white px-3 py-4 p-md-5 mx-md-4">
              <h4 class="mb-4">We are more than just a company</h4>
              <p class="small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>

          </div>

        </MDBCol>

      </MDBRow>
      
    </MDBContainer>
    <Footer/>
    </>
  );
}

export default Signup;