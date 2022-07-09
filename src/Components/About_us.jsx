import React from 'react'
import { Button, Card } from 'react-bootstrap'

const About_us = () => {
    const Value_Data = [
        {
            img: "/images/A_V_1.jpg",
            title: "Respect",
            details: "We strive to show deep respect for employees inside and outside our company and for the clients with whom we collaborate. We respect the user’s voice, too!"
        },
        {
            img: "/images/A_V_2.jpg",
            title: "Exceptional value",
            details: "Vision Infotech focuses on delivering exceptional value to its customers using our knowledge and consultative approach. Our purpose is simple - DELIVER WOW."
        },
        {
            img: "/images/A_V_3.jpg",
            title: "Authenticity",
            details: "We value authenticity and its connection to our mission. This helps our clients trust us and employees to inspire each other and make work more meaningful."
        },
        {
            img: "/images/A_V_4.jpg",
            title: "Leadership",
            details: "Our creative leaders inspire growth and innovation through learning. We have a passion for progress, and thus, we achieve success by celebrating the success of others."
        },
        {
            img: "/images/A_V_5.jpg",
            title: "Quest for perfection",
            details: "We chase perfection in every work we take at hand and thrive to catch excellence. With an uncompromising focus on the deliverables, we achieve excellence together."
        },
        {
            img: "/images/A_V_6.jpg",
            title: "Personal Approach",
            details: "We’re growing not for ourselves but for everyone associated with us. We work in an environment that fosters personal development and infuses professional growth."
        },
    ]


    return (
        <div className='about_us'>
            <div className='about_us_image'>
                <div className=' text-center text-light'>
                    <h1>About us</h1>
                    <p>Vision Infotech is the one-stop destination that addresses all your technological needs to scale and grow your business.
                        <br />Our mission is simple – YOUR GROWTH.</p>
                </div>
            </div>
            <div className='founder_data my-3'>
                <div className='container'>
                    <div className='d-flex flex-column align-items-center text-center'>
                        <h2 className='second_heading'>Founders</h2>
                    </div>
                    <div className='row'>
                        <div className='d-flex justify-content-center my-4'>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="/images/testimonials-1.jpg" />
                                <Card.Body className='text-center'>
                                    <Card.Title>Hardik Jasoliya</Card.Title>
                                    <h5 className='text-muted mb-3'>Founder</h5>
                                    <a className="linkedin_icon">
                                        <img src='/images/linkedin.png' />
                                    </a>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
            <div className='our_vision my-3'>
                <div className='container'>
                    <div className='d-flex flex-column align-items-center text-center'>
                        <h1 className='second_heading'>Our Vision</h1>
                        <p className='text-muted'>To accelerate your business’s growth with a wide variety of technology solutions. Yes, your growth is our vision. Established in 2012, Vision Infotech is unifying its business domain expertise, technical proficiency, and vast knowledge of the latest industrial developments to create a future-ready business for you.</p>
                    </div>
                </div>
            </div>
            <div className='our_mission my-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 col-md-6'>
                            <img src='/images/mission.jpg' className='w-100'></img>
                        </div>
                        <div className='col-12 col-md-6'>
                            <div className='our_mission_details d-flex flex-column align-items-start'>
                                <h1 className='second_heading'>Our Mission</h1>
                                <p className='text-muted'>To accelerate your business’s growth with a wide variety of technology solutions. Yes, your growth is our vision. Established in 2012, Vision Infotech is unifying its business domain expertise, technical proficiency, and vast knowledge of the latest industrial developments to create a future-ready business for you.</p>
                                <h5>When you partner with Vision Infotech, you can expect:</h5>
                                <ul className='text-muted'>
                                    <li>The right frame of project management efforts</li>
                                    <li>A client-centric approach to build the best products</li>
                                    <li>A high degree of security throughout the projects</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='our_vision my-3'>
                <div className='container'>
                    <div className='d-flex flex-column align-items-center text-center'>
                        <h1 className='second_heading'>Our Values</h1>
                        <p className='text-muted'>We are a dominating IT solutions provider company that has catered to hundreds of clients, and we believe our values keep them bringing more business.</p>
                    </div>
                    <div className='row'>
                        {
                            Value_Data.map((e) => {
                                return (
                                    <div className='col-12 col-md-6 col-lg-4'>
                                        <Card className='py-4 my-4 our_vision_card'>
                                            <Card.Img variant="top" src={e.img} className='card_img mx-3' />
                                            <Card.Body>
                                                <Card.Title>{e.title}</Card.Title>
                                                <Card.Text className='text-muted'>
                                                    {e.details}
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About_us