import React, { Component } from 'react';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';
import Checkbox from 'elements/CustomCheckbox/CustomCheckbox.jsx';

export class Checklist extends Component{
    componentDidMount() {
        this.props.onRef(this)
    }
    componentWillUnmount() {
        this.props.onRef(undefined)
    }

    getData() {
        return this.state;
    }

    handleClick= event => {
        const checkbox_id = parseInt(event.target.id.split("q")[1], 10);
        let new_prompts = this.state.prompts;
        new_prompts[checkbox_id].value = !new_prompts[checkbox_id].value;
        this.setState({ prompts: new_prompts });
    };

    constructor(props) {
        super(props);
        const prompts_texts = [
            'Contract for "What are conference organizers afraid of?"',
            'Lines From Great Russian Literature? Or E-mails From My Boss?',
            'Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroi',
            'Create 4 Invisible User Experiences you Never Knew About',
            'Read "Following makes Medium better"',
            'Unfollow 5 enemies from twitter'
        ];
        this.state = {
            prompts: [],
        };
        for (var i = 0; i < prompts_texts.length; i++) {   
            this.state.prompts.push(
                {
                    prompt_id: "q"+i,
                    text: prompts_texts[i],
                    value: false
                }
            );
        }
    }

    render(){
        var prompts = [];
        for (var i = 0; i < 6; i++) {
            let prompt_id = "q"+i;
            prompts.push(
                <tr key={prompt_id}>
                    <td>
                        <div className={"checkbox"}>
                            <input id={prompt_id} type="checkbox" onChange={this.handleClick} checked={this.state.prompts[i].value}/>
                            <label htmlFor={prompt_id}></label>
                        </div>
                    </td>
                    <td>{this.state.prompts[i].text}</td>
                </tr>
            );
        }
        return (
            <tbody>
                {prompts}
            </tbody>
        );
    }
}

export default Checklist;
