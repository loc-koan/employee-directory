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
                    {this.state.friends.map(friend => (
                    <tr className="row"> 
                        <td className="col-md-2 col-md-offset-1"><img src={friend.image} alt="employee image" className="img-responsive"></img></td>
                        <td className="col-md-2"><h5>{friend.name}</h5></td>
                        <td className="col-md-2"><h5>{friend.phone}</h5></td>
                        <td className="col-md-3"><h5>{friend.email}</h5></td>
                        <td className="col-md-2"><h5>{friend.dob}</h5></td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Table;