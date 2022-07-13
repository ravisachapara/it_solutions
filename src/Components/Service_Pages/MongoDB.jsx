import React from 'react'
import Main from './Main'

const MongoDB = () => {
    const card_Data = [
        {
            title: "Performance Optimization",
            details: "We are a leading MongoDB development company, and our team evaluates data mining from websites using MongoDB development, including languages like Visual Studio and C#."
        },
        {
            title: "Restful API Development",
            details: "Our team develops RESTful API frameworks, servers, and interfaces that enable languages like Ruby, Node.js, AngularJS, HTML, and Python to communicate with, write to, and read from MongoDB files."
        },
        {
            title: "Big Data Efficiency",
            details: "It can be difficult for MySQL to process data in a big data project. As a top MongoDB development company, our team understands that MongoDB Development is a quick, effective method to gather data across multiple websites."
        },
        {
            title: "MEAN Stack Development",
            details: "Our full-stack JavaScript MEAN developers use MongoDB as a NoSQL database solution. MongoDB is dynamic and grows alongside any JavaScript project."
        },
        {
            title: "Database Model",
            details: "By preserving data access, validation rules, and indexing capabilities, our developers use MongoDB to store and combine data for any structure."
        },
        
    ]

    return (
        <Main 
            card_Data = {card_Data}
            language_Name = "MongoDB"
            h_1 = "Leverage the Power of MongoDB to Build Modern Applications"
            d_1 = "As the leading mobile app development company, we, at Vision Infotech, have attained that market value through hard work and professionalism. Our developer team is capable of research, UX, UI programmers, and scripting, allowing them to manage the project on their own. Our extensive experience with MongoDB means that we build completely usable solutions. Consequently, our expert MongoDB database developer can provide an exceptional market solution and support you in developing groundbreaking products for your company."
            h_2 = "What We Do?"
            d_2 = "We offer MongoDB database development services that help you meet any kind of business goal."
        />
    )
}

export default MongoDB