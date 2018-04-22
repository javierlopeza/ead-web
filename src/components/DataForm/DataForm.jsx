import React, { Component } from 'react';
import { FormInputs } from 'components/FormInputs/FormInputs.jsx';
import Button from 'elements/CustomButton/CustomButton.jsx';

export class DataForm extends Component{
    render(){
        const fields_groups = [
            [
                {
                    label: "First name",
                    type: "text",
                    placeholder: "First name",
                    ncols: "col-md-6",
                    name: "first_name"
                },
                {
                    label: "Last name",
                    type: "text",
                    placeholder: "Last name",
                    ncols: "col-md-6",
                    name: "last_name"                    
                },
            ],
            [
                {
                    label : "Age in months",
                    type : "number",
                    placeholder : "16",
                    ncols: "col-md-4",
                    name: "age_months"                                  
                },
                {
                    label : "Height",
                    type : "number",
                    placeholder : "80.2 cm",
                    ncols: "col-md-4",
                    name: "height"                    
                },
                {
                    label : "Weight",
                    type : "number",
                    placeholder : "10.1 kg",
                    ncols: "col-md-4",
                    name: "weight"                                        
                }
            ]
        ];

        var fields = [];
        var group_number = 0;
        fields_groups.forEach(field_group => {
            fields.push(
                <FormInputs
                    key = {group_number}
                    ncols = {field_group.map(field => field.ncols)}
                    fields = {
                        field_group.map(field => {
                            return {
                                label: field.label,
                                type: field.type,
                                bsClass: "form-control",
                                placeholder: field.placeholder,
                                name: field.name
                            }
                        })
                    }
                />
            );
            group_number++;
        });

        return (
            <form style={{marginBottom: 0}} id={"form1"}>
                {fields}
            </form>
        );
    }
}

export default DataForm;
