import React, { Component } from 'react';

import logo from "../../../static/image/asifa.png";
import './ClubProfile.css';

class ClubProfileMain extends Component {

  render() {
    return(
      <div className="profile-card">
        <div className="container">
          <div className="profile-wrapper">
            <div className="profile-img">
              <img width="100%" src={logo} alt=""/>
            </div>
            <div className="profile-data">
              <div className="profile-title">{this.props.clubProfile.name}</div>
              <div className="profile-item">
                <div className="profile-item-title">Alamat: </div>
                <span>{this.props.clubProfile.address}</span>
              </div>
              <div className="profile-item">
                <div className="profile-item-title">Kontak: </div>
                <span>{this.props.clubProfile.contact}</span>
              </div>
              <div className="profile-item">
                <div className="profile-item-title">Website: </div>
                <span>{this.props.clubProfile.website}</span>
              </div>
            </div>
          </div>
          <div className="button-wrapper">
            <button type="button" className="create-btn">Buat Program</button>
          </div>
        </div>
      </div>       
    )
  }
}

export default ClubProfileMain