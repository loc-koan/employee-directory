import axios from "axios";

// https://randomuser.me/ 
// https://randomuser.me/api/
// https://randomuser.me/api/?results=10
// https://randomuser.me/api/?inc=gender,name,nat
// https://randomuser.me/api/?nat=us
// https://randomuser.me/api/?results=10&inc=name,phone,email,dob

export default {
  getEmployees: function(query) {
    return axios.get("https://randomuser.me/api/?results=10&nat=us");
  }
};