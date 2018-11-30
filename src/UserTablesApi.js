import React, { Component } from 'react';
import ReactTable from 'react-table';
import "react-table/react-table.css";

class UserTablesApi extends Component{
  constructor(props){
      super(props);
      this.state = {
        userList: []
      }
  }
  componentDidMount(){
    fetch("http://5c00663d0296210013dc8029.mockapi.io/users",{
        method: 'GET'
    })
    .then(res => res.json())
      .then(
        (result) => {
          console.log("Users list : "+JSON.stringify(result))
          this.setState({
            userList: result
          })
        }
      )      
  }
  render() {  
    const columns = [{
        Header: 'id',
        accessor: 'id' // String-based value accessors!
      },{
        Header: 'name',
        accessor: 'name',
      },{
        Header: 'phone',
        accessor: 'phone',
      },{
        Header: 'address',
        accessor: 'address',
      },{
        Header: 'createdAt',
        accessor: 'createdAt',
      }]
    return (            
      <ReactTable
        data={this.state.userList}
        columns={columns}
       />
    );
  }    
}
export default UserTablesApi;