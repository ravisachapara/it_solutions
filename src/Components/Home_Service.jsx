import React from 'react'
import { Card } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

const Home_Service = () => {

    const service_data = [
        {
            image: "/images/S1.jpg",
            heading: "Custom Software Development",
            details: "Our team of highly experienced developers brings you custom software development solutions tailored to your business’ specific vision and requirements.",
        },
        {
            image: "/images/S2.jpg",
            heading: "Web Application Development",
            details: "You need a powerful, immersive, easy-to-use, and visually stunning website to get leads, retain them, and convert them into loyal customers. We deal with the latest and most popular web...",
        },
        {
            image: "/images/S3.jpg",
            heading: "Mobile App Development",
            details: "Given how Android and iOS are the two most popular and widely used mobile platforms, creating and using an app for these platforms is mandatory to reach out to your audience.",
        },
        {
            image: "/images/S4.jpg",
            heading: "SaaS Development",
            details: "Software as a service (SaaS) is one of the more popular business models due to its massive Return on Investment (ROI). Businesses of all sizes, across various industries, use this business model to grow.",
        },
        {
            image: "/images/S5.jpg",
            heading: "eCommerce Development",
            details: "We can help you unlock the potential of eCommerce and equip your business with a robust eCommerce website with the best features on the market.web developers who can create custom eCommerce web...",
        },
        {
            image: "/images/S6.jpg",
            heading: "Payment Gateway Integration",
            details: "Giving your customers a seamless experience overall, from start to check out is vital. This includes payments. Payment gateways are crucial to making it easy for the customer to make payments instantly.",
        },
    ]

    return (
        <div className='container pt-5'>
            <div className='d-flex flex-column align-items-center text-center'>
                <h2>Software Development Services Company</h2>
                <span className='heading_border'></span>
                <p className='pt-3 text-center'>
                    Vision Infotech is the ideal solution for all types of offshore development requirements. We are a dependable software outsourcing company in India since we have an export base that specializes in all popular technologies and has a desire to learn and expand exponentially in light of new developments. We are strong, reliable, and uphold work ethic in everything we do, from offshore talent hiring in management and development to mobile app development; front-end development to core web development. We have Dedicated developers of all technology so we provide the best software development services.
                </p>
            </div>
            <div className='row'>
                {service_data.map((e) => {
                    return (
                        <div className='col-12 col-md-6 col-lg-4'>
                            <Card className='service_card py-4 m-3'>
                                <Card.Img variant="top" src={e.image} className='card_img' />
                                <Card.Body>
                                    <Card.Title>{e.heading}</Card.Title>
                                    <Card.Text>
                                        {e.details}
                                    </Card.Text>
                                    <Button variant="primary">More</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Home_Service