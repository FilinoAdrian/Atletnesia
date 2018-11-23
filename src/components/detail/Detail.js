import React from 'react';
import {
    Container,
    Row,
    Col,
    Button } from 'reactstrap';

export default class Detail extends React.Component{ 
  render(){
    return(
      <div className='Detail'>
        <Container>
          <Row>
            <Col sm='3'>
            <img width='200px' height='200px' alt=""/>
            </Col>
            <Col sm='3'>
            <h1>Bulutangkis</h1><br/>
            <p>PB Djarum</p><br/>
            <p>Kudus - Indonesia</p>
            </Col>
          </Row><br/>
          <Col className='d-flex'>
          <Col md='10'>
          <br/>
          <ul>
            <li>
              <h5>Usia : 10-15 Tahun</h5>
            </li>
            <li>
              <h5>Tersedia : 10 Orang</h5>
            </li>
            <li>
              <h5>Periode : 1 November 2018 - 1 Desember 2018 </h5>
            </li>
            <li>      
            </li>
          </ul><br/>
          </Col>
          <Col md='2'>
          <Button className='ApplyButton'>APPLY</Button>
          </Col>
          </Col>
        </Container>
      </div>
    )
  }
}