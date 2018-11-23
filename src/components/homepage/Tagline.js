import React from 'react';
import { Container } from 'reactstrap';

import './Tagline.css';

const Tagline = (props) => {
  return(
    <div className="tagline">
      <Container>
        <div className="tagline-title">
          <h1>Wujudkan Mimpimu Untuk Menjadi Juara</h1>
          {!props.authenticated 
          ? <button onClick={props.toggleRegisterForm} className="register-btn">Daftar Sekarang</button> 
          : "" }
        </div>
      </Container>
    </div>
  )
}

export default Tagline;