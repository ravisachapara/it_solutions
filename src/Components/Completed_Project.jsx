import { Card } from 'react-bootstrap'
import React from 'react'

const Completed_Project = () => {
    return (
        <div className='completed_project'>
            <div className='container mt-3'>
                <div className=' py-3'>
                    <div className='text-center text-light'>
                        <h1 className='py-4'>Build Better Business Software With Vision Infotech</h1>
                        <p className='pb-4'>If you want to grow as a business in the best and fastest possible way, you need a premium software development solution that you can count on.</p>
                    </div>
                    <div className='row'>
                        <div className='col-12 col-md-6 col-lg-4'>
                            <Card className='com_pro_card text-start m-3 cur_pointer'>
                                <Card.Body className='p-5'>
                                    <h1>258+</h1>
                                    <Card.Title>Completed Projects</Card.Title>
                                    <Card.Text>
                                        We have over 258 projects under our belt that we’ve completed for very satisfied clients.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className='col-12 col-md-6 col-lg-4'>
                            <Card className='com_pro_card text-start m-3 cur_pointer'>
                                <Card.Body className='p-5'>
                                    <h1>30+</h1>
                                    <Card.Title>Running Projects</Card.Title>
                                    <Card.Text>
                                        We are currently working on over 45 projects of various types. Our team has enough bandwidth to handle multiple projects simultaneously.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className='col-12 col-md-6 col-lg-4'>
                            <Card className='com_pro_card text-start m-3 cur_pointer'>
                                <Card.Body className='p-5'>
                                    <h1>50+</h1>
                                    <Card.Title>Clients</Card.Title>
                                    <Card.Text>
                                        We have over 78 clients across many sectors. We work with multiple businesses of different types and sizes.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Completed_Project