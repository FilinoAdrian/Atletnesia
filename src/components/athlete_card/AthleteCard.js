import React, { Component } from 'react';
import { Card, CardBody } from 'reactstrap';

import './AthleteCard.css'

class AthleteCard extends Component {
  render() {
    return(
      <div>
        <Card className="card-list-program">
          <CardBody>
            <div className="atlet-profile">
              <img className="atlet-photo" src={this.props.item.image} alt="" />
              <div className="atlet-name">{this.props.item.name}</div>
              <div className="atlet-cabang">{this.props.item.cabang}</div>
            </div>
            <hr />
            <div className="atlet-quote">{this.props.item.quote}</div>
          </CardBody>
        </Card>
      </div>
    )
  }
}

export default AthleteCard