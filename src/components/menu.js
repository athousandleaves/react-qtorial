import React, { Component } from 'react';
import { Menu, Container, Button } from 'semantic-ui-react';

export default class Header extends Component {
  render() {
    if(this.props.authed === true) {
      return (
        <Menu inverted>
          <Container>
            <Menu.Item header>
              <h1>Qtorial</h1>
            </Menu.Item>
            <Menu.Menu position='right'>
              <Menu.Item>
                <Button secondary size='huge'>
                  Post New Tutorial
                </Button>
              </Menu.Item>
              <Menu.Item>
                <Button secondary size='huge'>
                  Logged in as currentUser.username
                </Button>
              </Menu.Item>
              <Menu.Item>
                <Button secondary size='huge'>
                  Logout
                </Button>
              </Menu.Item>
            </Menu.Menu>
          </Container>
        </Menu>
      )
    } else {
      // not authenticated
      return(
        <Menu inverted>
          <Container>
            <Menu.Item header>
              <h1>Qtorial</h1>
            </Menu.Item>
            <Menu.Menu position='right'>
              <Menu.Item>
                <Button secondary size='huge'>
                  Login
                </Button>
              </Menu.Item>
              <Menu.Item>
                <Button secondary size='massive'>
                  Sign Up
                </Button>
              </Menu.Item>
            </Menu.Menu>
          </Container>
        </Menu>
      )
    }  
  }
}