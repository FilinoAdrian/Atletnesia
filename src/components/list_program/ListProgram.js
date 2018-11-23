import React, { Component } from 'react';
import ProgramCard from './ProgramCard';
import { Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

import './ListProgram.css';

class ListProgram extends Component {
  constructor(props) {
    super(props);

    this.state = {
      programs: []
    }
  }

  componentDidMount = () => {
    axios.get("https://944e39ac-ba21-43ca-8109-ee0e8e9d997d.mock.pstmn.io/clubdata")
      .then(response => {
          this.setState({ programs: response.data })
      })
  }

  render() {
    return(
      <div className="cardlist">
        <Container>
          <div className="slider-title">Beasiswa yang tersedia</div>
          <div className="list-program">
            {this.state.programs.map((item, key) => {
              return(
                <div key={key}>
                  <Link to={`/beasiswa/${item.id}`}>
                    <ProgramCard item={item} />
                  </Link>
                </div>
              )
            })
            }
          </div>
        </Container>
      </div>
    )
  }
}

export default ListProgram;