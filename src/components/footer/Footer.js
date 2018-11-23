import React from 'react';
import {
    Row,
    Col,
    Container
} from 'reactstrap';
import './Footer.css';


class Footer extends React.Component{
    render(){
        return(
            <div className='appfooter'>
                <Container>
                    <Row>  
                        <Col sm='6'>
                            <h5>ATLETNESIA</h5>
                        </Col>
                        
                        <Col sm='3'>
                            <h6>Our Office</h6>
                            <p>The Breeze BSD City<br/>Tangerang, 15341
                            </p>
                        </Col>

                        <Col sm='3'>
                            <h6>Our Social Media</h6>
                            <br/>
                            <a href="/"><img className="social-media-icon" src={require('../../static/image/FBicon.png') } alt="" /></a>
                            <a href="/"><img className="social-media-icon" src={require('../../static/image/InstagramIcon.png')} alt="" /></a>
                            <a href="/"><img className="social-media-icon" src={require('../../static/image/LinkedInIcon.png')} alt="" /></a>
                            <a href="/"><img className="social-media-icon" src={require('../../static/image/TwitterIcon.png')} alt="" /></a>
                        </Col>  
                    </Row> 
                </Container>
            </div>
        )
    }
}

export default Footer;