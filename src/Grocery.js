import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Grocery = () => {
    // const [formData, setFormData] = useState({
    //     product: ""
    //     price: ""
    // })
    return(
        <div className="container">
  <div className="row justify-content-center">
    <div className="col-md-8">
      <p>Add Product and Prices to the table.</p>
      <table className="table table-responsive table-bordered">
        <tbody>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
          <tr>
            <td>Laptop Hp</td>
            <td>150,000</td>
            <td>
              {" "}
              <button className="btn btn-danger">Delete</button>
            </td>
          </tr>
          <tr>
            <td>Mouse</td>
            <td>7500</td>
            <td>
              {" "}
              <button className="btn btn-danger">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
      <div>
        <h4>Add New</h4>
        <p>Product</p>
        <input type="text" className="form-control" name="product" />
      </div>
      <div>
        <p>Price</p>
        <input type="text" className="form-control" name="price" />
      </div>
      <button className="btn btn-warning mt-2 col-6">Submit</button>
    </div>
  </div>
</div>

    )
}

export default Grocery;