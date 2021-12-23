import React from 'react'   
import { Container, Col, Form, FormGroup, Label } from 'reactstrap'  
import axios from 'axios'  
import '../Posts/schema.css'  
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

class Edit extends React.Component {  
    constructor(props) {  
      super(props)  
     
      this.onChangeTitle = this.onChangeTitle.bind(this);  
      this.onChangeText = this.onChangeText.bind(this);  
      this.onSubmit = this.onSubmit.bind(this);  
  
      this.state = {  
        title: '',  
        text: ''
      }  
    }  
  
  componentDidMount() {  
      axios.get('http://localhost:3001/api/blogs/' + this.props.match.params.id)
          .then(response => {  
              this.setState({
                title: response.data.title,   
                text: response.data.text});  
          })  
          .catch(function (error) {  
              console.log(error);  
          })  
    }  
  
  onChangeTitle(e) {  
    this.setState({  
        title: e.target.value  
    });  
  }  
  onChangeText(e) {  
    this.setState({  
        text: e.target.value  
    });    
  }  
  onSubmit(e) {  
    e.preventDefault();  
    
    debugger;
    const obj = {  
      blog_id:this.props.match.params.id,  
      title: this.state.title,  
      text: this.state.text
    };
 
    axios.put('http://localhost:3001/api/blogs/' + obj.blog_id, obj)  
    .then(res => {
      console.log(res.data);
      this.props.history.push('/Bloglist');
    });
  }  
    render() {  
        return (  
            <Container className="App">  
  
             <h4 className="PageHeading">Update Informations</h4>  
                <Form className="form" onSubmit={this.onSubmit}>  
                    <Col>  
                        <FormGroup row>  
                            <Label for="title" sm={2}>Title</Label>  
                            <Col sm={10}>  
                                <TextField name="title" value={this.state.title || ''} onChange={this.onChangeTitle}  
                                placeholder="Edited Title" />  
                            </Col>  
                        </FormGroup>  
                        <FormGroup row>  
                            <Label for="text" sm={2}>Text</Label>  
                            <Col sm={10}>  
                                <TextField name="text" value={this.state.text || ''} onChange={this.onChangeText} placeholder="Edited Body" />  
                            </Col>  
                        </FormGroup>  
                    </Col>  
                    <Col>  
                        <FormGroup row>  
                            <Col sm={5}>  
                            </Col>  
                            <Col sm={1}>  
                          <Button variant="contained" type="submit" color="primary">Submit</Button>{' '}  
                            </Col>  
                            <Col sm={5}>  
                            </Col>  
                        </FormGroup>  
                    </Col>  
                </Form>  
            </Container>  
        );  
    }  
  
}  
  
export default Edit;  