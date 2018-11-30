import React, { Component } from 'react';

class Users extends Component {

    componentDidMount(){
        fetch("http://5c00663d0296210013dc8029.mockapi.io/users",{
            method: 'GET'
        })
        .then(res => res.json())
          .then(
            (result) => {
              console.log("Users list : "+JSON.stringify(result))
            }
          )

    }

    render() {
        return (
          <h1>Test</h1>
        );
      }
}

export default Users;
