import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios'
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

const API_URL_ARTICLE = "http://192.168.99.102:8080/api/collections/get/articles";

const Home = () => {
    const [article, updateArticle] = useState([]);

    //  componentDidMount() without hook
    useEffect(() => {
        axios.get(API_URL_ARTICLE,
            // {headers: { 'Cockpit-Token': '4286cd429116a7e0239f9fad00eaac' }}
        )
            .then(response => {
                console.log(response.data.entries);
                updateArticle(response.data.entries);
            });
    }, []);

    if (!article) {
        return <p>Loading article...</p>;
    }
    return (
        <>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <div class="row justify-content-center">
                {article.map((article) => (
                    <div class="col-md-9 card mb-1">
                        <div class="card-body" style={{ padding: "5px" }}>
                            <p key={article._id}>
                                <h6><Link to={`/article/${article._id}`}>{article.title}</Link></h6>
                                <p class="card-text" style={{ fontSize: "12px" }}>
                                    <ReactMarkdown source={article.body.substring(0, 50)} />
                                    <Link to={`/article/${article._id}`}>Read more &rarr;</Link>
                                <div class=" text-muted" style={{ fontSize: "12px", float: "right" }}>Published by: <b>{article.author[0].display}</b> on
                                <b> {article.published_on}</b></div></p>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};
export default Home;