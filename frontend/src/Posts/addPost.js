import React from 'react' 
import axios from 'axios'  
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import './schema.css'  
import { Container, Col, Form, FormGroup, Label } from 'reactstrap'  

class addPost extends React.Component{  
  constructor(props) {
    super(props)  
    this.state = {  
      title:'',  
      text:''
    }  
  } 

  Addblog=()=>{  
    axios.post('http://localhost:3001/api/blogs/', {title:this.state.title, text:this.state.text})  
    .then(json => {
      if (json.data.status) {
        alert("Posted.");
        this.props.history.push('/Bloglist')
      } else {
        alert('Something went wrong. Please try again.');  
        this.props.history.push('/Bloglist')  
      }
    })
  }
  handleChange=(e)=> {
    this.setState({[e.target.name]:e.target.value});
  }

  render() {
    return (
   <Container className="App">  
    <h4 className="PageHeading">Enter New Post</h4>  
    <Form className="form">  
      <Col>  
        <FormGroup row>  
          <Label for="title" sm={2}>Title</Label>  
          <Col sm={10}>  
            <TextField required name="title" onChange={this.handleChange} value={this.state.title} placeholder="New Title" />  
          </Col>  
        </FormGroup>  
        <br />
        <FormGroup row>  
          <Label for="text" sm={2}>Body</Label>  
          <Col sm={10}>  
            <TextField name="text" onChange={this.handleChange} required value={this.state.text} placeholder="New Body" />  
          </Col>  
        </FormGroup>
      </Col>  
      <br /> <br />
      <Col>
        <FormGroup row>
          <Button m="2rem" variant="contained" onClick={this.Addblog} color="primary">Submit</Button>  
        </FormGroup>
      </Col>
    </Form>
  </Container>
);
}
}  
   
export default addPost;  