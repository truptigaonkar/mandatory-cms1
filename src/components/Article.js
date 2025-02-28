import React, { Component } from 'react'
import { Helmet } from 'react-helmet';
import axios from 'axios'
import ReactMarkdown from 'react-markdown';

const API_URL = `${process.env.REACT_APP_API_URL}`;

export default class Article extends Component {
    constructor(props) {
        super(props);
        this.state = { article: null };
    }

    componentDidMount() {
        const { id } = this.props.match.params;

        axios.get(`${API_URL}/api/collections/get/articles/Case?&filter[_id]=${id}`)
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
                {/* <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><Link to="/">Home </Link></li>
                        <li class="breadcrumb-item active">{article.title}</li>
                    </ol>
                </nav> */}
                <div class="row justify-content-center">
                    <div class="col-md-12 card mb-4  mt-3 left  top" style={{backgroundColor:"#f9fbfd"}}>
                        <div class="card-body" style={{ padding: "25px" }}>
                            <h3>{article.title}</h3>
                            <p class=" text-muted" style={{ fontSize: "12px" }}>Published by: <b>{article.author[0].display}</b> on
                                <b> {article.published_on}</b></p>
                                <ReactMarkdown source={article.body} />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
