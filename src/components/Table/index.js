import React from "react";
// import friends from "../../../friends.json";
// import "./style.css";

function Table(props) {
    return (
        <div>
            <table className="container">
                <thead className="row">
                    <th className="col-md-2 col-md-offset-1">Image</th>
                    <th className="col-md-2">Name</th>
                    <th className="col-md-2">Phone</th>
                    <th className="col-md-3">Email</th>
                    <th className="col-md-2">DOB</th>
                </thead>

                <tbody>
                    {/* {this.props.personnel.map((personnel, id) => (
                    <tr className="row"> 
                        <td className="col-md-2 col-md-offset-1"><img src={props.personnel.picture.thumbnail} alt="employee image" className="img-responsive"></img></td>
                        <td className="col-md-2"><h5>{props.personnel.name}</h5></td>
                        <td className="col-md-2"><h5>{props.personnel.phone}</h5></td>
                        <td className="col-md-3"><h5>{props.personnel.email}</h5></td>
                        <td className="col-md-2"><h5>{props.personnel.dob}</h5></td>
                    </tr>
                    ))} */}
                </tbody>
            </table>
        </div>
    )
}

export default Table;