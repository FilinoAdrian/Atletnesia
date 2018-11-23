import React from 'react';
import { Container, Row, Col, CardTitle, CardText, CardBody } from 'reactstrap';

import './StepByStep.css';

const StepByStep = () => {
  return(
    <div className="step-by-step">
      <Container>
        <div className="step-title">Langkah Mudah Mewujudkan Mimpimu</div>
        <div className="step-subtitle">Ikuti 3 langkah mudah ini</div>
        <Row className="step-wrapper">
          <Col md="4">
            <img width="30%" src={require("../../static/image/img1.png")} alt="" />
            <CardBody>
              <CardTitle className="step-card-title">Daftar</CardTitle>
              <CardText className="step-card-text">Daftar ke beasiswa yang kamu minati dan lengkapi syaratnya.</CardText>
            </CardBody>
          </Col>

          <Col md="4">
            <img width="30%" src={require("../../static/image/img2.png")} alt="" />
            <CardBody>
              <CardTitle className="step-card-title">Tunggu Konfirmasi</CardTitle>
              <CardText className="step-card-text">Penyedia akan melakukan proses seleksi, jika kamu beruntung kamu akan dihubungi.</CardText>
            </CardBody>
          </Col>

          <Col md="4">
            <img width="30%" src={require("../../static/image/img3.png")} alt="" />
            <CardBody>
              <CardTitle className="step-card-title">Berhasil</CardTitle>
              <CardText className="step-card-text">Selamat kamu berhasil untuk memulai mimpimu untuk menjadi atlet.</CardText>
            </CardBody>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default StepByStep;