import React, { useEffect } from 'react'
import { Card } from 'react-bootstrap'
import GetInTouch from '../GetInTouch'

const Main = (props) => {
   
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
                                            <Card data-aos="zoom-in" data-aos-duration='700' className='my-4 services_card text-muted'>
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
                    <GetInTouch />
                </div>
            </div>
        </div>
    )
}

export default Main