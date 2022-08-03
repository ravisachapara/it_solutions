import React from 'react'
import Nav from 'react-bootstrap/Nav';
import { Button, Card, Col, Row, Tab } from 'react-bootstrap'

const Protfolio = () => {
    const protfolio_Data = [
        {
            image: "images/protfolio/wordpress_1.jpg",
            project_Name: "ICreateYourLogo",
            category: "wordpress",
            catagory_Name : "WordpressWordpress"
        },
        {
            image: "images/protfolio/wordpress_2.jpg",
            project_Name: "Small Business Consulting",
            category: "wordpress",
            catagory_Name : "Wordpress"
        },
        {
            image: "images/protfolio/wordpress_3.jpg",
            project_Name: "Quincus",
            category: "wordpress",
            catagory_Name : "Wordpress"
        },
        {
            image: "images/protfolio/wordpress_4.jpg",
            project_Name: "Next Wave Insurance Services",
            category: "wordpress",
            catagory_Name : "Wordpress"
        },
        {
            image: "images/protfolio/wordpress_5.jpg",
            project_Name: "Registration Saver",
            category: "wordpress",
            catagory_Name : "Wordpress"
        },
        {
            image: "images/protfolio/wordpress_6.jpg",
            project_Name: "The Resiliency Campaign",
            category: "wordpress",
            catagory_Name : "Wordpress"
        },
        {
            image: "images/protfolio/wordpress_7.jpg",
            project_Name: "Country House Residance",
            category: "wordpress",
            catagory_Name : "Wordpress"
        },
        {
            image: "images/protfolio/UI_UX_1.png",
            project_Name: "Education Hub",
            category: "UI_UX",
            catagory_Name : "UI/UX Design"
        },
        {
            image: "images/protfolio/UI_UX_2.png",
            project_Name: "Cooking Stuff",
            category: "UI_UX",
            catagory_Name : "UI/UX Design"
        },
        {
            image: "images/protfolio/UI_UX_3.png",
            project_Name: "Travel World",
            category: "UI_UX",
            catagory_Name : "UI/UX Design"
        },
        {
            image: "images/protfolio/UI_UX_4.png",
            project_Name: "Dental Care",
            category: "UI_UX",
            catagory_Name : "UI/UX Design"
        },
        {
            image: "images/protfolio/ISO_Android_1.jpg",
            project_Name: "App Lock",
            category: "ISO_Android",
            catagory_Name : "ISO & Android"
        },
        {
            image: "images/protfolio/ISO_Android_2.jpg",
            project_Name: "Bussiness Idea",
            category: "ISO_Android",
            catagory_Name : "ISO & Android"
        },
        {
            image: "images/protfolio/ISO_Android_3.jpg",
            project_Name: "Knife Fruit Splash",
            category: "ISO_Android",
            catagory_Name : "ISO & Android"
        },
        {
            image: "images/protfolio/ISO_Android_4.jpg",
            project_Name: "Maths Learn Point",
            category: "ISO_Android",
            catagory_Name : "ISO & Android"
        },
        {
            image: "images/protfolio/ISO_Android_5.jpg",
            project_Name: "Photo Recovery",
            category: "ISO_Android",
            catagory_Name : "ISO & Android"
        },
        {
            image: "images/protfolio/ISO_Android_6.jpg",
            project_Name: "Photo Collage",
            category: "ISO_Android",
            catagory_Name : "ISO & Android"
        },
        {
            image: "images/protfolio/ISO_Android_7.jpg",
            project_Name: "V Music",
            category: "ISO_Android",
            catagory_Name : "ISO & Android"
        },
        {
            image: "images/protfolio/HTML_1.jpg",
            project_Name: "Scale IT Consultancy",
            category: "HTML",
            catagory_Name : "HTML"
        },
        {
            image: "images/protfolio/HTML_2.jpg",
            project_Name: "Strata",
            category: "HTML",
            catagory_Name : "HTML"
        },
        {
            image: "images/protfolio/HTML_3.jpg",
            project_Name: "Becoming a Sun Programs",
            category: "HTML",
            catagory_Name : "HTML"
        },
    ]


    return (
        <div className='protfolio'>
            <div className='about_us_image'>
                <div className='text-center text-light'>
                    <h1>Protfolio</h1>
                    <p>Browse projects accomplished by Vision Infotech successfully </p>
                </div>
            </div>
            <div className='container'>
                <div className='text-center mt-4'>
                    <h1 className='p-0 m-0'>Our Work</h1>
                    <span className='heading_border'></span>
                    <p className='m-0 text-muted'>Vision Infotech takes pride to have successfully completed hundreds of projects leveraging varying technology expertise across industries. Have a glimpse at them here!</p>
                </div>
                <div>
                    <Tab.Container id="left-tabs-example" defaultActiveKey="all">
                        <Row className='d-flex'>
                            <Nav variant="pills" className="flex-row justify-content-center">
                                <Nav.Item className='m-2 cur_pointer'>
                                    <Nav.Link eventKey="all">All</Nav.Link>
                                </Nav.Item>
                                <Nav.Item className='m-2 cur_pointer'>
                                    <Nav.Link eventKey="wordpress">Wordpress</Nav.Link>
                                </Nav.Item>
                                <Nav.Item className='m-2 cur_pointer'>
                                    <Nav.Link eventKey="UI/UX_Design">UI/UX Design</Nav.Link>
                                </Nav.Item>
                                <Nav.Item className='m-2 cur_pointer'>
                                    <Nav.Link eventKey="IOS&Android">IOS & Android</Nav.Link>
                                </Nav.Item>
                                <Nav.Item className='m-2 cur_pointer'>
                                    <Nav.Link eventKey="HTML/CSS">HTML / CSS</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Row>
                        <Row>
                            <Tab.Content className="">
                                <Tab.Pane eventKey="all">
                                    <div className='row'>
                                        {
                                            protfolio_Data.map((e) => {
                                                return (
                                                    <div className='col-12 col-sm-2 col-lg-4'>
                                                        <div className='p-3'>
                                                            <Card>
                                                                <Card.Img variant="top" src={e.image} width="350" height="270"/>
                                                                <Card.Body>
                                                                    <Card.Title>{e.project_Name}</Card.Title>
                                                                    <Card.Text>{e.catagory_Name}</Card.Text>
                                                                </Card.Body>
                                                            </Card>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="wordpress">
                                    <div className='row'>
                                        {
                                            protfolio_Data.map((e) => {
                                                return (
                                                    e.category === "wordpress" ?
                                                        <div className='col-12 col-sm-2 col-lg-4'>
                                                            <div className='p-3'>
                                                                <Card>
                                                                    <Card.Img variant="top" src={e.image} width="350" height="270"/>
                                                                    <Card.Body>
                                                                        <Card.Title>{e.project_Name}</Card.Title>
                                                                        <Card.Text>{e.catagory_Name}</Card.Text>
                                                                    </Card.Body>
                                                                </Card>
                                                            </div>
                                                        </div>
                                                        : ""
                                                )
                                            })
                                        }
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="UI/UX_Design">
                                <div className='row'>
                                        {
                                            protfolio_Data.map((e) => {
                                                return (
                                                    e.category === "UI_UX" ?
                                                        <div className='col-12 col-sm-2 col-lg-4'>
                                                            <div className='p-3'>
                                                                <Card>
                                                                    <Card.Img variant="top" src={e.image} width="350" height="270" />
                                                                    <Card.Body>
                                                                        <Card.Title>{e.project_Name}</Card.Title>
                                                                        <Card.Text>{e.catagory_Name}</Card.Text>
                                                                    </Card.Body>
                                                                </Card>
                                                            </div>
                                                        </div>
                                                        : ""
                                                )
                                            })
                                        }
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="IOS&Android">
                                <div className='row'>
                                        {
                                            protfolio_Data.map((e) => {
                                                return (
                                                    e.category === "ISO_Android" ?
                                                        <div className='col-12 col-sm-2 col-lg-4'>
                                                            <div className='p-3'>
                                                                <Card>
                                                                    <Card.Img variant="top" src={e.image} width="350" height="270" />
                                                                    <Card.Body>
                                                                        <Card.Title>{e.project_Name}</Card.Title>
                                                                        <Card.Text>{e.catagory_Name}</Card.Text>
                                                                    </Card.Body>
                                                                </Card>
                                                            </div>
                                                        </div>
                                                        : ""
                                                )
                                            })
                                        }
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="HTML/CSS">
                                <div className='row'>
                                        {
                                            protfolio_Data.map((e) => {
                                                return (
                                                    e.category === "HTML" ?
                                                        <div className='col-12 col-sm-2 col-lg-4'>
                                                            <div className='p-3'>
                                                                <Card>
                                                                    <Card.Img variant="top" src={e.image} width="350" height="270" />
                                                                    <Card.Body>
                                                                        <Card.Title>{e.project_Name}</Card.Title>
                                                                        <Card.Text>{e.catagory_Name}</Card.Text>
                                                                    </Card.Body>
                                                                </Card>
                                                            </div>
                                                        </div>
                                                        : ""
                                                )
                                            })
                                        }
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

export default Protfolio