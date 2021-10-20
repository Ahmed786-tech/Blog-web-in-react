import React from 'react-dom'
import Navbar from './components/navbar'
import Home from './components/home'
import Create from './components/create'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import BlogDetail from './components/blogDetail';
import Notfound from './components/Not_found';


function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
        <div className="content">
          <Switch>
            <Route exact path='/' >
            <Home />
            </Route>
            <Route exact path='/create' >
              <Create/>
            </Route>
            <Route path='/blogs/:id' >
              <BlogDetail />
            </Route>
            <Route path='*' >
              <Notfound />
            </Route>
          </Switch>
      </div>
      </div>
    </Router>
  );
}





export default App;
