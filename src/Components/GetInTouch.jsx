import React from 'react'
import { Button, Card } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import OwlCarousel from 'react-owl-carousel';

const GetInTouch = () => {
    let options = {
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 2000,
        smartSpeed: 2000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    }

    const testimonials_Data = [
        {
            image: "/images/testimonial/testimonial_1.jpg",
            name: "Jamal Newborn",
            details: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus, incidunt illo? Distinctio obcaecati eaque odio ipsa ipsum dicta, corrupti, consequatur explicabo minus iste velit ea fugiat enim, ab nihil deserunt."
        },
        {
            image: "/images/testimonial/testimonial_2.jpg",
            name: "Jamal Newborn",
            details: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus, incidunt illo? Distinctio obcaecati eaque odio ipsa ipsum dicta, corrupti, consequatur explicabo minus iste velit ea fugiat enim, ab nihil deserunt."
        },
        {
            image: "/images/testimonial/testimonial_3.jpg",
            name: "Jamal Newborn",
            details: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus, incidunt illo? Distinctio obcaecati eaque odio ipsa ipsum dicta, corrupti, consequatur explicabo minus iste velit ea fugiat enim, ab nihil deserunt."
        },
        {
            image: "/images/testimonial/testimonial_4.jpg",
            name: "Jamal Newborn",
            details: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus, incidunt illo? Distinctio obcaecati eaque odio ipsa ipsum dicta, corrupti, consequatur explicabo minus iste velit ea fugiat enim, ab nihil deserunt."
        },
        {
            image: "/images/testimonial/testimonial_5.jpg",
            name: "Jamal Newborn",
            details: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus, incidunt illo? Distinctio obcaecati eaque odio ipsa ipsum dicta, corrupti, consequatur explicabo minus iste velit ea fugiat enim, ab nihil deserunt."
        },
        {
            image: "/images/testimonial/testimonial_6.jpg",
            name: "Jamal Newborn",
            details: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus, incidunt illo? Distinctio obcaecati eaque odio ipsa ipsum dicta, corrupti, consequatur explicabo minus iste velit ea fugiat enim, ab nihil deserunt."
        },
    ]


    return (
        <div className='container my-3'>
            <div className='row align-items-center justify-content-between'>
                <div className='col-12 col-md-6'>
                    <div className='pb-4'>
                        <h1 className='p-0 m-0'>Let’s get in touch</h1>
                        <span className='heading_border'></span>
                        <p className='m-0 text-muted'>Let’s get in touch to build future-ready applications together!</p>
                    </div>
                    <Form className='mb-4'>
                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="John Smith" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control type="tel" placeholder="+91 98789 78678" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        <Button className="primary_btn">Talk to Expert</Button>
                    </Form>
                </div>
                <div className='col-12 col-md-5 getInTouch_part-2 '>
                    <div className='m-5 py-4'>
                        <OwlCarousel className='owl-theme' {...options}>
                            {testimonials_Data.map((e) => {
                                return (
                                    <div className=''>
                                        <Card className='p-3'>
                                            <Card.Body className="d-flex flex-column align-items-center text-light">
                                                <div className='w-25'>
                                                    <Card.Img variant="top" src={e.image} className='rounded-circle' />
                                                </div>
                                                <Card.Text className='text-center'>{e.details}</Card.Text>
                                                <Card.Title className='pt-3'>{e.name}</Card.Title>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                )
                            })}
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GetInTouch