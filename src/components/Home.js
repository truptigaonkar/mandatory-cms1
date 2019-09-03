import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios'
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import Pagination from '../components/Pagination';

const API_URL_ARTICLE = "http://192.168.99.102:8080/api/collections/get/articles";

const Home = () => {
    const [article, updateArticle] = useState([]);
    //Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(3);

    //componentDidMount() without hook
    useEffect(() => {
        axios.get(API_URL_ARTICLE,
            // {headers: { 'Cockpit-Token': '4286cd429116a7e0239f9fad00eaac' }}
        )
            .then(response => {
                console.log(response.data.entries);
                updateArticle(response.data.entries);
            });
    }, []);

    //Pagination: Get current article (Reference: https://www.youtube.com/watch?v=IYCa1F-OWmk)
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = article.slice(indexOfFirstPost, indexOfLastPost);

    //Pagination: Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    if (!article) {
        return <p>Loading article...</p>;
    }
    return (
        <>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <div class="row justify-content-center">
                {currentPosts.map((article) => (
                    <div class="col-md-9 card mb-1">
                        <div class="card-body" style={{ padding: "5px" }}>
                            <p key={article._id}>
                                <h6><Link to={`/article/${article._id}`}>{article.title}</Link></h6>
                                <p class="card-text" style={{ fontSize: "12px" }}>
                                    <ReactMarkdown source={article.body.substring(0, 50)} /><Link to={`/article/${article._id}`}>Read more &rarr;</Link>
                                    <div class=" text-muted" style={{ fontSize: "12px", float: "right" }}>
                                        Published by: <b>{ (article.author || []).map(authorName => <Link to={"/author/" + article._id}>{ authorName.display }</Link>)}</b> on <b>{article.published_on}</b></div></p>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <Pagination
                postsPerPage={postsPerPage}
                totalPosts={article.length}
                paginate={paginate}
            />
        </>
    );
};
export default Home;