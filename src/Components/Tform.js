import React, { useState } from "react";
import Axios from "axios";

function App() {
  const randomNumber = Math.floor(Math.random() * (150000 - 100000 + 1) + 100000);
  const [fdata, setFdata] = useState({
    Name: "",
    NOP: "",
    Country:"India",
    State:"",
    District:"",
    City:"",
    DD: "",
    AD: "",
    NOD: "",
    NON: "",
  });
  const [msg, setMsg] = useState();

  const changeHandler = (e) => {
    let name1 = e.target.name;
    let val = e.target.value;
    setFdata({ ...fdata, [name1]: val });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:4000/Tform", { fdata }).then((res) => {
      let ack = res.data;
      if (ack === "success") {
        setMsg("Payment Successful");
        console.log(msg);
        alert("Payment Successful");
      } else {
        setMsg("Data not inserted");
        console.log(msg);
        alert("Data not inserted");
      }
    });
  };

  return (
    <>
    <div className="tfoutbox">
    <div className="form">
      <form onSubmit={submitHandler}>
        <div className="form-items">
          {/* <label>Name:</label> */}
          <input
            className="inputfor"
            type="text"
            name="Name"
            value={fdata.Name}
            placeholder="Enter yout name here"
            onChange={changeHandler}
          />
        </div>
        <div className="form-items">
          {/* <label>Number of Persons:</label> */}
          <input
            className="inputfor"
            type="Number"
            name="NOP"
            value={fdata.NOP}
            placeholder="Enter the number of persons"
            onChange={changeHandler}
          />
        </div>
        <div className="form-items">
          {/* <label>Country:</label> */}
          <input
            className="inputfor"
            type="text"
            name="country"
            value="India"
            onChange={changeHandler}
          />
        </div>
        <div className="form-items">
          {/* <label>State:</label> */}
          <select
            className="ddn"
            name="State"
            value={fdata.State}
            onChange={changeHandler}
          >
            <option value="Andhra Pradesh">--Select State--</option>
            <option value="Andhra Pradesh">Andhra Pradesh</option>
            <option value="Andaman and Nicobar Islands">
              Andaman and Nicobar Islands
            </option>
            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
            <option value="Assam">Assam</option>
            <option value="Bihar">Bihar</option>
            <option value="Chandigarh">Chandigarh</option>
            <option value="Chhattisgarh">Chhattisgarh</option>
            <option value="Dadar and Nagar Haveli">
              Dadar and Nagar Haveli
            </option>
            <option value="Daman and Diu">Daman and Diu</option>
            <option value="Delhi">Delhi</option>
            <option value="Lakshadweep">Lakshadweep</option>
            <option value="Puducherry">Puducherry</option>
            <option value="Goa">Goa</option>
            <option value="Gujarat">Gujarat</option>
            <option value="Haryana">Haryana</option>
            <option value="Himachal Pradesh">Himachal Pradesh</option>
            <option value="Jammu and Kashmir">Jammu and Kashmir</option>
            <option value="Jharkhand">Jharkhand</option>
            <option value="Karnataka">Karnataka</option>
            <option value="Kerala">Kerala</option>
            <option value="Madhya Pradesh">Madhya Pradesh</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Manipur">Manipur</option>
            <option value="Meghalaya">Meghalaya</option>
            <option value="Mizoram">Mizoram</option>
            <option value="Nagaland">Nagaland</option>
            <option value="Odisha">Odisha</option>
            <option value="Punjab">Punjab</option>
            <option value="Rajasthan">Rajasthan</option>
            <option value="Sikkim">Sikkim</option>
            <option value="Tamil Nadu">Tamil Nadu</option>
            <option value="Telangana">Telangana</option>
            <option value="Tripura">Tripura</option>
            <option value="Uttar Pradesh">Uttar Pradesh</option>
            <option value="Uttarakhand">Uttarakhand</option>
            <option value="West Bengal">West Bengal</option>
          </select>
        </div>
        <div className="form-items">
          {/* <label>District:</label> */}
          <input
            className="inputfor"
            type="text"
            name="District"
            value={fdata.District}
            placeholder="Enter your district"
            onChange={changeHandler}
          />
        </div>
        <div className="form-items">
          {/* <label>City:</label> */}
          <input
            className="inputfor"
            type="text"
            name="City"
            value={fdata.City}
            placeholder="Enter your city"
            onChange={changeHandler}
          />
        </div>
        <div className="form-items">
          {/* <label>Date of Departure:</label> */}
          <input
            className="inputfor"
            type="date"
            name="DD"
            value={fdata.DD}
            placeholder="Enter the date of departure"
            onChange={changeHandler}
          />
        </div>
        <div className="form-items">
          {/* <label>Date of Arrival:</label> */}
          <input
            className="inputfor"
            type="date"
            name="AD"
            value={fdata.AD}
            placeholder="Enter the date of arrival"
            onChange={changeHandler}
          />
        </div>
        <div className="form-items">
          {/* <label>Number of Days:</label> */}
          <input
            className="inputfor"
            type="Number"
            name="NOD"
            value={fdata.NOD}
            placeholder="Enter the number of days of stay"
            onChange={changeHandler}
          />
        </div>
        <div className="form-items">
          {/* <label>Number of Nights:</label> */}
          <input
            className="inputfor"
            type="Number"
            name="NON"
            value={fdata.NON}
            placeholder="Enter the number of nights of stay"
            onChange={changeHandler}
          />
        </div>   
        <div className="form-items1">
          <label>Price per head:</label>
          <input
            className="inputfor"
            type="text"
            name="Price"
            value={randomNumber}
            onChange={changeHandler}
          />
        </div>
        <div className="form-items1">
          <label>Total Price:</label>
          <input
            className="inputfor"
            type="text"
            name="Total"
            value={randomNumber*4}
            onChange={changeHandler}
          />
        </div>

        <button className="formbut" type="submit">
          Proceed to pay
        </button>
      </form>
    </div>
    <img className="tformimg" src="https://www.pngmart.com/files/17/Travel-Icon-PNG-Transparent-Image.png" alt="img not found"/>
    </div>
    </>
  );
}

export default App;