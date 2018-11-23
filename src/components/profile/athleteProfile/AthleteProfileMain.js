import React, { Component } from 'react';

// import logo from "../../../static/image/medium.jpg";
import './AthleteProfile.css';

class AthleteProfileMain extends Component {

  render() {
    return(
      <div className="profile-card">
        <div className="container">
          <div className="profile-wrapper">
            <div className="profile-img">
              <img width="100%" src="" alt=""/>
            </div>
            <div className="profile-data">
              <div className="profile-title">{this.props.athleteProfile.name}</div>
              <div className="profile-item">
                <div className="profile-item-title">Cabang Olahraga: </div>
                <span>{this.props.athleteProfile.cabang}</span>
              </div>
              <div className="profile-item">
                <div className="profile-item-title">Cabang Usia: </div>
                <span>{this.props.athleteProfile.age} Tahun</span>
              </div>
            </div>
          </div>
        </div>
      </div>       
    )
  }
}

export default AthleteProfileMain