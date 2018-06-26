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
              <Header className="header-color" title="Christopher Beards">
                  <Navigation>
                      <Link to="/"><i class="fas fa-tint splash" id="splash"></i></Link>
                      <Link to="/projects"><span className="links">Projects</span></Link>
                      <Link to="/contact"><span className="links">Contact</span></Link>
                  </Navigation>
              </Header>
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
