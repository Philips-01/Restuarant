import React from "react";

const Main2 = () => {
    return(
        <div className="album py-5 bg-light">
  <div className="container" id="shopnow">
    <div className="row">
      <div className="col-md-12">
        <h3 className="text-center mb-3">Features</h3>
      </div>
    </div>
    <div className="row">
      <div className="col-md-12">
        <h5 className="mb-3 text-danger">Features Page</h5>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td colSpan={2}>Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>

    )
}

export default Main2;