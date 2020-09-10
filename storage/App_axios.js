import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import SearchForm from "./components/SearchForm";
import Table from "./components/Table";
import axios from "axios"; /* ask TA why this is not capitalized */

class App extends Component {
  state = {
    personnel: [],
    search: "",
    isLoaded: true,
  };

  componentDidMount() {
    this.getPersonnel();
  }

  getPersonnel = () => {
    const URL = "https://randomuser.me/api/?results=10&inc=picture,name,phone,email,dob";
        axios.get(URL)
        .then((res) => {
            this.setState({ 
                personnel: res.data.results,
                isLoaded: true,
            });
        }).catch(err => console.log(err));
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the OMDB API for the value of `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchMovies(this.state.search);
  };

  render() {
    return (
      <Wrapper>
        <Title></Title>
        <SearchForm></SearchForm>
        {/* <Table></Table> */}
        
      </Wrapper>
    );
  }
}

export default App;
