import React  from "react";

// export default function Table(){
const Table = () => {
    return(
        <div className="row">
            <div className="card col">
                <table className="table table-bordered table-primary">
                    <thead>
                        <tr>
                            <th>S/N</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>1</th>
                            <th>James</th>
                            <th>james@gmail.com</th>
                            <th>+1234567890</th>
                        </tr>
                        <tr>
                            <th>2</th>
                            <th>James</th>
                            <th>james@gmail.com</th>
                            <th>+1234567890</th>
                        </tr>
                        <tr>
                            <th>3</th>
                            <th>James</th>
                            <th>james@gmail.com</th>
                            <th>+1234567890</th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Table;