import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0
    };
  }

  /* Project Cards */

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return(
        <div className="projects-grid">
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto'}}>
              <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.mxcursos.com/image/cache/data/Thumbs2017/html_css-cr-292x175.png)'}}>HTML/CSS Project #1</CardTitle>
              <CardText>Some information about this project</CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share"></IconButton>
            </CardMenu>
          </Card>
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto'}}>
              <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.mxcursos.com/image/cache/data/Thumbs2017/html_css-cr-292x175.png)'}}>HTML/CSS Project #1</CardTitle>
              <CardText>Some information about this project</CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share"></IconButton>
            </CardMenu>
          </Card>
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto'}}>
              <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.mxcursos.com/image/cache/data/Thumbs2017/html_css-cr-292x175.png)'}}>HTML/CSS Project #1</CardTitle>
              <CardText>Some information about this project</CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share"></IconButton>
            </CardMenu>
          </Card>
        </div>
      )
    } else if (this.state.activeTab === 1) {
      return (
        <Card shadow={5} style={{ minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://lorecentral.b-cdn.net/wp-content/uploads/2017/11/Javascript-shield.png)'}}></CardTitle>
        </Card>
      )
    } else if (this.state.activeTab === 2) {
      return (
        <Card shadow={5} style={{ minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.mxcursos.com/image/cache/data/Thumbs2017/html_css-cr-292x175.png)'}}></CardTitle>
        </Card>
      )
    } else if (this.state.activeTab === 3) {
      return (
        <Card shadow={5} style={{ minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.mxcursos.com/image/cache/data/Thumbs2017/html_css-cr-292x175.png)'}}></CardTitle>
        </Card>
      )
    } else if (this.state.activeTab === 4) {
      return (
        <Card shadow={5} style={{ minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.mxcursos.com/image/cache/data/Thumbs2017/html_css-cr-292x175.png)'}}></CardTitle>
        </Card>
      )
    }
  }

  render() {
    return (
      /* Project Navigation */
      <div className="category-tabs">
        <Tabs activeTab={this.state.activeTab} onChange={tabId => this.setState({ activeTab: tabId})} ripple>
          <Tab>HTML/CSS</Tab>
          <Tab>JavaScript</Tab>
          <Tab>React</Tab>
          <Tab>Node</Tab>
          <Tab>MongoDB</Tab>
        </Tabs>

          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>
      </div>
    )
  }
}

export default Projects;