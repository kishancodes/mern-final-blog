import React, { Component } from 'react'  
import axios from 'axios'  
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableDataRow from './TableDataRow'  

export default class Studentlist extends Component {  
  
  constructor(props) {  
      super(props);  
      this.state = {business: []};  
    }  
    componentDidMount(){  
      axios.get('http://localhost:3001/api/blogs/')  
        .then(response => {
            this.setState({ business: response.data.data });
        })  
        .catch(function (error) {  
          console.log(error);  
        })  
    }  
      
    tabRow(){  
      return this.state.business.map(function(object, i){  
          return <TableDataRow obj={object} key={i} />;  
      });  
    }  
  
    render() {  
      return (  
        <div>  
          <h4 align="center">Posts</h4>  
          <Table className="table table-striped" style={{ marginTop: 10 }}>  
            <TableHead>  
              <TableRow>  
                <TableCell>Post ID</TableCell>  
                <TableCell>Title</TableCell>  
                <TableCell>Body</TableCell>  
                <TableCell>            </TableCell>  
              </TableRow>  
            </TableHead>  
            <TableBody>  
             { this.tabRow() }   
            </TableBody>  
          </Table>  
        </div>  
      );  
    }  
} 