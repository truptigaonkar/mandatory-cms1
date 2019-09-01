import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios'

const API_URL_AUTHOR = "http://192.168.99.102:8080/api/collections/get/authors"

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
            {author.map((author) => (
                <>
                    <p>{<img src={"http://192.168.99.102:8080/" + author.avatar.path} alt="image" width="100px" />}</p>
                    <b>{author.name}</b>
                    <p>{author.description}</p>
                    <hr />
                </>
            ))}
        </>
    );
};

export default Author;