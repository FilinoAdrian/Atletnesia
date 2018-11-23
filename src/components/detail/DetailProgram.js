import React from 'react';
import Detail from './Detail'
import DetailDeskripsi from './DetailDeskripsi';
import DetailPersyaratan from './DetailPersyaratan';
import DetailKategori from './DetailKategori';
import {
    Container,
    Row,
    Col
} from 'reactstrap';

import './DetailProgram.css'

export default class DetailProgram extends React.Component{
  render(){
    return(
      <div className='DetailProgram'>
        <div>
          <Detail/>
        </div>
        <Container>
          <Row>
            <Col sm='9'>
              <div>
                <DetailDeskripsi/>
              </div>
              <div>
                <DetailPersyaratan/>
              </div>
            </Col>
            <Col sm='3'>
              <div>
                <DetailKategori/>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}