import React from 'react'
import { Accordion } from 'react-bootstrap'

const FAQs_Related = () => {
    return (
        <div className='FAQs_Related' id='FAQs_Related'>
            <div className='container my-5'>
                <div className='text-center mt-5'>
                    <h1 className='p-0 m-0'>FAQs Related To Software Development</h1>
                    <span className='heading_border'></span>
                    <p className='pb-4'>Take a look at some of the most commonly asked questions we receive. </p>
                </div>
                <Accordion>
                    <div  data-aos="fade-down" data-aos-duration='700' className='row d-flex align-items-center'>
                        <div className='col-12 col-md-6'>
                            <Accordion.Item eventKey="0" className="my-2 accordion_Border">
                                <Accordion.Header>1. What should I look for in a software application development company?</Accordion.Header>
                                <Accordion.Body>
                                    You should look out for the services the company offers, their dedicated teams, the overall experience they have, and the projects they have taken up and completed. Also, check if they have been recognized and awarded for their performance.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1" className="my-2 accordion_Border">
                                <Accordion.Header>2. What do we do as a software development company?</Accordion.Header>
                                <Accordion.Body>
                                    We come up with custom solutions based on the business’ requirements.
                                    <ul>
                                        <li>We create programs with multiple functions that help potential customers</li>
                                        <li>We create solutions for specific problems</li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2" className="my-2 accordion_Border">
                                <Accordion.Header>3. How to choose a software development services company?</Accordion.Header>
                                <Accordion.Body>
                                    Choose the right software development services company based on:
                                    <ul>
                                        <li>Company reviews</li>
                                        <li>The company’s portfolio</li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3" className="my-2 accordion_Border">
                                <Accordion.Header>4. What are the software development services provided by our software development company?</Accordion.Header>
                                <Accordion.Body>
                                    We provide web, frontend, backend, app, eCommerce, custom software, full-stack, and SaaS development solutions.
                                </Accordion.Body>
                            </Accordion.Item>
                        </div>
                        <div className='col-12 col-md-6'>
                            <Accordion.Item eventKey="4" className="my-2 accordion_Border">
                                <Accordion.Header>5. What are the types of software development?</Accordion.Header>
                                <Accordion.Body>
                                The different types of software development:
                                <ul>
                                        <li>Web Development</li>
                                        <li>Data Science Solutions</li>
                                        <li>Mobile App Development</li>
                                        <li>Cloud Computing</li>
                                        <li>Back-end Development</li>
                                        <li>API Development</li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="5" className="my-2 accordion_Border">
                                <Accordion.Header>6. What is the most important step to develop custom software?</Accordion.Header>
                                <Accordion.Body>
                                To develop custom software, you need to find the right team of developers who understand what you want the software to do. This means they need to be aware of your business processes and business vision before they implement the right features.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="6" className="my-2 accordion_Border">
                                <Accordion.Header>7. What software development tools do you use to develop apps and software?</Accordion.Header>
                                <Accordion.Body>
                                We use many tools for development, including GitHub, Trello, BitBucket, Jira, etc
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="7" className="my-2 accordion_Border">
                                <Accordion.Header>8. What are the software development life cycle phases?</Accordion.Header>
                                <Accordion.Body>
                                Software Development Life Cycle is made up of seven different phases, which are as follows:
                                <li>Planning</li>
                                <li>Analysis</li>
                                <li>Design</li>
                                <li>Development</li>
                                <li>Testing</li>
                                <li>Deployment</li>
                                <li>Support and Maintenance</li>
                                </Accordion.Body>
                            </Accordion.Item>
                        </div>
                    </div>
                </Accordion>
            </div>
        </div>
    )
}

export default FAQs_Related