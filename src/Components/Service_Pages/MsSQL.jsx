import React from 'react'
import Main from './Main'

const MsSQL = () => {
    const card_Data = [
        {
            title: "Custom Database Design",
            details: "Vision Infotech provides the best service with custom database tools for computing devices, websites, and smartphone apps."
        },
        {
            title: "Database Design & Development",
            details: "Vision Infotech takes pride in providing a comprehensive collection of database management services tailored to your business requirements."
        },
        {
            title: "Database Architecture Design",
            details: "Vision Infotech will build your database solutions that meet the needs of your business."
        },
        {
            title: "Administration & Support",
            details: "With our DBA support program, we have helped multiple organizations in lowering support costs as well as improving overall efficiency and availability."
        },
        {
            title: "SQL/T-SQL Programming",
            details: "We also do query tuning and optimization. This is made possible by our extensive understanding and use of the standard ANSI SQL language and also complex Transact-SQL (T-SQL) constructs."
        },
    ]

    return (
        <Main 
            card_Data = {card_Data}
            language_Name = "MS SQL"
            h_1 = "Upgrade Your Business Online with Our MS SQL Database Development Services"
            d_1 = "Vision Infotech, one of the leading Microsoft SQL Server Development Companies in India, has SQL Server Developers with unrivaled experience in various areas of Microsoft SQL Server Development, including SQL Server Database Development, SQL Server Web Development, and SQL Server Application Development. If you are a start-up, small company, or a large corporation, you can rely on our team of highly qualified SQL Server Developers to provide you with the best in industry Microsoft SQL Server Development Services depending on customer database specifications."
            h_2 = "What We Do?"
            d_2 = "Scaling business to new heights with MS SQL Database Development Services."
        />
    )
}

export default MsSQL