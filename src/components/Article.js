import React, { Component } from 'react'
import { Helmet } from 'react-helmet';
import axios from 'axios'

export default class Article extends Component {
    constructor(props) {
        super(props);
        this.state = { article: null };
    }

    componentDidMount() {
        const { id } = this.props.match.params;

        axios.get(`http://192.168.99.102:8080/api/collections/get/articles/${id}`)
            .then((response) => {
                console.log(response.data.entries)
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
                <p>{article.title}</p>
                <p>{article.author[0].display}</p>
                <p>{article.published_on}</p>
                <p>{article.body}</p>
            </>
        )
    }
}
