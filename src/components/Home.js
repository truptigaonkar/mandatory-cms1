import React, {useState, useEffect} from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios'
import { Link } from 'react-router-dom';

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
            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {article.map((article) => (
                        <tr key={article._id}>
                            <td>{article._id}</td>
                            <td><Link to={`/article/${article._id}`}>{article.title}</Link></td>
                            {/* <td><Link to={'/article/' + article._id}>{article.title}</Link></td> */}
                            <td>{article.author[0].display}</td>
                            <td>{article.published_on}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};
export default Home;