import React from 'react'  
import axios from 'axios'  
import { Link } from 'react-router-dom' 
import Button from '@material-ui/core/Button'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'

class TableDataRow extends React.Component {  
  
  deleteBlog = () => {
    const obj = {  
      blog_id:this.props.obj._id
    };  
    axios.delete('http://localhost:3001/api/blogs/' + this.props.obj._id, obj)
    .then(json => {  
      if(json.data.status) {  
        alert('Post deleted.');
        window.location.reload();
      }
    }); 
  }

  render() {  
    return (
      
        <TableRow>  
          <TableCell>  
            {this.props.obj._id}  
          </TableCell>  
          <TableCell>  
            {this.props.obj.title}  
          </TableCell>  
          <TableCell>  
            {this.props.obj.text}  
          </TableCell>  
          <TableCell>  
         <Button variant="contained" > <Link to={"/edit/"+this.props.obj._id} className="btn btn-success">Edit Post</Link>  </Button>
          </TableCell>  
          <TableCell>  
            <Button variant="contained" onClick={this.deleteBlog} color="secondary">Delete Post</Button>  
          </TableCell>  
        </TableRow>  
    );  
  }  
}  
  
export default TableDataRow; 