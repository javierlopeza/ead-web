import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import Card from 'components/Card/Card.jsx'

import axios from 'axios';
import { WEB_ROOT, API_ROOT } from 'api-config';

class Results extends Component {
    state = {
        result: null
    }

    getJsonFromQuery = () => {
        // Data
        const href = window.location.href;
        let query = href.split("?")[1].split("#")[0];
        let result = {};
        if (query) {
            query.split("&").forEach(part => {
                const item = part.split("=");
                result[item[0]] = decodeURIComponent(item[1]);
            });
        } else {

        }
        // Checkboxes
        query = href.split("?")[2];
        if (query) {
            query.split("&").forEach(part => {
                if (part.length) {
                    const item = part.split("=");
                    result[item[0]] = decodeURIComponent(item[1]);
                }
            });
        } else {
            window.location = `${WEB_ROOT}predict`;
        }
        return result;
    }

    checkParameters() {
        // TODO
    }

    componentDidMount() {
        axios.post(`${API_ROOT}predict2`, this.getJsonFromQuery()).then(res => {
            const result = res.data;
            this.setState({ result });
        });
    }

    render() {
        this.checkParameters();
        return (
            <div className="content">
                RESULTS: {JSON.stringify(this.state.result)}
            </div>
        );
    }
}

export default Results;
