import React, { Component } from 'react';
import ChartistGraph from 'react-chartist';
import { Grid, Row, Col, Table } from 'react-bootstrap';


import { Card } from 'components/Card/Card.jsx';
import { StatsCard } from 'components/StatsCard/StatsCard.jsx';
import { Tasks } from 'components/Tasks/Tasks.jsx';
import {
    dataPie,
    legendPie,
    dataSales,
    optionsSales,
    responsiveSales,
    legendSales,
    dataBar,
    optionsBar,
    responsiveBar,
    legendBar
} from 'variables/Variables.jsx';

class Dashboard extends Component {
    createLegend(json) {
        var legend = [];
        for (var i = 0; i < json["names"].length; i++) {
            var type = "fa fa-circle text-" + json["types"][i];
            legend.push(
                <i className={type} key={i}></i>
            );
            legend.push(" ");
            legend.push(
                json["names"][i]
            );
        }
        return legend;
    }
    render() {
        return (
            <div className="content">
                <Grid fluid style={{marginBottom: '280px'}}>
                    <Row>
                        <Col lg={5} sm={6}>
                            <StatsCard
                                bigIcon={<i className="pe-7s-graph1 text-info"></i>}
                                statsText="Model"
                                statsValue="Random Forest"
                                statsIcon={<i className="fa fa-calendar-o"></i>}
                                statsIconText="Updated yesterday"
                            />
                        </Col>
                        <Col lg={4} sm={6}>
                            <StatsCard
                                bigIcon={<i className="pe-7s-server text-warning"></i>}
                                statsText="Instances"
                                statsValue="12,461"
                                statsIcon={<i className="fa fa-calendar-o"></i>}
                                statsIconText="Updated yesterday"
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={3} sm={6}>
                            <StatsCard
                                bigIcon={<i className="pe-7s-target text-success"></i>}
                                statsText="Precision"
                                statsValue="87%"
                                statsIcon={<i className="fa fa-calendar-o"></i>}
                                statsIconText="Last day"
                            />
                        </Col>
                        <Col lg={3} sm={6}>
                            <StatsCard
                                bigIcon={<i className="pe-7s-check text-success"></i>}
                                statsText="Recall"
                                statsValue="87%"
                                statsIcon={<i className="fa fa-calendar-o"></i>}
                                statsIconText="Last day"
                            />
                        </Col>
                        <Col lg={3} sm={6}>
                            <StatsCard
                                bigIcon={<i className="pe-7s-graph3 text-success"></i>}
                                statsText="F1-score"
                                statsValue="86%"
                                statsIcon={<i className="fa fa-calendar-o"></i>}
                                statsIconText="Last day"
                            />
                        </Col>
                    </Row>
                    
                    {/* <Row>
                        <Col md={8}>
                            <Card
                                statsIcon="fa fa-history"
                                id="chartHours"
                                title="Users Behavior"
                                category="24 Hours performance"
                                stats="Updated 3 minutes ago"
                                content={
                                    <div className="ct-chart">
                                        <ChartistGraph
                                            data={dataSales}
                                            type="Line"
                                            options={optionsSales}
                                            responsiveOptions={responsiveSales}
                                        />
                                    </div>
                                }
                                legend={
                                    <div className="legend">
                                        {this.createLegend(legendSales)}
                                    </div>
                                }
                            />
                        </Col>
                        <Col md={4}>
                            <Card
                                statsIcon="fa fa-clock-o"
                                title="Email Statistics"
                                category="Last Campaign Performance"
                                stats="Campaign sent 2 days ago"
                                content={
                                    <div id="chartPreferences" className="ct-chart ct-perfect-fourth">
                                        <ChartistGraph data={dataPie} type="Pie" />
                                    </div>
                                }
                                legend={
                                    <div className="legend">
                                        {this.createLegend(legendPie)}
                                    </div>
                                }
                            />
                        </Col>
                    </Row> */}

                    {/* <Row>
                        <Col md={6}>
                            <Card
                                id="chartActivity"
                                title="2014 Sales"
                                category="All products including Taxes"
                                stats="Data information certified"
                                statsIcon="fa fa-check"
                                content={
                                    <div className="ct-chart">
                                        <ChartistGraph
                                            data={dataBar}
                                            type="Bar"
                                            options={optionsBar}
                                            responsiveOptions={responsiveBar}
                                        />
                                    </div>
                                }
                                legend={
                                    <div className="legend">
                                        {this.createLegend(legendBar)}
                                    </div>
                                }
                            />
                        </Col>

                        <Col md={6}>
                            <Card
                                title="Tasks"
                                category="Backend development"
                                stats="Updated 3 minutes ago"
                                statsIcon="fa fa-history"
                                content={
                                    <div className="table-full-width">
                                        <table className="table">
                                            <Tasks />
                                        </table>
                                    </div>
                                }
                            />
                        </Col>
                    </Row> */}

                    {/* <Row>
                        <Col md={12}>
                            <Card
                                title="Striped Table with Hover"
                                category="Here is a subtitle for this table"
                                ctTableFullWidth ctTableResponsive
                                content={
                                    <Table striped hover>
                                        <thead>
                                            <tr>
                                                <th>Header 1</th>
                                                <th>Header 2</th>
                                                <th>Header 3</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Data1.1</td>
                                                <td>Data1.2</td>
                                                <td>Data1.3</td>
                                            </tr>
                                            <tr>
                                                <td>Data2.1</td>
                                                <td>Data2.2</td>
                                                <td>Data2.3</td>
                                            </tr>
                                            <tr>
                                                <td>Data3.1</td>
                                                <td>Data3.2</td>
                                                <td>Data3.3</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                }
                            />
                        </Col>
                    </Row> */}
                </Grid>
            </div>
        );
    }
}

export default Dashboard;
