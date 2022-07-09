import React, { useEffect } from 'react'
import { Card } from 'react-bootstrap'

const Main = (props) => {
    useEffect(() => {
        console.log(props.card_Data)
    })
    
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
                        <h1>{props.language_Name}</h1>
                    </div>
                </div>
                <div className='container'>
                    <div className='d-flex flex-column align-items-center text-center mt-5'>
                        <h2>{props.h_1}</h2>
                        <span className='heading_border'></span>
                        <p className='pt-3 text-center'>
                            {props.d_1}
                        </p>

                        <h2 className='mt-5'>{props.h_2}</h2>
                        <span className='heading_border'></span>
                        <p className='pt-3 text-center'>
                        {props.d_1}
                        </p>
                    </div>
                    <div className='row d-flex'>
                        <div className='row'>
                            {
                                props.card_Data.map((e) => {
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
    )
}

export default Main