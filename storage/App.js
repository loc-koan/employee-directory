import React, { Component } from "react";
// import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import SearchForm from "./components/SearchForm";
// import Table from "./components/Table";
import friends from "./friends.json";
// import { fontAwesomeIcon } from './components/FontAwesomeIcons'

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    order: "desc",
    sortFriends: [{}]
  };

  // headings = [
  //   {name: "Name" }
  // ]

  // handleSort = head => {
  //   console.log("Inside Handle Sort");

  //   if(this.state.order === "desc"){
  //     this.setState({
  //       order: "asc"
  //     })
  //   }
  //   else{
  //     this.setState({
  //       order: "desc"
  //     })
  //   }
  //   }
  // }

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

        <SearchForm></SearchForm>

        {/* <Table></Table> */}

        <table className="container">
          <thead className="row">
            <th className="col-md-2 col-md-offset-1">Image</th>
            <th className="col-md-2">Name <button id="sort-asc" onClick={this.handleSort}><i class="fas fa-angle-down"></i></button></th>
            {/* <fontAwesomeIcon icon="fa-caret-up"> */}
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
        
      </Wrapper>
    );
  }
}

export default App;
