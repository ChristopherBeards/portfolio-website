import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Christopher Beards</h2>
            <img 
            src="https://render.bitstrips.com/v2/cpanel/096dffe0-3934-41db-842c-34c180d0615c-b8f80fce-0157-4fa3-bdd8-df527600f843-v1.png?transparent=1&palette=1" 
            alt="avatar"
            style={{height: '250px'}} />
            <p 
            style={{
              width: '75%', 
              margin: 'auto', 
              paddingTop: '1em',
              fontSize: '16px'
              }}>
              Motivation is for the uninspired
            </p>
          </Cell>
          <Cell col={6}>
              <h2>Contact Me</h2>
              <hr />
              <div className="contact-list">
                <List style={{marginLeft: '20px'}}>

                  <ListItem>
                    <ListItemContent 
                    style={{
                      fontSize: '30px', 
                      fontFamily: 'Anton'
                    }}>
                    <i className="fas fa-phone-square"/>
                      (443) 373 - 5918
                      </ListItemContent>
                  </ListItem>

                  <ListItem>
                    <ListItemContent 
                    style={{
                      fontSize: '30px', 
                      fontFamily: 'Anton'
                    }}>
                    <i className="fas fa-envelope-square"/>
                      BeardsCM@gmail.com
                      </ListItemContent>
                  </ListItem>

                  <ListItem>
                    <ListItemContent 
                    style={{
                      fontSize: '30px', 
                      fontFamily: 'Anton'
                    }}>
                    <i className="fas fa-globe"/>
                      ChristopherBeards.com
                      </ListItemContent>
                  </ListItem>

                </List>
              </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;