import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './Landing';
import Contact from './Contact';
import Projects from './Projects';

/* Routes */

const Main = () => (
  <Switch>
    <Route exact path ="/" component={Landing} />
    <Route path ="/contact" component={Contact} />
    <Route path ="/projects" component={Projects} />
  </Switch>
)

export default Main;