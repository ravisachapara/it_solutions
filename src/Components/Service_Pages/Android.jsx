import React from 'react'
import Main from './Main'

const Android = () => {
    const card_Data = [
        {
            title: "Analysis",
            details: "WWe start by understanding the Android app architecture and requirements, and then we customize to the needs of each organization. This will provide us with a good view of the prerequisite as well as the fundamental concept behind it."
        },
        {
            title: "Wireframing & Designing",
            details: "Our expert team of Android Developers ensures that they understand the app prototyping process, before starting the wireframing process. Then we take to develop and finish the app design in a reliable manner."
        },
        {
            title: "Development",
            details: "We understand the purpose of designing each and everything inside an Android app before preparing the Wireframe template. In the next stage, we built the API Integration for your mobile app development."
        },
        {
            title: "QA Testing Process",
            details: "Our Mobile App Tester knows the MVC Architecture and does three levels of Android app checking. We also run real-time checks on Android applications that have been certified by the app store. When errors are found, they are fixed immediately and without further notice."
        },
        {
            title: "Deployment",
            details: "Finally, we review the app's real-time efficiency and then validate its accessibility, functionality, and reliability. If any glitches or problems are found, they are fixed prior to launch."
        },
        
    ]

    return (
        <Main 
            card_Data = {card_Data}
            language_Name = "Android"
            h_1 = "Adopt a Streamlined Approach with Our Android Developers"
            d_1 = "Vision Infotech, a leading Android Software Development Services company in India. We have extensive experience in developing apps that meet industry standards and result in multiple downloads. We always have a solution for a real-world challenge, so any sort of specification can be fulfilled by our devoted team of professionals."
            h_2 = "Android App Development Process"
            d_2 = "The following steps will help you understand our Android app development life cycle."
        />
    )
}

export default Android