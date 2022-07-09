import { VerifiedUser } from '@mui/icons-material'
import React from 'react'
import Main from './Main'

const Veu = () => {
    const card_Data = [
        {
            title: "Custom Application",
            details: "Get customized Vue.js web development services from planning to development depending on your business needs."
        },
        {
            title: "Single Page Application",
            details: "When it comes to designing SPAs, Vue.js is the most common application. It ensures responsiveness and efficiency."
        },
        {
            title: "Vue.js Consultation",
            details: "We offer highly efficient and effective solutions for start-ups and enterprises in the B2B and B2C markets by using the Vue.js framework."
        },
        {
            title: "Migration To Vue.js",
            details: "We make it possible for our customers to move from the old framework to Vue.js in a meticulous manner."
        },
        {
            title: "Support & Maintenance",
            details: "Our support and maintenance team has vast experience in handling Vue.js web applications."
        },
        {
            title: "Third-Party Integration With Vue.js",
            details: "Our team of dedicated Vue.js developers will help you incorporate Vue.js into the third-party-developed web application."
        },
        
    ]

    return (
        <Main 
            card_Data = {card_Data}
            language_Name = "Vue JS"
            h_1 = "Dominate Your Market With Captivating Visual Experience"
            d_1 = "Vision Infotech is well-recognized for Vue.js development and services. We have built some of the best appealing interfaces for our customers including real and complex applications using the Vue.js platform. Our Vue.js team of developers integrates user-centric design, usability practice, and software functionality to provide an outstanding experience to enterprises and small businesses."
            h_2 = "What We Do?"
            d_2 = "We build powerful front-ends, real-time applications, and single-page apps with Vue.js."
        />
    )
}

export default Veu