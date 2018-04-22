import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import Card from 'components/Card/Card.jsx'

class Results extends Component {
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
        }
        return result;
    }

    render() {
        return (
            <div className="content">
                {JSON.stringify(this.getJsonFromQuery(), null, 4)}
            </div>
        );
    }
}

export default Results;
