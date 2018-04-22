import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, Row } from 'react-bootstrap';

export class FormInputs extends Component{
    render() {
        var row = [];
        for(var i = 0; i < this.props.ncols.length ; i++){
            row.push(
                <div key={i} className={this.props.ncols[i]}>
                    <FormGroup>
                        <ControlLabel>{this.props.fields[i].label}</ControlLabel>
                        <FormControl {...this.props.fields[i]} />
                    </FormGroup>
                </div>
            );
        }
        return (
            <Row>
                {row}
            </Row>
        );
    }
}

export default FormInputs;
