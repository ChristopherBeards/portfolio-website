import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
  render() {
    return (
      <div style={{width: '100%', margin: 'auto', height: `100vh`}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img 
            src="https://render.bitstrips.com/v2/cpanel/214e2e2c-3a98-46f6-9b61-50c57a0d8fca-b8f80fce-0157-4fa3-bdd8-df527600f843-v1.png?transparent=1&palette=1" 
            alt=""
            className="avatar"
            />
            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>
              <hr/>
              <p>HTML/CSS | JavaScript | ReactJS | Redux | NodeJS | Express | MongoDB</p>
              <div className="social-links">
              {/* LinkedIn */}
                <a href="https://www.linkedin.com/in/christopher-beards-1292b529/" rel="noopener noreferrer" target="_blank">
                  <i className="fab fa-linkedin" aria-hidden="true" />
                </a>
              {/* GitHub */}
                <a href="https://github.com/ChristopherBeards" rel="noopener noreferrer" target="_blank">
                  <i className="fab fa-github-square" aria-hidden="true" />
                </a>
              {/*  */}
                <a href="https://www.facebook.com/ChristopherMBeards" rel="noopener noreferrer" target="_blank">
                  <i className="fab fa-facebook" aria-hidden="true" />
                </a>
              {/* YouTube */}
                <a href="https://www.youtube.com/user/OfficialChoiceTV" rel="noopener noreferrer" target="_blank">
                  <i className="fab fa-youtube-square" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;