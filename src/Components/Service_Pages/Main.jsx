import React from 'react'
import { Card } from 'react-bootstrap'

const Main = () => {
    const Value_Data = [
        {
            title: "WordPress Integration & Customization",
            details: "We are a friendly squad of WordPress enthusiasts who keep their nails sharpened with the latest features, upgrades, and integration, as well as years of domain experience."
        },
        {
            title: "Enterprise WordPress Development",
            details: "We offer end-to-end WordPress high-performance and flexible Enterprise CMS Development Services relating to corporate web portals and e-commerce cases."
        },
        {
            title: "WordPress Support & Maintenance",
            details: "As a world-class WordPress development company, we are here to assist you with seamless support and maintenance with our resilient and reasonable products."
        },
        {
            title: "WordPress CMS Development",
            details: "We build feature-rich content management systems using WordPress. Our years of experience allow us to create flawless custom CMS websites."
        },
        {
            title: "WordPress eCommerce Solution",
            details: "We create a tailored eCommerce website for your business. We also integrate necessary plugins and features to build a functional eCommerce website that will give a robust online presence."
        },
        {
            title: "WordPress Migration Service",
            details: "We manage the entire migration process, from coding to content, of your existing website to WordPress with zero downtime, allowing you to take advantage of all advanced functionality."
        },
    ]

    return (
        <div>
            <div className='pages_ser_main'>
                <div className='service_us_image'>
                    <div className=' text-center text-light'>
                        <h1>WordPress</h1>
                        <p>Vision Infotech is the one-stop destination that addresses all your technological needs to scale and grow your business.
                            <br />Our mission is simple – YOUR GROWTH.</p>
                    </div>
                </div>
                <div className='container'>
                    <div className='d-flex flex-column align-items-center text-center mt-5'>
                        <h2>Extend your reach with innovation</h2>
                        <span className='heading_border'></span>
                        <p className='pt-3 text-center'>
                            We deliver world-class WordPress web development services to enterprises, small businesses, government organizations, and startups who want to create customized WordPress websites or plan to migrate their existing website. To keep you ahead of the competition, Vision Infotech creates interactive and professional websites focused on the client’s specifications and ideology.
                        </p>

                        <h2 className='mt-5'>What We Do?</h2>
                        <span className='heading_border'></span>
                        <p className='pt-3 text-center'>
                            Scaling business to new heights with MS SQL Database Development Services.
                        </p>
                    </div>

                    <div className='row'>
                        <div className='col-12 col-lg-6'>
                            <div className='row'>
                                {
                                    Value_Data.map((e) => {
                                        return (
                                            <div className='col-12 col-md-6 col-lg-4'>
                                                <Card className='my-4 services_card text-muted'>
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
            </div>
        </div>
    )
}

export default Main