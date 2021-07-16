import React from 'react'
import {Container, Card, Row, Col, ListGroup} from 'react-bootstrap'
import {herovastneon} from '../data/Herovast'


const TagsNeon = () => {
    return (
        <Container fluid>
        <Row>
        {herovastneon.map(t=> (             
                <Col lg={4} md={4} sm={4} xs={4} className=' my-1 px-1' key={t.style}>
                <Card border='dark' className='d-flex h-100 p-1 page-break' >
                    <Card.Img variant="top" src={process.env.PUBLIC_URL + `/${t.image}`} className='pb-4 pt-5' />
                    <Card.Body className='m-0 p-0'>
                    <h3 className='pb-3 d-flex justify-content-center'>{t.season}</h3>

                    <ListGroup className='m-0 p-0' variant='flush'>
                        <ListGroup.Item className='m-0 p-1 d-flex'>
                            <h5 className='pt-1 pr-3 m-0'>SAMPLE STYLE NUMBER: </h5> <h3 className='pt-0'>{t.style}</h3>
                        </ListGroup.Item>
                        
                        <ListGroup.Item className='m-0 p-1 d-flex'>
                            <h5 className='pr-4'>DESCRIPTION: </h5><p>{t.description}</p>
                        </ListGroup.Item>

                        <ListGroup.Item className='m-0 p-1 d-flex'>
                            <h5 className='pr-4'>STORY: </h5><p>{t.story}</p>
                        </ListGroup.Item>

                        <ListGroup.Item className='m-0 p-1 d-flex'>
                            <h5 className='pr-4'>FIT CATEGORY: </h5><p>{t.fit}</p>
                        </ListGroup.Item>

                        <ListGroup.Item className='m-0 p-1 d-flex'>
                            <h5 className='pr-4'>SLEEVE LENGTH: </h5><p>{t.sleeve}</p>
                        </ListGroup.Item>

                        <ListGroup.Item className='m-0 p-1'>
                        <Row className='m-0 p-0 d-flex'>
                            <Col lg={6} md={6} sm={6} xs={6} className='m-0 p-0 d-flex'>
                            <h5 className='pr-2'>HSP: </h5><p>{t.hsp}</p>
                            </Col>
                            <Col lg={6} md={6} sm={6} xs={6} className='m-0 p-0 d-flex'>
                            <h5 className='pr-2'>PANT INSEAM: </h5><p>{t.pant}</p>
                            </Col>
                        </Row>  
                        </ListGroup.Item>

                        <ListGroup.Item className='m-0 p-1'>
                            <Row className='m-0 p-0 d-flex'>
                                <Col lg={5} className='m-0 p-0'>
                                    <h5>COLOR AVAILABILITY: </h5>
                                </Col>
                                <Col lg={7} className='m-0 p-0'>
                                    <p>{t.color}</p>
                                </Col>
                            </Row>                    
                        </ListGroup.Item>

                        <ListGroup.Item className='m-0 p-1 d-flex'>
                            <h5 className='pr-4'>FABRIC: </h5><p>{t.fabric}</p>
                        </ListGroup.Item>

                        <ListGroup.Item className='m-0 p-1 d-flex'>
                            <h5 className='pr-4'>AVAILABLE SIZES: </h5><p>{t.size}</p>
                        </ListGroup.Item>

                        <ListGroup.Item className='m-1 mb-3 p-1 pb-5 d-flex'>
                            <h5 className='pr-4 pb-4 mb-3'>PRICE: </h5><p></p>
                        </ListGroup.Item>
                    </ListGroup>
                    </Card.Body>
                    </Card>
                </Col>           
            
        ))}
            
        </Row>
        </Container>
    )
}

export default TagsNeon
