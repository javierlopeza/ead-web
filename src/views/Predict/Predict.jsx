import React, { Component } from 'react';
import { 
    Grid, Row, Col,
    FormGroup, ControlLabel, FormControl 
} from 'react-bootstrap';

import {Card} from 'components/Card/Card.jsx';
import {DataForm} from 'components/DataForm/DataForm.jsx';
import {Checklist} from 'components/Checklist/Checklist.jsx';
import Button from 'elements/CustomButton/CustomButton.jsx';

class Predict extends Component {
    handleSubmit = () => {
        let query_checkboxes = "";
        this.checklist.getData().prompts.forEach(prompt => {
            query_checkboxes = `${query_checkboxes}&${prompt.prompt_id}=${prompt.value ? 1 : 0}`;
        });
        console.log(query_checkboxes); // do stuff
        window.location = `http://localhost:3000/#/results?${query_checkboxes}`;
    }

    checkFormCompletion = () => {
        const query = window.location.href.split("#")[0].split("?")[1];
        if (query) window.location = `http://localhost:3000/#/predict`; 
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
                    <Row>
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
                    </Row>
                    <Row>
                        <Col md={12} style={{display: 'flex', justifyContent: 'center'}}>
                            <Button form="form1" onClick={this.handleSubmit} round fill bsStyle="info" type="submit">Get EAD Score</Button>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Predict;