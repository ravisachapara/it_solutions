import React from 'react'
import { Button, Card, Nav, Row, Tab } from 'react-bootstrap'
import { Link } from "react-router-dom";
const Services = () => {
    const frontend = [
        {
            image: "/images/language-images/Wordpress.png",
            name: "Wordpress",
            path: "/services/wordpress"
        },
        {
            image: "/images/language-images/ajax.jpg",
            name: "Ajax",
            path: "/services/ajax"
        },
        {
            image: "/images/language-images/bootstrap.png",
            name: "Bootstrap",
            path: "/services/bootstrap"
        },
        {
            image: "/images/language-images/React.png",
            name: "React",
            path: "/services/react"
        },
        {
            image: "/images/language-images/vue.png",
            name: "Vue JS",
            path: "/services/vue"
        },
        {
            image: "/images/language-images/anguler.png",
            name: "Angular",
            path: "/services/anguler"
        }
    ]
    const backend = [
        {
            image: "/images/language-images/NET.png",
            name: ".NET",
            path: "/services/net"
        },
        {
            image: "/images/language-images/mysql.png",
            name: "MY SQL",
            path: "/services/MySQL"
        },
        {
            image: "/images/language-images/Wordpress.png",
            name: "Wordpress",
            path: "/services/wordpress"
        },
        {
            image: "/images/language-images/mongodb.png",
            name: "Mongo DB",
            path: "/services/MongoDB"
        },
        {
            image: "/images/language-images/mssql.svg",
            name: "MS SQL",
            path: "/services/MsSQL"
        }
    ]
    const mobility = [
        {
            image: "/images/language-images/ios.png",
            name: "IOS",
            path: "/services/iOS"
        },
        {
            image: "/images/language-images/flutter.png",
            name: "Flutter",
            path: "/services/Flutter"
        },
        {
            image: "/images/language-images/android.png",
            name: "Android",
            path: "/services/Android"
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
                                                    <Card data-aos="zoom-in" data-aos-duration='700' className='main_service_card service_card py-4 m-3'>
                                                        <Card.Img variant="top" src={e.image} className='card_img' />
                                                        <Card.Body>
                                                            <Card.Title>{e.name}</Card.Title>
                                                            <div>
                                                                <Link to={e.path} className="primary_btn_service">More</Link>
                                                            </div>
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
                                                    <Card data-aos="zoom-in" data-aos-duration='700' className='main_service_card service_card py-4 m-3'>
                                                        <Card.Img variant="top" src={e.image} className='card_img' />
                                                        <Card.Body>
                                                            <Card.Title>{e.name}</Card.Title>
                                                            <div>
                                                                <Link to={e.path} className="primary_btn_service">More</Link>
                                                            </div>
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
                                                    <Card data-aos="zoom-in" data-aos-duration='700' className='main_service_card service_card py-4 m-3'>
                                                        <Card.Img variant="top" src={e.image} className='card_img' />
                                                        <Card.Body>
                                                            <Card.Title>{e.name}</Card.Title>
                                                            <div>
                                                                <Link to={e.path} className="primary_btn_service">More</Link>
                                                            </div>
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