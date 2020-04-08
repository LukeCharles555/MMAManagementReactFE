import React from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import NavBar from "./NavBar";
import MyChart from './ChartFighterStats';

export default class FighterStatsPage extends React.Component {
    constructor(props) {
        super(props);
    }

    
    render() {
        return (
           <div>
               <MyChart />
           </div> 
        )
    }
}