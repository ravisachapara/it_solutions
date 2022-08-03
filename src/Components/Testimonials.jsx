import React from 'react'
import { Button, Card } from 'react-bootstrap';
import OwlCarousel from 'react-owl-carousel';
import GetInTouch from './GetInTouch';

const Testimonials = () => {
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

    let options = {
        loop: true,
        margin: 10,
        // nav:true,
        // navText: ["Prev", "Next"],
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items:4
            }
        }
    }
    return (
        <div>
            <div className='testimonials_image'>
                <div className='text-center text-light'>
                    <h1>Clients Testimonials</h1>
                    <p>We build exemplary IT solutions and help businesses climb the ladder to success.
                        <br />Unable to believe it? Well, our client testimonials corroborate that!</p>
                </div>
            </div>
            <div className='container'>
                <div className='text-center m-4'>
                    <h1 className='p-0 m-0'>What Are Our Clients Saying?</h1>
                    <span className='heading_border'></span>
                    <p className='m-0 text-muted'>Our clients’ testimonials say it all!</p>
                </div>
                <div className='row'>
                    <OwlCarousel className='owl-theme' {...options}>
                        {testimonials_Data.map((e) => {
                            return (
                                <div className='p-2 testimonials_card'>
                                    <Card className='p-3'>
                                         <Card.Body>
                                           <div className='w-50'>
                                                <Card.Img variant="top" src={e.image} className='rounded-circle' />
                                            </div>
                                            <Card.Title className='pt-3'>{e.name}</Card.Title>
                                            <Card.Text className='muted'>{e.details}</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                            )
                        })}
                    </OwlCarousel>
                </div>
                <GetInTouch />
            </div>
        </div>
    )
}

export default Testimonials 