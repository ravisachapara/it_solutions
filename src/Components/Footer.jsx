import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-md-6 col-lg-3'>
                        <h4>Company</h4>
                        <ul>
                            <li>
                                <a>About us</a>
                            </li>
                            <li>
                                <Link to="/testimonials">Testimonials</Link>
                            </li>
                            <li>
                                <a>Blog</a>
                            </li>
                            <li>
                                <a>FAQ’S</a>
                            </li>
                            <li>
                                <a>Contact Us</a>
                            </li>
                        </ul>
                    </div>
                    <div className='col-12 col-md-6 col-lg-3'>
                        <h4>Services</h4>
                        <ul>
                            <li>
                                <a>Custom Software Development</a>
                            </li>
                            <li>
                                <a>Web Development</a>
                            </li>
                            <li>
                                <a>App development Company</a>
                            </li>
                            <li>
                                <a>SaaS Development</a>
                            </li>
                            <li>
                                <a>eCommerce Development</a>
                            </li>
                            <li>
                                <a>Payment Gateway Integration</a>
                            </li>
                        </ul>
                    </div>
                    <div className='col-12 col-md-6 col-lg-3'>
                        <h4>Industries</h4>
                        <ul>
                            <li>
                                <a>Retail & eCommerce</a>
                            </li>
                            <li>
                                <a>Diamond</a>
                            </li>
                            <li>
                                <a>Logistics</a>
                            </li>
                            <li>
                                <a>Insurance</a>
                            </li>

                        </ul>
                    </div>
                    <div className='col-12 col-md-6 col-lg-3'>
                        <h4>Address</h4>
                        <div className='row'>
                            <div className='col-3'>
                                <img src='/images/flag.png' className='w-100'></img>
                            </div>
                            <div className='col-9'>
                                <span>606 Seminole Trl, Murphy TX 75094, USA</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer