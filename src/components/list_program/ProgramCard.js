import React, { Component } from 'react';
import { Card, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

import './ListProgram.css'

class ProgramCard extends Component {
  render() {
    return(
      <Card className="card-list-programs">
        <CardBody>
          <CardTitle className="program-title">{this.props.item.position}</CardTitle>
          <CardSubtitle className="program-subtitle">{this.props.item.quota} Kuota</CardSubtitle>
          <hr />
          <div className="profil-klub">
            <img className="rounded-circle" src={this.props.item.image} alt="" />
            <div>
              <p className="profil-data">{this.props.item.company}</p>
              <p className="profil-data">{this.props.item.location}</p>
            </div>
          </div>
        </CardBody>          
      </Card>
    )
  }
}

export default ProgramCard
