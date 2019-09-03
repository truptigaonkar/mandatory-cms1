import React, { Component } from 'react'
import { Helmet } from 'react-helmet';
import axios from 'axios'
import { Link } from "react-router-dom";

export default class Article extends Component {
    constructor(props) {
        super(props);
        this.state = { article: null };
    }

    componentDidMount() {
        const { id } = this.props.match.params;

        //const cockpitToken = '4286cd429116a7e0239f9fad00eaac';
        //axios.get(`http://192.168.99.102:8080/api/collections/get/articles/Case?token=${cockpitToken}&filter[_id]=${id}`)

        axios.get(`http://192.168.99.102:8080/api/collections/get/articles/Case?&filter[_id]=${id}`)
            .then((response) => {
                console.log(response.data.entries[0])
                this.setState({ article: response.data.entries[0] });
            })
            .catch((error) => {
                console.log(error)
            });
    }

    render() {
        const { article } = this.state;

        if (article === null) {
            return <p>Fetching article...</p>;
        }

        return (
            <>
                <Helmet>
                    <title>Article {article.title}</title>
                </Helmet>
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><Link to="/">Home </Link></li>
                        <li class="breadcrumb-item active">{article.title}</li>
                    </ol>
                </nav>
                <div class="row justify-content-center">
                    <div class="col-md-9 card mb-4  mt-3 left  top">
                        <div class="card-body" style={{ padding: "25px" }}>
                            <h3>{article.title}</h3>
                            <p class=" text-muted" style={{ fontSize: "12px" }}>Published by: <b>{article.author[0].display}</b> on
                                <b> {article.published_on}</b></p>
                            <p>{article.body}</p>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
