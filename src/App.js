import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
// import Instructions from "./components/Title";
import friends from "./friends.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends
  };

  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title></Title>
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
          //<FriendCard
            // removeFriend={this.removeFriend}
            /*id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}*/

            <tr className="row"> 
              <td className="col-md-2 col-md-offset-1"><img src={friend.image} alt="employee image" className="img-responsive"></img></td>
            <td className="col-md-2"><h4>{friend.name}</h4></td>
            <td className="col-md-2"><h4>{friend.phone}</h4></td>
            <td className="col-md-3"><h4>{friend.email}</h4></td>
            <td className="col-md-2"><h4>{friend.dob}</h4></td>
          </tr>
        ))}
          </tbody>
        </table>
        
      </Wrapper>
    );
  }
}

export default App;