import React from 'react'
import Main from './Main'

const IOS = () => {
    const card_Data = [
        {
            title: "Discover",
            details: "We brainstorm ideas to achieve game-changing outcomes for your iOS app development. We understand your vision, and our mission is to provide you with the best iOS mobile app solution possible."
        },
        {
            title: "Design",
            details: "We are committed to developing world-class iOS applications that have an outstanding user interface. We create a number of wireframes, draft a program architecture, and quickly prototype the solution based on the selected mockups."
        },
        {
            title: "Develop",
            details: "Our iOS app developers use their years of experience and best development practices to provide the app with a competitive edge."
        },
        {
            title: "QA Testing Process",
            details: "Our QA engineers put the app into rigorous testing against a set of metrics. We also provide regular product upgrades and maintenance after the launch to ensure that you attract as many end customers as possible."
        },
        {
            title: "Deployment",
            details: "Finally, we review the real-time efficiency of the app and validate its accessibility, functionality, and reliability."
        },
        
    ]

    return (
        <Main 
            card_Data = {card_Data}
            language_Name = "iOS"
            h_1 = "Empower your Business with Custom iOS Applicatio"
            d_1 = "Vision Infotech is a leading iOS application development company that provides you with extremely talented iOS developers. We produce feature-rich and fast-loading iOS applications based on the most recent iOS SDK technologies. Hire an iOS app developer from us to get world-class iOS app creation at competitive prices. We use an agile planning approach and a quality lifecycle for every iOS application developed."
            h_2 = "iOS Development Process"
            d_2 = "The following steps will help you understand our iOS app development."
        />
    )
}

export default IOS