import React from 'react'
import Main from './Main'

const Flutter = () => {
    const card_Data = [
        {
            title: "Discover",
            details: "We brainstorm ideas to achieve game-changing outcomes for your Flutter app development. We understand your vision, and our mission is to provide you with the best Flutter mobile app solution possible."
        },
        {
            title: "Design",
            details: "We are committed to developing world-class Flutter applications that have an outstanding user interface. We create a number of wireframes, draft a program architecture, and quickly prototype the solution based on the selected mockups."
        },
        {
            title: "Develop",
            details: "Our Flutter app developers use their years of experience and best development practices to provide the app with a competitive edge."
        },
        {
            title: "Testing",
            details: "Our developers put the app into rigorous testing against a set of metrics. We also provide regular product upgrades and maintenance after the launch to ensure that you attract as many end customers as possible."
        },
        {
            title: "Deployment",
            details: "Finally, we review the real-time efficiency of the app and validate its accessibility, functionality, and reliability."
        },
        
    ]

    return (
        <Main 
            card_Data = {card_Data}
            language_Name = "Flutter"
            h_1 = "Transform your Business with Our Flutter Developers"
            d_1 = "Flutter App Developers in India are well-known over the world for their hard work in app creation. Vision Infotech is one of the leading software companies in the region for meeting the needs of skilled Flutter App Developers worldwide, whether remotely or onsite, at the best possible pricing.Vision Infotech is an excellent choice when you need to hire a Flutter developer. As a well-known Flutter app development team, we use this classic cross-platform architecture to create robust Android and iOS apps that help you scale new heights in your market. Hire our handpicked Flutter developers to expand the scope of your application based on the needs of your client."
            h_2 = "Flutter Development Process"
            d_2 = "The following steps will help you understand our Flutter app development."
        />
    )
}

export default Flutter