import React from 'react'
import { Button, Card, Nav, Row, Tab } from 'react-bootstrap'
import { Link } from "react-router-dom";
const Services = () => {
    const frontend = [
        {
            image: "/images/language-images/Wordpress.png",
            name: "Wordpress"
        },
        {
            image: "/images/language-images/ajax.jpg",
            name: "Ajax"
        },
        {
            image: "/images/language-images/bootstrap.png",
            name: "Bootstrap"
        },
        {
            image: "/images/language-images/React.png",
            name: "React"
        },
        {
            image: "/images/language-images/vue.png",
            name: "Vue JS"
        },
        {
            image: "/images/language-images/anguler.png",
            name: "Angula"
        }
    ]
    const backend = [
        {
            image: "/images/language-images/NET.png",
            name: ".NET"
        },
        {
            image: "/images/language-images/mysql.png",
            name: "MY SQL"
        },
        {
            image: "/images/language-images/Wordpress.png",
            name: "Wordpress"
        },
        {
            image: "/images/language-images/mongodb.png",
            name: "Mongo DB"
        },
        {
            image: "/images/language-images/mssql.svg",
            name: "MS SQL"
        }
    ]
    const mobility = [
        {
            image: "/images/language-images/ios.png",
            name: "iOS"
        },
        {
            image: "/images/language-images/flutter.png",
            name: "Flutter"
        },
        {
            image: "/images/language-images/android.png",
            name: "Android"
        }
    ]


    return (
        <div className='services_Main'>
            <div className='service_us_image'>
                <div className=' text-center text-light'>
                    <h1>Services</h1>
                    <p>Vision Infotech is the one-stop destination that addresses all your technological needs to scale and grow your business.
                        <br />Our mission is simple – YOUR GROWTH.</p>
                </div>
            </div>
            <div className='container'>
                <div className='text-center mt-4'>
                    <h1 className='p-0 m-0'>All Services</h1>
                    <span className='heading_border'></span>
                    <p className='m-0 text-muted'>We make it a priority to update ourselves with the latest technologies and frameworks on the market for frontend, backend development and mobility.</p>
                </div>
                <div>
                    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                        <Row className='d-flex'>
                            <Nav variant="pills" className="flex-row justify-content-center">
                                <Nav.Item className='m-2 cur_pointer'>
                                    <Nav.Link eventKey="first">Frontend</Nav.Link>
                                </Nav.Item>
                                <Nav.Item className='m-2 cur_pointer'>
                                    <Nav.Link eventKey="second">Backend</Nav.Link>
                                </Nav.Item>
                                <Nav.Item className='m-2 cur_pointer'>
                                    <Nav.Link eventKey="third">Mobility</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Row>
                        <Row>
                            <Tab.Content className="">
                                <Tab.Pane eventKey="first">
                                    <div className='row'>
                                        {frontend.map((e) => {
                                            return (

                                                <div className='col-12 col-md-6 col-lg-4'>
                                                    <Card className='main_service_card service_card py-4 m-3'>
                                                        <Card.Img variant="top" src={e.image} className='card_img' />
                                                        <Card.Body>
                                                            <Card.Title>{e.name}</Card.Title>
                                                            {/* <Card.Text>
                                                            {e.details}
                                                        </Card.Text> */}
                                                            <Link to="/services/worpress" variant="primary">More</Link>
                                                        </Card.Body>
                                                    </Card>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <div className='row'>
                                        {backend.map((e) => {
                                            return (
                                                <div className='col-12 col-md-6 col-lg-4'>
                                                    <Card className='main_service_card service_card py-4 m-3'>
                                                        <Card.Img variant="top" src={e.image} className='card_img' />
                                                        <Card.Body>
                                                            <Card.Title>{e.name}</Card.Title>
                                                            {/* <Card.Text>
                                                            {e.details}
                                                        </Card.Text> */}
                                                            <Button variant="primary">More</Button>
                                                        </Card.Body>
                                                    </Card>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <div className='row'>
                                        {mobility.map((e) => {
                                            return (
                                                <div className='col-12 col-md-6 col-lg-4'>
                                                    <Card className='main_service_card service_card py-4 m-3'>
                                                        <Card.Img variant="top" src={e.image} className='card_img' />
                                                        <Card.Body>
                                                            <Card.Title>{e.name}</Card.Title>
                                                            {/* <Card.Text>
                                                            {e.details}
                                                        </Card.Text> */}
                                                            <Button variant="primary">More</Button>
                                                        </Card.Body>
                                                    </Card>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </Tab.Pane>
                            </Tab.Content>
                        </Row>
                    </Tab.Container>
                </div>
            </div>
        </div>
    )
}

export default Services