import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import './index.css';
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Notfound from './Notfound'
import Service from './Service'
import Navbar from './navbar'
import Footer from './Footer'
import Service1 from './Service1';
import Service2 from './Service2';
import Service3 from './Service3';
import Frame from './Frame';
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from 'react-router-dom'
const App = ()=>{
  return(
<React.Fragment>
  <Navbar/>
      <Switch>
        <Route exact path="/Home" component={Home} />
         <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/service" component={Service} />
        <Route exact path="/service1" component={Service1} />
        <Route exact path="/service2" component={Service2} />
        <Route exact path="/service3" component={Service3} />
        <Route exact path="/Footer" component={Footer} />
        <Route exact path="/Frame" component={Frame} />
        <Route exact component={Notfound} />
      </Switch>
      </React.Fragment>

)
    
  }
export default App;