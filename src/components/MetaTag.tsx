import { baseURL } from "@/constants/endpoints";
import { useEffect, useState } from "react"
import { Helmet } from "react-helmet";

export const MetaTags = ({ dataSource }: any) => {
    const [data, setData] = useState<any>(null);

    useEffect(() => {
        if (dataSource) {
            setData(dataSource);
        }
    }, [dataSource])

    return (
        <>
            {data && (
                <Helmet>
                    <title>{data.title}</title>
                    <link rel="canonical" href={window.location.href} />
                    <meta property="og:url" content={window.location.href} />
                    <meta property="og:type" content="website" />

                    <meta property="og:title" content={data.title} />
                    <meta property="og:type" content={data.type} />
                    <meta property="og:image" content={data.image} />
                    <meta property="og:url" content={baseURL} />
                    <meta property="og:description" content={data.description} />

                    <meta property="og:title" content={data.title} />
                    <meta itemProp="name" content={data.title} />
                    <meta name="twitter:title" content={data.title} />

                    <meta property="og:description" content={data.description} />
                    <meta itemProp="description" content={data.description} />
                    <meta name="twitter:description" content={data.description} />

                    <meta property="og:image" content={data.image} />
                    <meta itemProp="image" content={data.image} />
                    <meta name="twitter:image" content={data.image} />
                </Helmet>
            )}
        </>
    )
}