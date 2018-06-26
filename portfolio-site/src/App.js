import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './Components/Main';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
          <Layout>
              <Header className="header-color" title="<dev> Christopher Beards">
                  <Navigation>
                      <Link to="/"><i class="fas fa-tint splash" id="splash"></i></Link>
                      <Link to="/about"><span className="links">About</span></Link>
                      <Link to="/projects"><span className="links">Projects</span></Link>
                      <Link to="/resume"><span className="links">Resume</span></Link>
                      <Link to="/contact"><span className="links">Contact</span></Link>
                  </Navigation>
              </Header>
              <Drawer title="Browse"> {/* Hamburger Menu */}
              <Navigation>
                      <Link to="/about">About</Link>
                      <Link to="/projects">Projects</Link>
                      <Link to="/resume">Resume</Link>
                      <Link to="/contact">Contact</Link>
                  </Navigation>
              </Drawer>
              <Content>
                <div className="page-content" />
                <Main />
              </Content>
          </Layout>
      </div>
    );
  }
}

export default App;
