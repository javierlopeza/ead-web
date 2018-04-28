import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Card from 'components/Card/Card.jsx';

class Typography extends Component {
    
    render() {
        return (
            <div className="content">
                <Grid fluid>
                    <Row>
                        <Col md={12}>
                            <Card
                                title="Early Autism Detection"
                                category="Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
                                content={
                                    <div>
                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam.</p>
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

export default Typography;
