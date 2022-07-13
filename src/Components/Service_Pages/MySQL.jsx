import React from 'react'
import Main from './Main'

const MySQL = () => {
    const card_Data = [
        {
            title: "API Integration",
            details: "By integrating APIs that bridge between multiple web applications, our developers provide PHP-based solutions through REST and SOAP. We build custom APIs as well as embed third-party APIs into the current frameworks. To decode info, our developers use JSON, SOAP, XML, and REST API integrations."
        },
        {
            title: "Custom PHP Development",
            details: "We build dynamic and efficient PHP solutions that provide you with fast, secure, and scalable services to expand your business."
        },
        {
            title: "PHP Framework Customization",
            details: "We configure third-party PHP frameworks such as CodeIgniter, Zend, Laravel, Symfony, and others to build ready-to-use functionality for applications. Open-source frameworks and PHP-based frameworks are ideal for personalized web-based applications."
        },
        {
            title: "Maintenance and Optimization",
            details: "Our expert PHP developers optimize the application computing capability and load time. Our PHP web development services integrate technology and business ideas to make the website more user-friendly."
        },
        
    ]

    return (
        <Main 
            card_Data = {card_Data}
            language_Name = "MY SQL"
            h_1 = "Build Dynamic Database Applications with Our MySQL Developers"
            d_1 = "Our technical quality in PHP front-end, eCommerce solutions, and online applications, combined with agile development processes, has enabled us to provide a wide range of PHP-related services. When you hire PHP developers in India, we can provide you with some tricky solutions. Hire top PHP developers who will follow PHP best practices for your e-commerce platform to ensure a seamless client buying experience. Hire professional PHP developers in India from Vision Infotech who are skilled not only in designing custom PHP apps but also in integrating and upgrading existing applications to PHP. Hiring a dedicated PHP developer requires considering not only the candidate’s in-depth knowledge of PHP but also a number of additional factors, as stated below.Our backend experts’ capacity to provide PHP app development projects according to precise client needs is the pinnacle of our services. As a leading software company, we make certain to assign the most experienced PHP developers to each project. Our PHP developers are well-versed in the PHP framework and use it to create fantastic, unique online solutions for our clients.Vision Infotech is a leading MySQL software company in India with extensive experience managing and maintaining databases for companies of all sizes, including start-ups, enterprises, and entrepreneurs. Our expert team has deep knowledge in managing and handling the database of businesses. We build innovative digital solutions to satisfy our clients’ specific business needs and address their challenges. Our strategies allow our clients to stay on top of their game while still revolutionizing the industry."
            h_2 = "MySQL Development Process"
            d_2 = "We provide MySQL web development processes that are scalable in high-complexity environments and help you meet any kind of business goal."
        />
    )
}

export default MySQL