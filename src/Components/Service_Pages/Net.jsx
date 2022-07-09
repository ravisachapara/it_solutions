import React from 'react'
import Main from './Main'

const Net = () => {
    const card_Data = [
        {
            title: "Product Customization",
            details: "We are proficient in delivering tailored applications after proper research of your market, your products and services, and your business goals."
        },
        {
            title: ".NET Desktop Application Development",
            details: "With best practices and sophisticated support systems, We create highly scalable .NET applications for desktops across many industries."
        },
        {
            title: ".NET Mobile Application Development",
            details: "We develop highly efficient mobile applications for your business using the latest trends. We also help you migrate apps while retaining key functionalities."
        },
        {
            title: ".NET Integration Services",
            details: "We ensure the seamless working of the .NET application with other systems by integrating them to provide an end-to-end user experience."
        },
        {
            title: "Application Performance tuning",
            details: "We help you to enhance the features of the applications to improve the capabilities with current industry trends."
        },
        {
            title: "Maintenance and Support",
            details: "We provide 24X7 support services to keep the applications running without any lags"
        },
        
        
    ]

    return (
        <Main 
            card_Data = {card_Data}
            language_Name = ".NET"
            h_1 = "Your Top Source of .Net Developers to Build Scalable Softwares"
            d_1 = "Are you looking for certified remote .NET developers who are willing to work within your project budget? For global clients, our first-time-right offshore .NET developers create powerful, secure, and scalable web solutions at competitive pricing. Hire .NET developers in India from Vision Infotech on an hourly or full-time (dedicated monthly) basis and Get engaging, inventive, and user-friendly web app solutions for your business needs. Hire .NET developers in India for the best and most satisfying results. They have a team of software programmers, app developers, and web coders who are all experts in their field. We provide .NET solutions with the scalability and compatibility capabilities to quickly respond to today’s complex computing world. We have advanced technologies for web-based applications, enterprise software, and distributed apps with an emphasis on stability, accessibility, and usability."
            h_2 = "What We Do?"
            d_2 = "Many believe the Microsoft.NET platform to be the best coding language since it allows developers to not only create strong business solutions but also to modify the codes to a large level. The best aspect of hiring dedicated .NET developers in India is that they are skilled at creating safe, robust, scalable, and engaging web apps. They can assist you in making use of the.NET platform’s superior scalability and integration capabilities. You will get not only the greatest resources but also a cost-effective solution when you hire a professional team of .NET software developers to put together your project. As a result, having quality-focused engineers on your team can save you both time and money."
        />
    )
}

export default Net