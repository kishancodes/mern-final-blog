import React from 'react'
import addPost from './Posts/addPost' 
import allPosts from './Posts/allPosts' 
import editPosts from './Posts/editPosts'
import Button from '@material-ui/core/Button'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'  
import './App.css' 

function App() {  
  return (  
    <Router>  
      <div className="container">  
        <nav className="navbar navbar-expand-lg navheader">  
          <div className="collapse navbar-collapse" >  
            <ul className="navbar-nav mr-auto">  
               <Button variant="contained" > <Link to={'/Addblog'} className="nav-link">New Post</Link> </Button>
               <br />
               <br />
              <Button variant="contained" > <Link to={'/Bloglist'} className="nav-link">All Posts</Link>  </Button>
            </ul>  
          </div>  
        </nav> <br />  
        <Switch>  
          <Route exact path='/Addblog' component={addPost} />  
          <Route path='/edit/:id' component={editPosts} />  
          <Route path='/Bloglist' component={allPosts} />  
        </Switch>  
      </div>  
    </Router>  
  );  
}  
  
export default App; 
 