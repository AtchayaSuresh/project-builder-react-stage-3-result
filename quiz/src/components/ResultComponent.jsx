import React, { Component } from 'react';
import "./components.css";

export default class ResultComponent extends Component {
    render() {
        return (
            <div className='background'>
                <h1 className='title' id='result-title'>Result</h1>
                <div className='overlay'>
                    <h2>You Need More Practice</h2>
                    <h1>Your Score:20%</h1>
                    <div className='option-div'>
                        <h3>Total number of questions</h3>
                        <h3>15</h3>
                        <h3>Number of attempted questions</h3>
                        <h3>9</h3>
                        <h3>Number of correct answers</h3>
                        <h3>3</h3>
                        <h3>Number of Wrong Answers</h3>
                        <h3>6</h3>
                    </div>
                    
                </div>
                <div className='button-bar'>
                    <input type="button" value="Play Again" className="options"/>
                    <input type="button" value="Back To Home" className="options"/>
                </div>
            </div>
        )
    }
}
