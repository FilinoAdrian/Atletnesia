import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './PostScholarship.css';

class PostScholarship extends Component {

  constructor(props) {
    super(props);

    this.state = {}
  }

  render() {
    return (
      <div className="post-scholarship-wrapper">
        <div className="post-scholarship">
          <h1>Buat Beasiswa Sekarang</h1>
          {this.props.authenticated 
          ? (
            <Link to="/formprogram"><div className="post-scholarship-btn">Buat Beasiswa</div></Link>
          ) 
          : (
            <button onClick={this.props.toggleLoginForm} className="post-scholarship-btn">Buat Beasiswa</button>
          )}
        </div>
      </div>
    );
  }
};

export default PostScholarship;