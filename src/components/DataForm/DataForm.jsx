import React, { Component } from 'react';
import { FormInputs } from 'components/FormInputs/FormInputs.jsx';
import Button from 'elements/CustomButton/CustomButton.jsx';

export class DataForm extends Component{
    render(){
        const fields_groups = [
            [
                {
                    label: "Age in months",
                    type: "number",
                    placeholder: "Age in months",
                    ncols: "col-md-6",
                    name: "age_months"
                },
                {
                    label: "Sex",
                    type: "number",
                    placeholder: "Sex",
                    ncols: "col-md-6",
                    name: "sex"                    
                }
            ],
            [
                {
                    label: "Unusual eye contact",
                    type: "number",
                    placeholder: "Unusual eye contact",
                    ncols: "col-md-4",
                    name: "unusual_eye_contact"
                },
                {
                    label: "Anxiety",
                    type: "number",
                    placeholder: "Anxiety",
                    ncols: "col-md-4",
                    name: "anxiety"                    
                },
                {
                    label: "Hand and finger mannerisms",
                    type: "number",
                    placeholder: "Hand and finger mannerisms",
                    ncols: "col-md-4",
                    name: "hand_finger_mannerisms"                    
                },
            ],
            [
                {
                    label : "Imagination / creativity",
                    type : "number",
                    placeholder : "Imagination / creativity",
                    ncols: "col-md-4",
                    name: "imagination_creativity"                                  
                },
                {
                    label : "Immediate echolalia",
                    type : "number",
                    placeholder : "Immediate echolalia",
                    ncols: "col-md-4",
                    name: "immediate_echolalia"                    
                },
                {
                    label : "Quality of social overtures",
                    type : "number",
                    placeholder : "Quality of social overtures",
                    ncols: "col-md-4",
                    name: "quality_social_overtures"                                        
                }
            ],
            [
                {
                    label : "Self-injurious behavior",
                    type : "number",
                    placeholder : "Self-injurious behavior",
                    ncols: "col-md-4",
                    name: "self_injurious_behavior"                                  
                },
                {
                    label : "Shared enjoyment in interaction",
                    type : "number",
                    placeholder : "Shared enjoyment in interaction",
                    ncols: "col-md-4",
                    name: "shared_enjoyment_interaction"                    
                },
                {
                    label : "Tantrums, aggression or disruptive behavior",
                    type : "number",
                    placeholder : "Tantrums, aggression or disruptive behavior",
                    ncols: "col-md-4",
                    name: "tantrums_aggression_disruptive_behavior"                                        
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
