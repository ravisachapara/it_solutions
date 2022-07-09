import React from 'react'
import Main from './Main'

const Ajex = () => {
    const card_Data = [
        {
            title: "Analysis",
            details: "When you hire our AJAX developer, we seek to learn about your target audience as well as your company goals and then take it from there."
        },
        {
            title: "Planning",
            details: "Hire our top AJAX developers who analyze and assess the project requirements before executing the design."
        },
        {
            title: "Prototype",
            details: "Our AJAX developer will build a wireframe with resources and mock-ups as planned."
        },
        {
            title: "Development",
            details: "On approval of the prototype, your handpicked AJAX developer gets to work on shaping the product."
        },
        {
            title: "Test and Launch",
            details: "We ensure that the application is optimized and bug-free before launching."
        },
        
    ]

    return (
        <Main 
            card_Data = {card_Data}
            language_Name = "Ajex"
            h_1 = "Implement AJAX in your Dream Website"
            d_1 = "Vision Infotech is a well-known AJAX web development company specializing in developing web applications, user-friendly interfaces, and fully immersive AJAX solutions. We use AJAX programming to share data between servers and upgrade parts of a website without having to reload the whole tab. Yes, it is achievable using only AJAX technology. We, at Vision Infotech, have comprehensive experience in many AJAX web programming technologies, allowing us to provide authentic, reliable, and robust AJAX web application services for any kind of website."
            h_2 = "What We Do?"
            d_2 = "Comprehensive AJAX Development Process."
        />
    )
}

export default Ajex