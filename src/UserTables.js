import React, { Component } from 'react';
import ReactTable from 'react-table';
import "react-table/react-table.css";

class UserTables extends Component{

    render() {
        const data = [{
            id: 1,
            createdAt: '2018-11-29',            
            name: 'Zilong Purwanto',
            phone: '08171234567',
            address: 'Ciledug'          
        }]
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
            data={data}
            columns={columns}
           />
        );
      }
}
export default UserTables;