import React from 'react'
import Main from './Main'

const Wordperess = () => {
    const card_Data = [
        {
            title: "WordPress Integration & Customization",
            details: "We are a friendly squad of WordPress enthusiasts who keep their nails sharpened with the latest features, upgrades, and integration, as well as years of domain experience."
        },
        {
            title: "Enterprise WordPress Development",
            details: "We offer end-to-end WordPress high-performance and flexible Enterprise CMS Development Services relating to corporate web portals and e-commerce cases."
        },
        {
            title: "WordPress Support & Maintenance",
            details: "As a world-class WordPress development company, we are here to assist you with seamless support and maintenance with our resilient and reasonable products."
        },
        {
            title: "WordPress CMS Development",
            details: "We build feature-rich content management systems using WordPress. Our years of experience allow us to create flawless custom CMS websites."
        },
        {
            title: "WordPress eCommerce Solution",
            details: "We create a tailored eCommerce website for your business. We also integrate necessary plugins and features to build a functional eCommerce website that will give a robust online presence."
        },
        {
            title: "WordPress Migration Service",
            details: "We manage the entire migration process, from coding to content, of your existing website to WordPress with zero downtime, allowing you to take advantage of all advanced functionality."
        },
    ]

    return (
        <Main 
            card_Data = {card_Data}
            language_Name = "WordPress"
            h_1 = "Extend your reach with innovation"
            d_1 = "We deliver world-class WordPress web development services to enterprises, small businesses, government organizations, and startups who want to create customized WordPress websites or plan to migrate their existing website. To keep you ahead of the competition, Vision Infotech creates interactive and professional websites focused on the client’s specifications and ideology."
            h_2 = "What We Do?"
            d_2 = "Scaling business to new heights with MS SQL Database Development Services."
        />
    )
}

export default Wordperess