import React, { Component } from 'react';
import { Grid, Row, Col, Table, Button } from 'react-bootstrap';

import Card from 'components/Card/Card.jsx'

import axios from 'axios';
import { WEB_ROOT, API_ROOT } from 'api-config';

class Results extends Component {
    state = {
        result: null
    }

    getJsonFromQuery = () => {
        try {
            // Data
            const href = window.location.href;
            let query = href.split("?")[1].split("#")[0];
            let result = {};
            query.split("&").forEach(part => {
                const item = part.split("=");
                result[item[0]] = decodeURIComponent(item[1]);
            });
            return result;
        } catch (error) {
            window.location = `${WEB_ROOT}predict`;
        }
    }

    componentDidMount() {
        // POST prediction query
        axios.post(`${API_ROOT}predict2`, this.getJsonFromQuery()).then(res => {
            const result = res.data.results[0];
            this.setState({ result });
        });
    }

    render() {
        return (
            <div className="content">
            <Grid fluid>
                <Row>
                    <Col md={6} mdOffset={3}>
                        <Card
                            hCenter
                            title={`EAD Score: ${this.state.result ? this.state.result : "" }`}
                            category="Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
                            ctTableResponsive ctTableFullWidth ctTableUpgrade
                            content={
                                <Table>
                                    <thead>
                                        <tr>
                                            <th>Feature</th>
                                            <th className="text-center">Value</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Components</td>
                                            <td>30</td>
                                        </tr>
                                        <tr>
                                            <td>Plugins</td>
                                            <td>3</td>
                                        </tr>
                                        <tr>
                                            <td>Example Pages</td>
                                            <td>7</td>
                                        </tr>
                                        <tr>
                                            <td>Documentation</td>
                                            <td><i className="fa fa-check text-success"></i></td>
                                        </tr>
                                        <tr>
                                            <td>SASS Files</td>
                                            <td><i className="fa fa-check text-success"></i></td>
                                        </tr>
                                        <tr>
                                            <td>Login/Register/Lock Pages</td>
                                            <td><i className="fa fa-times text-danger"></i></td>
                                        </tr>
                                        <tr>
                                            <td>Premium Support</td>
                                            <td><i className="fa fa-times text-danger"></i></td>
                                        </tr>
                                    </tbody>
                                </Table>
                            }
                        />
                    </Col>
                </Row>
            </Grid>
        </div>
        );
    }
}

export default Results;
