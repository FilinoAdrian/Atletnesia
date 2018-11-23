import React, { Component } from 'react';
import { Container, TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';

import './ClubProfile.css'

class ClubProfileTab extends Component {

  constructor(props) {
    super(props);

    this.toggleTab = this.toggleTab.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggleTab = (tab) => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {
    return(
      <div className="profile-card mt-4 p-3">
        <Container>
          <Nav tabs>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === '1' })}
                onClick={() => { this.toggleTab('1'); }}
              >
                Deskripsi
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === '2' })}
                onClick={() => { this.toggleTab('2'); }}
              >
                Prestasi
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={this.state.activeTab} className="m-4">
            <TabPane tabId="1">
              {this.props.clubProfile.description}
            </TabPane>
            <TabPane tabId="2">
              {this.props.clubProfile.achievements.map(achievement => 
                <p>{achievement.name}</p>
              )}
            </TabPane>
          </TabContent>
        </Container>
      </div>
    )
  }
}

export default ClubProfileTab