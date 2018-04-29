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
                        <Col md={12} style={{display: 'flex', justifyContent: 'center', marginBottom: '50px'}}>
                            <Button form="form1" onClick={this.handleSubmit} round fill bsStyle="info" type="submit">Get EAD Prediction</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12} style={{display: 'flex', justifyContent: 'center', marginBottom: '105px'}}>
                            <Card
                                title="Attributes"
                                content={
                                    <div>
                                        <div className="typo-line">
                                            <p className="category">Age in months</p>
                                            <blockquote>
                                             <p>
                                             Age is rounded to chronological month. If the child is 15-days-old, the appropriate value would be 0 months. If the child is 16-days-old, the value would be 1 month.
                                             </p>
                                            </blockquote>
                                        </div>
                                        <div className="typo-line">
                                            <p className="category">Sex</p>
                                            <blockquote>
                                             <p>
                                             <b>M</b> = Male
                                             </p>
                                             <p>                                             
                                             <b>F</b> = Female
                                             </p>
                                            </blockquote>
                                        </div>
                                        <div className="typo-line">
                                            <p className="category">Unusual eye contact</p>
                                            <blockquote>
                                             <p>
                                             <b>0</b> = Appropriate gaze with subtle changes meshed with other communication.
                                             </p>
                                             <p>                                             
                                             <b>1</b> = Uses poorly modulated eye contact to initiate, terminate, or regulate social interaction.
                                             </p>
                                             <p>                                             
                                             <b>2</b> = Uses poorly modulated eye contact to initiate, terminate, or regulate social interaction and frequently actively avoids eye contact (e.g., by turning away, pushing away, closing eyes).
                                             </p>
                                            </blockquote>
                                        </div>
                                        <div className="typo-line">
                                            <p className="category">Anxiety</p>
                                            <blockquote>
                                            {/* <p>Refers to the presence of obsessions, compulsions, motor and vocal tics, and social phobia.</p> */}
                                             <p>
                                             <b>0</b> = No obvious anxiety (e.g., trembling or jumpiness). 
                                             </p>
                                             <p>                                             
                                             <b>1</b> = Mild signs of anxiety, or marked anxiety only in response to a specific request or to one particular toy or task. 
                                             </p>
                                             <p>                                             
                                             <b>2</b> = Marked anxiety in response to more than one toy or task or several times.
                                             </p>
                                            </blockquote>
                                        </div>
                                        <div className="typo-line">
                                            <p className="category">Hand mannerisms</p>
                                            <blockquote>
                                            {/* <p>Mannerisms of the hands, such as flapping, finger twisting or flicking, rubbing, or wringing hands, and odd posturing, such as posturing of the fingers, hands, or arms.</p> */}
                                             <p>
                                             <b>0</b> = None.
                                             </p>
                                             <p>                                             
                                             <b>1</b> = Very brief or rare hand and finger mannerisms or complex mannerisms.
                                             </p>
                                             <p>                                             
                                             <b>2</b> = Definite finger flicking or twisting, and hand or other mannerisms or stereotypes.
                                             </p>
                                            </blockquote>
                                        </div>
                                        <div className="typo-line">
                                            <p className="category">Imagination / creativity</p>
                                            <blockquote>
                                             <p>
                                             <b>0</b> = Spontaneous use of a doll or other object as an independent agent, or spontaneous use of objects to represent other objects (e.g., pretends to eat the string like spaghetti). 
                                             </p>
                                             <p>                                             
                                             <b>1</b> = Spontaneous pretend play with a doll (e.g., feeding, hugging, or giving a drink) or other objects, but no use of a doll or other toy as an independent agent or to represent something else. 
                                             </p>
                                             <p>                                             
                                             <b>2</b> = No imitated or spontaneous pretend play.
                                             </p>
                                            </blockquote>
                                        </div>    
                                        <div className="typo-line">
                                            <p className="category">Immediate echolalia</p>
                                            <blockquote>
                                                {/* <p>
                                                Refers to replicated utterances that are produced or echoed immediately or almost immediately after they are heard.
                                                </p> */}
                                             <p>
                                             <b>0</b> = Does not repeat others' speech.
                                             </p>
                                             <p>                                             
                                             <b>1</b> = Echoing words and phrases regularly, but some spontaneous language, which can be stereotyped. 
                                             </p>
                                             <p>                                             
                                             <b>2</b> = Speech largely consists of immediate echolalia.
                                             </p>
                                            </blockquote>
                                        </div>     
                                        <div className="typo-line">
                                            <p className="category">Quality of social overtures</p>
                                            <blockquote>
                                                {/* <p>
                                                A behaviour initiated by the child that is directed to another person for the purpose of communicating social intent.
                                                </p> */}
                                             <p>
                                             <b>0</b> = Effectively uses nonverbal and verbal means to make clear social overtures to the examiner or the parent/caregiver. The overtures must be appropriate to immediate contexts.
                                             </p>
                                             <p>                                             
                                             <b>1</b> = Overtures often lack integration into context and social quality. Assign this rating if there are some clearly inappropriate overtures, even if there are other overtures. 
                                             </p>
                                             <p>                                             
                                             <b>2</b> = No social overtures of any kind.
                                             </p>
                                            </blockquote>
                                        </div>        
                                        <div className="typo-line">
                                            <p className="category">Self-injurious behavior</p>
                                            <blockquote>
                                                {/* <p>
                                                The most common forms of these behaviors include: head-banging, hand-biting, and excessive self-rubbing and scratching.
                                                </p> */}
                                             <p>
                                             <b>0</b> = No attempts to harm self. 
                                             </p>
                                             <p>                                             
                                             <b>1</b> = Dubious or possible self-injury, and/or rare but clear self-injury (e.g., one clear example of biting at own hand or arm, pulling own hair, slapping own face, or banging own head). 
                                             </p>
                                             <p>                                             
                                             <b>2</b> = More than one clear example of self-injury, such as head banging, face slapping, hair pulling, or self-biting.
                                             </p>
                                            </blockquote>
                                        </div>  
                                        <div className="typo-line">
                                            <p className="category">Shared enjoyment in interaction</p>
                                            <blockquote>
                                             <p>
                                             <b>0</b> = Shows definite and appropriate pleasure during more than one activity. Must include pleasure in at least one activity that is not purely physical in nature (e.g., tickling). 
                                             </p>
                                             <p>                                             
                                             <b>1</b> = Shows some appropriate pleasure during more than one activity, or shows definite pleasure directed to others during one interaction (may be physical in nature). 
                                             </p>
                                             <p>                                             
                                             <b>2</b> = Shows little or no expressed pleasure in interaction with others. May show pleasure in his/her own actions, in interaction with a parent/caregiver, or in the available toys.
                                             </p>
                                            </blockquote>
                                        </div>                     
                                        <div className="typo-line">
                                            <p className="category">Disruptive behavior</p>
                                            <blockquote>
                                                {/* <p>
                                                Patterns of ongoing uncooperative, defiant, and hostile behaviors toward authority figures that seriously impacts a child’s daily functioning.
                                                </p> */}
                                             <p>
                                             <b>0</b> = Not upset, disruptive, negative, destructive, or aggressive. 
                                             </p>
                                             <p>                                             
                                             <b>1</b> = Occasional display of mild upset, anger, aggression, negativism, or disruptive behavior to the parent/caregiver. 
                                             </p>
                                             <p>                                             
                                             <b>2</b> = Shows little or no expressed pleasure in interaction with others. May show pleasure in his/her own actions, in interaction with a parent/caregiver, or in the available toys.
                                             </p>
                                            </blockquote>
                                        </div>                  
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

export default Predict;
