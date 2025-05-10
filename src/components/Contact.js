import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Contact = () => {
    return(
        <div className="container">
            <div className="row justify-content-center bg-light mt-5">
                <div className="col-md-6 card bg-primary">
                <form action="">
                    <div className="form-floating">
                    <input className="form-control" type="text" id="name" name="name" />
                    <label htmlFor="name">Name</label>
                    </div>
                    <br />
                    {/* Email field */}
                    <div className="form-floating">
                    <input
                        className="form-control"
                        type="email"
                        id="email"
                        name="email"
                    />
                    <label htmlFor="email">Email</label>
                    </div>
                    <br />
                    {/* Phone Number */}
                    <div className="form-floating">
                    <input
                        className="form-control"
                        type="number"
                        id="phone"
                        name="number"
                    />
                    <label htmlFor="number">Phone Number</label>
                    </div>
                    <br />
                    {/* Message field */}
                    <div className="form-floating">
                    <textarea
                        className="form-control"
                        id="message"
                        name="message"
                        defaultValue={""}
                    />
                    <label htmlFor="message">Message</label>
                    </div>
                    <br />
                    {/* Submit button */}
                    <div className="form-floating">
                    <button type="submit" className="btn btn-primary col-12">
                        Submit
                    </button>
                    </div>
                </form>
                </div>
            </div>
        </div>

    )
}

export default Contact;