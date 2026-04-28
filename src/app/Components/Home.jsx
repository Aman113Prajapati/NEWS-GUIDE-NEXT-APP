"use client"
export const dynamic = "force-dynamic";

import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useSearchParams } from 'next/navigation'
import NewsItems from './NewsItems'

export default function Home() {

    let [page, setPage] = useState(1)
    let [articles, setArticles] = useState([])
    let [totalResults, setTotalResults] = useState(0)

    const [q, setQ] = useState("All")
    const [language, setLanguage] = useState("hi")
    const params = useSearchParams()

    async function getAPIData(q, language) {
        let response = await fetch(`https://newsapi.org/v2/everything?q=${q}&language=${language}&pageSize=24&page=1&sortBy=publishedAt&apiKey= Your API Key`)
        response = await response.json()

        if (response.status === "ok") {
            setArticles(response.articles)
            setTotalResults(response.totalResults)
        }
    }

    async function fetchData() {
        let nextPage = page + 1
        setPage(nextPage)

        let response = await fetch(`https://newsapi.org/v2/everything?q=${q}&language=${language}&pageSize=24&page=${nextPage}&sortBy=publishedAt&apiKey=45017cf1fc8c4061a3fc9bff623f87cb`)
        response = await response.json()

        if (response.status === "ok") {
            setArticles(articles.concat(response.articles))
        }
    }

    useEffect(() => {
        let lang = params.get("language") ?? "hi"
        let query = params.get("q") ?? "All"

        setQ(query)
        setLanguage(lang)
        setPage(1)

        getAPIData(query, lang)
    }, [params])

    return (
        <>
            <h5 className='text-center p-2 mt-2 bg-primary text-light text-capitalize'>
                {q} News Articles
            </h5>

            <div className='container-fluid'>
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchData}
                    hasMore={articles.length < totalResults}
                    loader={
                        <div className='text-center m-5'>
                            <div className="spinner-border"></div>
                        </div>
                    }
                >
                    <div className="row">
                        {
                            articles.map((item, index) => (
                                <NewsItems
                                    key={index}
                                    source={item.source?.name}
                                    description={item.description}
                                    date={item.publishedAt}
                                    pic={item.urlToImage}
                                    url={item.url}
                                />
                            ))
                        }
                    </div>
                </InfiniteScroll>
            </div>
        </>
    )
}
