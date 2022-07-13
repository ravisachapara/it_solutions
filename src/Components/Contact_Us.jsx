import { Label } from '@mui/icons-material';
import { Box, MenuItem, TextareaAutosize, TextField } from '@mui/material';
import React from 'react'
import { Button, Form } from 'react-bootstrap';


const service = [
    {
        value: '-- Select Type --',
        label: '-- Select Type --',
    },
    {
        value: 'Mobile UI Design',
        label: 'Mobile UI Design',
    },
    {
        value: 'Web UI Design',
        label: 'Web UI Design',
    },
    {
        value: 'PHP Development',
        label: 'PHP Development',
    },
    {
        value: 'WordPress Website DevelopmentE-Commerce Website Development',
        label: 'WordPress Website DevelopmentE-Commerce Website Development',
    },
    {
        value: 'E-Commerce Website Development',
        label: 'E-Commerce Website Development',
    },
    {
        value: 'Responsive Website Development',
        label: 'Responsive Website Development',
    },
    {
        value: 'iPhone App Development',
        label: 'iPhone App Development',
    },
    {
        value: 'Android App Development',
        label: 'Android App Development',
    },
    {
        value: 'CMS Development',
        label: 'CMS Development',
    },
    {
        value: 'Enterprise Application Development',
        label: 'Enterprise Application Development',
    },
    {
        value: 'Saas application development',
        label: 'Saas application development',
    },
    {
        value: 'UI/UX Design',
        label: 'UI/UX Design',
    },
    {
        value: 'SEO SERVICES',
        label: 'SEO SERVICES',
    },
    {
        value: 'Other',
        label: 'Other',
    }
];

const Budget = [
    {
        value: '-- Select Budget --',
        label: '-- Select Budget --'
    },
    {
        value: '$0 to $500',
        label: '$0 to $500'
    },
    {
        value: '$500 to $1000',
        label: '$500 to $1000'
    },
    {
        value: '$1000 to $5000',
        label: '$1000 to $5000'
    },
    {
        value: '$5000 to $15000',
        label: '$5000 to $15000'
    },
    {
        value: '$15000 to $25000',
        label: '$15000 to $25000'
    },
    {
        value: '$25000 to $35000',
        label: '$25000 to $35000'
    },
    {
        value: '$35000 to $50000',
        label: '$35000 to $50000'
    },
    {
        value: '$50000+',
        label: '$50000+'
    },
    {
        value: 'Not Sure',
        label: 'Not Sure'
    },
]

const Contact_Us = () => {
    const [value, setValue] = React.useState([]);
    const handleChange = (event) => {
        setValue({ ...value, [event.target.name]: event.target.value });
    };

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(value)
    }


    return (
        <div>
            <div className='pages_ser_main'>
                <div className='service_us_image'>
                    <div className=' text-center text-light'>
                        <h1>Contact Us</h1>
                        <p>We’re committed to serving you with the best possible IT solutions</p>
                    </div>
                </div>
                <div className='container'>
                    <div className='d-flex flex-column align-items-center text-center mt-5'>
                        <h2>We’re here to help</h2>
                        <span className='heading_border'></span>
                        <p className='pt-3 text-center'>Got an idea? Want to transform it into a reality? We’ve got you covered!</p>
                    </div>
                    <Form onSubmit={onSubmit}>
                        <div className='row'>
                            <div className='col-12 col-md-6'>
                                <TextField
                                    id="outlined-textarea"
                                    label="Your Name"
                                    name='name'
                                    value={value.name}
                                    maxRows={4}
                                    onChange={handleChange}
                                    multiline
                                    margin="normal"
                                    className='w-100'
                                />
                                <TextField
                                    id="outlined-textarea"
                                    label="Company Name"
                                    name='companyName'
                                    value={value.companyName}
                                    maxRows={4}
                                    onChange={handleChange}
                                    multiline
                                    margin="normal"
                                    className='w-100'
                                />
                                <TextField
                                    id="outlined-textarea"
                                    label="Contact No"
                                    name='contactName'
                                    value={value.contactName}
                                    maxRows={4}
                                    onChange={handleChange}
                                    multiline
                                    margin="normal"
                                    className='w-100'
                                />
                                <TextField
                                    id="outlined-select-currency"
                                    select
                                    label="Interested In (Service)"
                                    name='interestedService'
                                    value={value.interestedService}
                                    onChange={handleChange}
                                    margin="normal"
                                    className='w-100'
                                >
                                    {service.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </div>
                            <div className='col-12 col-md-6'>
                                <TextField
                                    id="outlined-textarea"
                                    label="Your Email"
                                    name='email'
                                    value={value.email}
                                    maxRows={4}
                                    onChange={handleChange}
                                    multiline
                                    margin="normal"
                                    className='w-100'
                                />
                                <TextField
                                    id="outlined-textarea"
                                    label="Company URL"
                                    name='companyURL'
                                    value={value.companyURL}
                                    maxRows={4}
                                    onChange={handleChange}
                                    multiline
                                    margin="normal"
                                    className='w-100'
                                />
                                <TextField
                                    id="outlined-textarea"
                                    label="Skype"
                                    name='skype'
                                    value={value.skype}
                                    maxRows={4}
                                    onChange={handleChange}
                                    multiline
                                    margin="normal"
                                    className='w-100'
                                />
                                <TextField
                                    id="outlined-select-currency"
                                    select
                                    label="Budget"
                                    name='budget'
                                    value={value.budget}
                                    onChange={handleChange}
                                    margin="normal"
                                    className='w-100'
                                >
                                    {Budget.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </div>
                            <div className='col-12'>
                                <label className='text-muted pb-2'>Your Message</label>
                                <TextareaAutosize
                                    className='w-100 p-3'
                                    margin="normal"
                                    label="Your Message"
                                    name='message'
                                    aria-label="maximum height"
                                    placeholder="Enter Message"
                                    style={{ width: 200 }}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className='d-flex justify-content-center my-4'>
                            <Button className='primary_btn' type="submit">Submit</Button>
                        </div>
                    </Form>
                    <div className='row'>
                        <div className='col-12 col-md-4 d-flex flex-column justify-content-center align-items-center p-5'>
                                <img src='/images/heade-office.jpg'></img>
                                <h3 className='py-3'>Head Office</h3>
                                <span className='text-center'>30, 3rd Floor APMC, Krushi Bazaar, Beside North Extension, Sahara Darwaja, Surat,</span>
                        </div>
                        <div className='col-12 col-md-4 d-flex flex-column justify-content-center align-items-center p-5'>
                                <img src='/images/phone-call.jpg'></img>
                                <h3 className='py-3'>Call Us</h3>
                                <span className='text-center'>(+91) 00000 00000</span>
                        </div>
                        <div className='col-12 col-md-4 d-flex flex-column justify-content-center align-items-center p-5'>
                                <img src='/images/email.jpg'></img>
                                <h3 className='py-3'>Mail Us</h3>
                                <span className='text-center'>
                                    <span>Info <spna className="text-primary">hr@micro.com</spna> </span> <br/>
                                    <span>Sales <spna className="text-primary">sales@micro.com</spna> </span>
                                </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact_Us