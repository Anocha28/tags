import React from 'react'
import {Image,Container, Card, Row, Col} from 'react-bootstrap'
import { linesheet } from '../data/Linesheet'


const LineSheet = () => {
    return (
        <Container >
            <Row className='d-flex'>
            <Col lg={3} md={3} sm={3}>
                <Image src={process.env.PUBLIC_URL + '/linesheet/logo.png'} className='w-100 pt-0'/>
            </Col>

            <Col lg={2} md={2} sm={2} className=' pt-2 pl-2 pr-0'>
                <p className='m-0 p-0'><strong>Brand: </strong>Neon Buddha</p>
                <p className='m-0 p-0'><strong>Collection: </strong>Essentials</p>
            </Col>

            <Col lg={2} md={2} sm={2} className='m-0 pt-2 pl-2 pr-0'>
                <p className='m-0 p-0'><strong>Season: </strong>2022 Spring</p>
                <p className='m-0 p-0'><strong>Story n#: </strong>1</p>
            </Col>

            <Col lg={5} md={5} sm={5} className='mt-3 pl-5 p-0'>
                <p className='p-0'><strong>Delivery: </strong>Jul 01, 2022 - Dec 31, 2022</p>
            </Col>   
            </Row>
            

            <Row className='m-0 p-1'>
            {linesheet.map(l=> (
                <Col xl={4} lg={4} md={4} sm={4} xs={4} className='m-0 px-3' key={l.style}>
                <Card className='m-0 p-2 border-0'>
                    <Row>
                        <Col xl={5} lg={5} md={5} sm={5} xs={5} className='wrapper m-0 p-0'>
                        <img className="img-fluid" src={process.env.PUBLIC_URL + `${l.image}`} alt={l.style} />
                        </Col>
                        <Col xl={7} lg={7} md={7} sm={7} xs={7} className='m-0 p-0'>
                            <h3 className='my-1 mx-0 p-0'>{l.name}</h3>
                            <p className='m-0 p-0'><strong>Sytle n# </strong>{l.style}</p>
                            <p className='m-0 p-0'><strong>Size Availability </strong></p>
                            <p className='m-0 p-0'>{l.size}</p>
                            <p className='m-0 p-0'><strong>Length: </strong>{l.length}</p>
                            <p className='m-0 p-0'><strong>HSP: </strong>{l.hsp}</p>
                            <p className='m-0 p-0'><strong>Fabric 1: </strong>{l.fabric}</p>
                            <p className='m-0 p-0'><strong>Fabric Content: </strong>{l.content}</p>
                        </Col>
                    </Row>
                    <Row className='mx-0 my-2 p-0'>
                       <Col xl={6} lg={6} md={6} sm={6} xs={6} className='m-0 p-0'>
                        <p className='m-0 p-0'><strong>Price </strong> CA $ {l.price}</p>
                       </Col> 
                       <Col xl={6} lg={6} md={6} sm={6} xs={6} className='m-0 p-0'>
                        <p className='m-0 p-0'><strong>Women: </strong> CA $ {l.wprice}</p>
                       </Col>
                    </Row>
                    <Row className='m-0 p-0'>
                        {l.color.map( c => (
                            <Col xl={3} lg={3} md={3} sm={3} xs={3} className='m-0 p-0' key={c.code}>
                            <Card className='m-0 p-0 border-0'>
                                <small className='text-center m-0 p-0 pcolor'>{c.code}</small>
                                <small className='text-center text-nowrap m-0 p-0 pcolor'>{c.name}</small>
                                <div className='m-0 p-0 wrappercolor'>
                                <img className="img-fluid w-100 px-3 pt-0 m-0" src={process.env.PUBLIC_URL + `${c.image}`} alt={c.code}/>
                                </div>
                            </Card>
                            </Col>
                        ))}
                    </Row>
                    
                </Card>
                </Col>
            ))}
            
            </Row>

      
        </Container>
    )
}

export default LineSheet
