import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios'
import { Link } from "react-router-dom";

const API_URL_AUTHOR = "https://mandatory-cms2-bdb280.devspace.host/api/collections/get/authors"

const Author = () => {
    const [author, udpateAuthor] = useState([]);

    //  componentDidMount() without hook
    useEffect(() => {
        axios.get(API_URL_AUTHOR,
            // {headers: { 'Cockpit-Token': '4286cd429116a7e0239f9fad00eaac' }}
        )
            .then(response => {
                console.log(response.data.entries);
                udpateAuthor(response.data.entries);
            });
    }, []);

    if (!author) {
        return <p>Loading author...</p>;
    }
    return (
        <>
            <Helmet>
                <title>Author</title>
            </Helmet>
            {/* <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><Link to="/">Home </Link></li>
                    <li class="breadcrumb-item active">All Authors</li>
                </ol>
            </nav> */}
            <table class="table table-hover">
                <caption>List of Authors</caption>
                <thead class="thead-dark">
                    <tr>
                        <th>#</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {author.map((author, index) => (
                        <tr key={author._id}>
                            <td scope="row">{index + 1}</td>
                            <td>{<img src={"https://mandatory-cms2-bdb280.devspace.host/" + author.avatar.path} alt="image" width="40px" />}</td>
                            <td>{author.name}</td>
                            <td>{author.description}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default Author;