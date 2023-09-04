// import React, { useEffect, useState } from "react";
// import Axios from "axios";
// import {auth,provider} from './config';
// import { signInWithPopup } from "firebase/auth"; 
// import Home from '../Pages/Home';

// function App() {
// const[value,setValue]=useState('');
//   const handleClick=()=>
//   {
//     signInWithPopup(auth,provider).then((data)=>{
// setValue(data.user.email)
// localStorage.setItem ("email",data.user.email)
//     })
//   }
//   useEffect(()=>{
//     setValue(localStorage.getItem('email'));
//   })
//   const [fdata, setFdata] = useState({
//     Name: "",
//     email: "",
//     Phone: "",
//     date: "",
//     gender: "",
//     country: "India",
//     state: "",
//     adress: "",
//     zip: "",
//   });
//   const [msg, setMsg] = useState();

//   const changeHandler = (e) => {
//     let name1 = e.target.name;
//     let val = e.target.value;
//     setFdata({ ...fdata, [name1]: val });
//   };

//   const submitHandler = (e) => {
//     e.preventDefault();
//     Axios.post("http://localhost:4000/Sform", { fdata }).then((res) => {
//       let ack = res.data;
//       if (ack === "success") {
//         setMsg("Signed in successfully");
//         console.log(msg);
//         alert("Signed in successfully");
//       } else {
//         setMsg("Data not inserted");
//         console.log(msg);
//         alert("Data not inserted");
//       }
//     });
//   };

//   return (
//     <>
//     <div className="soutbox">
//     <div className="form">
//       <form onSubmit={submitHandler}>
//         <div className="form-items">
//           {/* <label>Name:</label> */}
//           <input
//             className="inputfor"
//             type="text"
//             name="Name"
//             value={fdata.Name}
//             placeholder="Enter your name"
//             onChange={changeHandler}
//           />
//         </div>
//         <div className="form-items">
//           {/* <label>Email:</label> */}
//           <input
//             className="inputfor"
//             type="email"
//             name="email"
//             value={fdata.email}
//             placeholder="Enter your email"
//             onChange={changeHandler}
//           />
//         </div>
//         <div className="form-items">
//           {/* <label>Phone number:</label> */}
//           <input
//             className="inputfor"
//             type="Phone"
//             name="Phone"
//             value={fdata.Phone}
//             placeholder="Enter your phone number"
//             onChange={changeHandler}
//           />
//         </div>
//         <div className="form-items">
//           {/* <label>Date of Birth:</label> */}
//           <input
//             className="inputfor"
//             type="date"
//             name="date"
//             value={fdata.date}
//             placeholder="Enter your date of birth"
//             onChange={changeHandler}
//           />
//         </div>
//         {/* <label>Gender:</label>
//             <input 
//             onChange={changeHandler}
//             /> */}
//         <div className="form-items">
//           {/* <label>Gender:</label> */}
//           <select
//             className="ddn"
//             name="gender"
//             value={fdata.gender}
//             onChange={changeHandler}
//           >
//             <option>--Select gender--</option>
//             <option value="male">Male</option>
//             <option value="female">Female</option>
//             <option value="female">Other</option>
//           </select>
//         </div>

//         <div className="form-items">
//           {/* <label>Country:</label> */}
//           <input
//             className="inputfor"
//             type="text"
//             name="country"
//             value="India"
//             onChange={changeHandler}
//           />
//         </div>

//         <div className="form-items">
//           {/* <label>State:</label> */}
//           <select
//             className="ddn"
//             name="state"
//             value={fdata.state}
//             onChange={changeHandler}
//           >
//             <option value="Andhra Pradesh">--Select State--</option>
//             <option value="Andhra Pradesh">Andhra Pradesh</option>
//             <option value="Andaman and Nicobar Islands">
//               Andaman and Nicobar Islands
//             </option>
//             <option value="Arunachal Pradesh">Arunachal Pradesh</option>
//             <option value="Assam">Assam</option>
//             <option value="Bihar">Bihar</option>
//             <option value="Chandigarh">Chandigarh</option>
//             <option value="Chhattisgarh">Chhattisgarh</option>
//             <option value="Dadar and Nagar Haveli">
//               Dadar and Nagar Haveli
//             </option>
//             <option value="Daman and Diu">Daman and Diu</option>
//             <option value="Delhi">Delhi</option>
//             <option value="Lakshadweep">Lakshadweep</option>
//             <option value="Puducherry">Puducherry</option>
//             <option value="Goa">Goa</option>
//             <option value="Gujarat">Gujarat</option>
//             <option value="Haryana">Haryana</option>
//             <option value="Himachal Pradesh">Himachal Pradesh</option>
//             <option value="Jammu and Kashmir">Jammu and Kashmir</option>
//             <option value="Jharkhand">Jharkhand</option>
//             <option value="Karnataka">Karnataka</option>
//             <option value="Kerala">Kerala</option>
//             <option value="Madhya Pradesh">Madhya Pradesh</option>
//             <option value="Maharashtra">Maharashtra</option>
//             <option value="Manipur">Manipur</option>
//             <option value="Meghalaya">Meghalaya</option>
//             <option value="Mizoram">Mizoram</option>
//             <option value="Nagaland">Nagaland</option>
//             <option value="Odisha">Odisha</option>
//             <option value="Punjab">Punjab</option>
//             <option value="Rajasthan">Rajasthan</option>
//             <option value="Sikkim">Sikkim</option>
//             <option value="Tamil Nadu">Tamil Nadu</option>
//             <option value="Telangana">Telangana</option>
//             <option value="Tripura">Tripura</option>
//             <option value="Uttar Pradesh">Uttar Pradesh</option>
//             <option value="Uttarakhand">Uttarakhand</option>
//             <option value="West Bengal">West Bengal</option>
//           </select>
//         </div>

//         <div className="form-items">
//           {/* <label>Adress:</label> */}
//           <textarea
//             className="inputfor"
//             name="adress"
//             value={fdata.adress}
//             placeholder="Enter your address"
//             onChange={changeHandler}
//           />
//         </div>
//         <div className="form-items">
//           {/* <label>ZIP:</label> */}
//           <input
//             className="inputfor"
//             type="text"
//             name="zip"
//             value={fdata.zip}
//             placeholder="Enter your ZIP code here"
//             onChange={changeHandler}
//           />
//         </div>

//         <button className="formbut" type="submit">
//           Submit
//         </button>
//       </form>

//       <div className="google">
      
//       <button className="googlebtn" onClick={handleClick}>Signin with Google</button>
//       </div>
          
      
//     </div>
   
//     </div>
//     </>
//   );
// }

// export default App;
import React, { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

function Sform() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    Name: "",
    email: "",
    Phone: "",
    date: "",
    gender: "",
    country: "India",
    state: "",
    address: "",
    zip: "",
    password: "",
  });

  const [msg, setMsg] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send the form data to your server for registration
      const response = await Axios.post("http://localhost:3000/api/register", formData);

      if (response.status === 201) {
        setMsg("Registration successful");
        // Redirect to the login page after successful registration
        navigate("/login");
      } else {
        setMsg("Registration failed");
      }
    } catch (error) {
      console.error(error);
      setMsg("Registration failed");
    }
  };

  return (
    <div className="soutbox">
      <div className="form">
        <form onSubmit={handleSubmit}>
          <div className="form-items">
            <input
              className="inputfor"
              type="text"
              name="Name"
              value={formData.Name}
              placeholder="Enter your name"
              onChange={handleChange}
            />
          </div>
          <div className="form-items">
            <input
              className="inputfor"
              type="email"
              name="email"
              value={formData.email}
              placeholder="Enter your email"
              onChange={handleChange}
            />
          </div>
          <div className="form-items">
            <input
              className="inputfor"
              type="Phone"
              name="Phone"
              value={formData.Phone}
              placeholder="Enter your phone number"
              onChange={handleChange}
            />
          </div>
          <div className="form-items">
            <input
              className="inputfor"
              type="date"
              name="date"
              value={formData.date}
              placeholder="Enter your date of birth"
              onChange={handleChange}
            />
          </div>
          <div className="form-items">
            <select
              className="ddn"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            >
              <option>--Select gender--</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="form-items">
            <input
              className="inputfor"
              type="text"
              name="country"
              value={formData.country}
              readOnly
            />
          </div>
          <div className="form-items">
            <select
              className="ddn"
              name="state"
              value={formData.state}
              onChange={handleChange}
            >
              <option value="Andhra Pradesh">--Select State--</option>
              <option value="Andhra Pradesh">Andhra Pradesh</option>
              <option value="Andaman and Nicobar Islands">
                Andaman and Nicobar Islands
              </option>
              {/* Other state options */}
            </select>
          </div>
          <div className="form-items">
            <input
              className="inputfor"
              type="text"
              name="address"
              value={formData.address}
              placeholder="Enter your address"
              onChange={handleChange}
            />
          </div>
          <div className="form-items">
            <input
              className="inputfor"
              type="text"
              name="zip"
              value={formData.zip}
              placeholder="Enter your ZIP code"
              onChange={handleChange}
            />
          </div>
          <div className="form-items">
            <input
              className="inputfor"
              type="password"
              name="password"
              value={formData.password}
              placeholder="Enter your password"
              onChange={handleChange}
            />
          </div>
          <button className="formbut" type="submit">
            Submit
          </button>
        </form>

        <div className="msg">{msg}</div>
      </div>
    </div>
  );
}

export default Sform;

