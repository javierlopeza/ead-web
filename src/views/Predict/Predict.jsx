import React, { Component } from 'react';
import { 
    Grid, Row, Col,
    FormGroup, ControlLabel, FormControl 
} from 'react-bootstrap';

import {Card} from 'components/Card/Card.jsx';
import {DataForm} from 'components/DataForm/DataForm.jsx';
import {Checklist} from 'components/Checklist/Checklist.jsx';
import Button from 'elements/CustomButton/CustomButton.jsx';

import { WEB_ROOT } from 'api-config';

class Predict extends Component {
    handleSubmit = () => {
        window.location = `${WEB_ROOT}results`;
    }

    checkFormCompletion = () => {
        const query = window.location.href.split("#")[0].split("?")[1];
        if (query) window.location = `${WEB_ROOT}predict`; 
    }

    render() {
        this.checkFormCompletion();

        return (
            <div className="content">
                <Grid fluid>
                    <Row>
                    <Col md={12}>
                            <Card
                                title="Fill in the required data"
                                content={
                                    <DataForm />
                                }
                            />
                        </Col>
                    </Row>
                    {/* <Row>
                        <Col md={12}>
                            <Card
                                title="Check all that apply"
                                content={
                                    <div className="table-full-width">
                                        <table className="table" style={{marginBottom: 0}}>
                                            <Checklist onRef={ref => (this.checklist = ref)} />
                                        </table>
                                    </div>
                                }
                            />
                        </Col>
                    </Row> */}
                    <Row>
                        <Col md={12} style={{display: 'flex', justifyContent: 'center', marginBottom: '105px'}}>
                            <Button form="form1" onClick={this.handleSubmit} round fill bsStyle="info" type="submit">Get EAD Prediction</Button>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Predict;
