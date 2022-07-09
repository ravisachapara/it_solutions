import React from 'react'
import Main from './Main'

const Bootstrap = () => {
    const card_Data = [
        {
            title: "Analysis",
            details: "When you hire our Bootstrap developer, we seek to learn about your target audience as well as your company goals and then take it from there."
        },
        {
            title: "Planning",
            details: "Hire our top Bootstrap developers who analyze and assess the project requirements before executing the design."
        },
        {
            title: "Prototype",
            details: "Our Bootstrap developer will build a wireframe with resources and mock-ups as planned."
        },
        {
            title: "Development",
            details: "On approval of the prototype, your handpicked Bootstrap developer gets to work on shaping the product."
        },
        {
            title: "Test and Launch",
            details: "We ensure that the application is optimized and bug-free before launching."
        },
        
    ]

    return (
        <Main 
            card_Data = {card_Data}
            language_Name = "Bootstrap"
            h_1 = "Turn your Start-ups into Brands with Our Bootstrap Developers"
            d_1 = "Our Bootstrap Developers have considerable experience developing a wide variety of projects using the Bootstrap Framework. Using the Bootstrap Framework, we build browser-compatible, high-quality, pixel-perfect, completely responsive, and SEO-standardized templates. Our Bootstrap Programmers have completed several projects using Bootstrap with diverse styles of designs and clients from all over the world. As a successful company, we have tailored our services to the requirements of the customers."
            h_2 = "What We Do?"
            d_2 = "Comprehensive Bootstrap Development Process"
        />
    )
}

export default Bootstrap