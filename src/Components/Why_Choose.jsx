import React from 'react'
import { Card, Col, Nav, Row, Tab } from 'react-bootstrap'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Why_Choose = () => {
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
            path:"/services/net"
        },
        {
            image: "/images/language-images/mysql.png",
            name: "MY SQL",
            path:"/services/mysql"
        },
        {
            image: "/images/language-images/Wordpress.png",
            name: "Wordpress",
            path:"/services/wordpress"
        },
        {
            image: "/images/language-images/mongodb.png",
            name: "Mongo DB",
            path:"/services/mongodb"
        },
        {
            image: "/images/language-images/mssql.svg",
            name: "MS SQL",
            path:"/services/mssql"
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
    
    let options = {
        loop: false,
        margin:10,
        // nav:true,
        // navText: ["Prev", "Next"],
        smartSpeed: 1000,
        responsive:{
            0:{
                items:3
            },
            600:{
                items:5
            },
            1000:{
                items:7
            }
        }
    }

    return (
        <div>
            <div className='why_choose'>
                <div className='container mt-5'>
                    <div className='py-3'>
                        <div className='text-center'>
                            <h1 className='p-0 m-0'>Why Choose Us?</h1>
                            <span className='heading_border'></span>
                            <p className='pb-4'>Software outsourcing is becoming incredibly popular. Many companies rely on trainees and interns in order to produce cost-effective software at a rapid pace. Hiring a specific human resource for a single project that you may or may not receive in the future appears to be a waste of money. Furthermore, if you know that you can get a module produced for a lesser price in another country without sacrificing quality or time, it is not a sensible idea to do so. For firms looking to save costs and focus on core business tasks, software outsourcing is a far better and smarter solution.</p>
                        </div>
                        <div className='row'>
                            <div className='col-12 col-md-6 col-lg-4'>
                                <Card className='why_choose_card text-start m-3 cur_pointer'>
                                    <Card.Body className='p-5'>
                                        <img src='/images/w_c.jpg'></img>
                                        <Card.Title>Hire Dedicated Developers</Card.Title>
                                        <Card.Text>
                                            You get exclusive access to highly experienced developers who can craft solutions according to your requirements. This means web, app, eCommerce, custom software developers, and many more.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className='col-12 col-md-6 col-lg-4'>
                                <Card className='why_choose_card text-start m-3 cur_pointer'>
                                    <Card.Body className='p-5'>
                                        <img src='/images/w_c.jpg'></img>
                                        <Card.Title>Dedicated Software Development Teams</Card.Title>
                                        <Card.Text>
                                            We have dedicated teams that cater to all your requirements, including web development, full-stack development, eCommerce development, and other services.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className='col-12 col-md-6 col-lg-4'>
                                <Card className='why_choose_card text-start m-3 cur_pointer'>
                                    <Card.Body className='p-5'>
                                        <img src='/images/w_c.jpg'></img>
                                        <Card.Title>Timely Delivery</Card.Title>
                                        <Card.Text>
                                            We believe in delivering solutions as quickly and efficiently as we possibly can. You can expect us to craft solutions based on your requirements and deliver them in the stipulated time frame.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
                {/* New Section */}
                <div className='container choose_tab'>
                    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                        <Row className='d-flex align-items-center'>
                            <Col lg={4} className="order-2  order-lg-1">
                                <Nav variant="pills" className="flex-column">
                                    <Nav.Item>
                                        <Nav.Link eventKey="first">
                                            <h3>Technology Competence</h3>
                                            <p>Our competence in various technologies empowers us to deliver scalable and robust applications, and that too, at competitive prices. Our developers continuously stay engrossed to learn new technology products and meet the ever-changing demands of our customers.</p>
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second">
                                            <h3>Ideas Paired With Passion</h3>
                                            <p>We work tirelessly to bring fresh ideas to the table every time. Our expertise in the domain and industry enables us to provide uncomplicated business solutions. At Vision Infotech, we aim at delivering ideas that lead to client success and satisfaction.</p>
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="third">
                                            <h3>Agile Development</h3>
                                            <p>We are known for deploying the best practices and methods using agile development. Our client-centric approach ensures that we deliver superior results on time, within budget, and as promised.</p>
                                        </Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                            <Col lg={8} className="order-1 order-lg-1">
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        <img src='/images/T1.jpg' width={'100%'}></img>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        <img src='/images/T3.jpg' width={'100%'}></img>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third">
                                        <img src='/images/T2.jpg' width={'100%'}></img>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </div>
                {/* New Section */}
                <div className='container'>
                    <div className='text-center mt-4'>
                        <h1 className='p-0 m-0'>Trusted Software Outsourcing Company and Software Development Services Company</h1>
                        <span className='heading_border'></span>
                        <p className='pb-4 text-muted'>We are a highly transparent and reliable pool of expertise capable of meeting a wide range of IT-related demands and criteria. The brilliant minds working together have mastered the art of developing customer-specific job deliverables that create profitable end results! We take great delight in the numerous joyful comments we’ve received after serving numerous companies and clients who give happy testimonials to appreciate our work.</p>
                    </div>
                    <div className='text-muted'>
                        <p>We have a various service portfolio that includes the following:</p>
                        <ol type="1">
                            <li>Frontend Development of web in all the latest and popular best technologies like Node JS, React JS, Angular JS, Bootstrap, and Progressive Web App Development.</li>
                            <li>Mobile Application Development in latest technologies like  Xamarin, iOS, React Native, iOS Native, Android, Flutter.</li>
                            <li>Software and Web Development in PHP,.NET, C#, Java J2EE, Asp.NET, and MVC. </li>
                            <li>As a Software Outsourcing Company in India, We have Dedicated software developers in .NET and PHP.</li>
                        </ol>
                    </div>
                </div>
                {/* New Section */}
                <div className='container'>
                    <div className='text-center mt-4'>
                        <h1 className='p-0 m-0'>Software Development Technologies</h1>
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
                                        <OwlCarousel className='owl-theme' {...options}>
                                            {frontend.map((e) => {
                                                return (
                                                    <div className='item'>
                                                        <img className='' src={e.image} />
                                                    </div>
                                                )
                                            })}
                                        </OwlCarousel>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        <OwlCarousel className='owl-theme' {...options}>
                                            {backend.map((e) => {
                                                return (
                                                    <div className='item'>
                                                        <img className='' src={e.image} />
                                                    </div>
                                                )
                                            })}
                                        </OwlCarousel>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third">
                                        <OwlCarousel className='owl-theme' {...options}>
                                            {mobility.map((e) => {
                                                return (
                                                    <div className='item'>
                                                        <img className='' src={e.image} />
                                                    </div>
                                                )
                                            })}
                                        </OwlCarousel>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Row>
                        </Tab.Container>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Why_Choose