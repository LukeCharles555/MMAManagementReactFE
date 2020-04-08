
import React, { Component } from 'react';
import classes from "../css/Dashboard.module.css";
import MyChart from "./ChartFighterStats";
import { managerData, nationalAverageData, yearLabels, managerQuarterData, nationalAverageQuarterData, quarterLabels } from "../MockData";

export default class Dashboard extends Component {
    state = {
        data: managerData,
        average: nationalAverageData,
        labels: yearLabels
    }

    handleButtonClick = e => {
        const { value } = e.target;
        const isAnnual = value === "annual";

        const newData = isAnnual ? managerData : managerQuarterData;
        const newLabels = isAnnual ? yearLabels : quarterLabels;
        const newAverage = isAnnual ? nationalAverageData : nationalAverageQuarterData;

        this.setState({
            data: newData,
            average: newAverage,
            labels: newLabels
        })
    }

    render() {
        const { data, average, labels } = this.state;
        return (
            <div className={classes.container}>
                <header>
                    <h1>Fighter Stats</h1>
                </header>

                <div className={classes.buttonContainer}>
                    <button
                        value="annual"
                        onClick={this.handleButtonClick}
                    >
                        Annual
                    </button>

                    <button
                        value="lastquarter"
                        onClick={this.handleButtonClick}
                    >
                        Last Quarter
                    </button>
                </div>

                <MyChart
                    data={data}
                    average={average}
                    labels={labels} />

            </div>
        )
    }
}