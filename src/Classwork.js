import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Classwork = () => {
    const[inputText, setInputText] = useState("");
    const [displayValue, setDisplayValue] = useState("");
    const handleChange = (e) =>{
        setInputText(e.target.value);
    };
    const handleSubmit = (e) =>{
        e.preventdefault();
        setDisplayValue(inputText);
    };
    return(
<div className="container">
<div className="row justify-content-center mt-5">
<div className="col-md-4">
<h4 style={{ textAlign: "center" }}>User Registration Forms</h4>
<p>All fields required</p>
<p>Username</p>
<form onSubmit={handleSubmit}>
<div className="form-floating">
<input
          type="text"
          id="username"
          className="form-control"
          name="username"
          value = {inputText}
          placeholder="Enter Username"
          onChange = {handleChange}
        />
<label htmlFor="#">Enter Username</label>
</div>
<span id="user" style={{ color: "red" }} value={inputText} />
{/* <p className="mt-3">Password</p>
<div className="form-floating">
<input
          type="text"
          id="password"
          className="form-control"
          name="password"
          placeholder="Enter password"
        />
<label htmlFor="#">Enter Password</label>
</div>
<p id="pass" style={{ color: "red" }} />
<p className="mt-3">Confirm Passwod</p>
<div className="form-floating">
<input
          type="text"
          id="confirm"
          className="form-control"
          name="confirm"
          placeholder="Confirm password"
        />
<label htmlFor="#">Confirm Password</label>
</div>
<p id="conf" style={{ color: "red" }} /> */}
<button
        className="btn btn-primary col-12 mt-2"
        id="confirm_button"
        onclick="Register()"
>
        Register
</button>
</form>
</div>
</div>
</div>
    )
}

export default Classwork;