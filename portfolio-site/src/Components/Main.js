import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './Landing';
import About from './About';
import Contact from './Contact';
import Projects from './Projects';
import Resume from './Resume';

const Main = () => (
  <Switch>
    <Route exact path ="/" component={Landing} />
  </Switch>
)

export default Main;