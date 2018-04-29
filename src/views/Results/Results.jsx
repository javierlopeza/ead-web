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
        let query = this.getJsonFromQuery();
        query.is_male = query.sex === "M" ? "1" : "0";
        delete query.sex;
        axios.post(`${API_ROOT}predict_ead`, [query]).then(res => {
            this.setState({ 
                has_asd: res.data.has_asd,
                asd_level: res.data.asd_level,
                asd_probability: res.data.asd_probability,
                risk_level: res.data.risk_level,
                asd_percentage: res.data.asd_percentage,
             });
        });
    }

    render() {
        const query = this.getJsonFromQuery();

        var ProgressBar = require('react-progressbar.js')
        var Circle = ProgressBar.Circle;
        var options = {
            strokeWidth: 3
        };
        var containerStyle = {
            width: '200px',
            height: '200px',
            "font-size": "40px",
            display: "block",
            margin: "auto"
        };

        return (
            <div className="content">
            <Grid fluid>
                <Row>
                    <Col md={6} mdOffset={3}>
                        <Card
                            hCenter
                            title={`EAD Score: ${this.state.risk_level ? this.state.risk_level : "..." }`}
                            // category="Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
                            ctTableResponsive ctTableFullWidth ctTableUpgrade
                            content={
                                <div>
                                    <Circle
                                        progress={this.state.asd_probability ? this.state.asd_probability : 0}
                                        text={this.state.asd_percentage ? this.state.asd_percentage : "..."}
                                        options={options}
                                        initialAnimate={true}
                                        containerStyle={containerStyle}
                                        containerClassName={'.progressbar'} />
                                <Table style={{marginBottom: 0}}>
                                    <thead>
                                        <tr>
                                            <th>Feature</th>
                                            <th className="text-center">Value</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Age in months</td>
                                            <td>{query.age_months}</td>
                                        </tr>
                                        <tr>
                                            <td>Sex</td>
                                            <td>{query.sex}</td>
                                        </tr>
                                        <tr>
                                            <td>Unusual eye contact</td>
                                            <td>{query.unusual_eye_contact}</td>
                                        </tr>
                                        <tr>
                                            <td>Anxiety</td>
                                            <td>{query.anxiety}</td>
                                        </tr>
                                        <tr>
                                            <td>Hand and finger mannerisms</td>
                                            <td>{query.hand_finger_mannerisms}</td>
                                        </tr>
                                        <tr>
                                            <td>Imagination / creativity</td>
                                            <td>{query.imagination_creativity}</td>
                                        </tr>
                                        <tr>
                                            <td>Immediate echolalia</td>
                                            <td>{query.immediate_echolalia}</td>
                                        </tr>
                                        <tr>
                                            <td>Quality of social overtures</td>
                                            <td>{query.quality_social_overtures}</td>
                                        </tr>
                                        <tr>
                                            <td>Self-injurious behavior</td>
                                            <td>{query.self_injurious_behavior}</td>
                                        </tr>
                                        <tr>
                                            <td>Shared enjoyment in interaction</td>
                                            <td>{query.shared_enjoyment_interaction}</td>
                                        </tr>
                                        <tr>
                                            <td>Tantrums, aggression or disruptive behavior</td>
                                            <td>{query.tantrums_aggression_disruptive_behavior}</td>
                                        </tr>
                                    </tbody>
                                </Table>
                                </div>
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
