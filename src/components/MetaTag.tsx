/** 
Component Name              - Meta Tags Component [App]
Development By              - InnoScript Co., Ltd
Date                        - 11/04/2024
Email                       - info@innoscript.co
**/


import { Helmet } from "react-helmet";

export const MetaTags = ({ dataSource }: any) => {

    return (
        <Helmet>
            <title>{dataSource.title} </title>
            <meta name="keywords" content="Thingyan Heineken RefreshYourMusic HNK MyanmarThingyan" />
            <meta name="author" content="InnoScript Co., Ltd" />

            { /** Open Graph */}
            <meta property="og:title" content={dataSource.title} />
            <meta property="og:image" content={dataSource.image} />
            <meta property="og:description" content={dataSource.image} />

            { /** Twitter */}
            <meta name="twitter:title" content={dataSource.title} />
            <meta name="twitter:description" content={dataSource.description} />
            <meta name="twitter:image" content={dataSource.image} />
            <meta name="twitter:card" content={dataSource.summaryImage} />
        </Helmet>
    )
}