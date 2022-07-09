import React from 'react'
import Main from './Main'

const ReactLen = () => {
    const card_Data = [
        {
            title: "Enterprise React Web Apps",
            details: "Our React.js team develops web applications that are secure, scalable, and reliable for large-scale enterprises."
        },
        {
            title: "React.js Component Development",
            details: "Enterprises with a large number of web apps can take advantage of our React.js component development services to quickly build world-class applications."
        },
        {
            title: "Interactive UI Development",
            details: "We develop interactive and user-friendly business applications by leveraging the power of robust React.js libraries."
        },
        {
            title: "Migration & Integration Services",
            details: "Our React.js developers will help you in integrating the existing web applications and frameworks with React.js."
        },
        {
            title: "Custom Web App Development",
            details: "Vision Infotech team provides quick deployment of React.js development projects as well as continuous support for existing projects."
        },
        {
            title: "React.js Consulting",
            details: "Our React.js development team provides technology consulting to identify the right solution for your business needs."
        },
       
    ]

    return (
        <Main 
            card_Data = {card_Data}
            language_Name = "React"
            h_1 = "Leverage React.js to Delight your Users"
            d_1 = "Vision Infotech has always been at the forefront of technology innovation, providing high-quality solutions to its customers. Our in-house team is filled with highly talented and tech-savvy React.js developers as well as industry experts who collaborate to build best-in-class React.js applications and solutions. We also believe in the versatility of combining the React.js framework with others such as backbone.js and angular.js."
            h_2 = "What We Do?"
            d_2 = "Our front-end React.js developers have extensive expertise utilizing ReactJS’s unique capabilities, such as code reusability and faster rendering, to create highly scalable and performance-oriented web apps. Hire ReactJS developers from Vision Infotech to get top-notch ReactJS solutions, such as the ones shown below. Our React.js developers combine the power of TypeScript with the strong frontend framework React.js, making it much easier for developers to work, resulting in faster app development at lower costs and higher efficiency. Hire our expert React.js developers to integrate it with TypeScript for more readable, easy-to-understand code, greater support for JSX, and existing React projects, among other benefits.We design and develop highly functional Angular web and mobile apps that are exceptional in terms of adaptability, scalability, stability, and security."
        />
    )
}

export default ReactLen