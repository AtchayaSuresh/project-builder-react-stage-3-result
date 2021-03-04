import React, { Component } from 'react';
import "./components.css";
import {Link} from "react-router-dom";

export default class ResultComponent extends Component {
    constructor()
    {
        super();
        
        this.state=({
            correctAnswer:0,
            wrongAnswer:0,
            questionsAttempted:0,
            totalQuestions:15,
            percentage:0,
            message:"You Need More Practice"
        });
    }

    componentDidMount(){
        this.setState({
            correctAnswer:parseInt(this.props.location.state.points),
            wrongAnswer:15-parseInt(this.props.location.state.points),
            questionsAttempted:this.props.location.state.questionsAttempted,
            percentage:((parseInt(this.props.location.state.points)/this.state.totalQuestions)*100).toFixed(2)
        });
        if(((parseInt(this.props.location.state.points)/this.state.totalQuestions)*100).toFixed(2)>50)
        {
            this.setState({
                message:'Good Work',
            });
        }
    }


    render() {
        return (
            <div className='background'>
                <h1 className='title result-title'>Result</h1>
                <div className='overlay'>
                    <h2>{this.state.message}</h2>
                    <h1>Your Score:{this.state.percentage}%</h1>
                    <div className='option-div'>
                        <h3>Total number of questions</h3>
                        <h3>{this.state.totalQuestions}</h3>
                        <h3>Number of attempted questions</h3>
                        <h3>{this.state.questionsAttempted}</h3>
                        <h3>Number of correct answers</h3>
                        <h3>{this.state.correctAnswer}</h3>
                        <h3>Number of Wrong Answers</h3>
                        <h3>{this.state.wrongAnswer}</h3>
                    </div>
                    
                </div>
                <div className='button-bar'>
                    <button className="options"><Link to="/QuizComponent" className='react-link'>Play Again</Link></button>
                    <button className="options"><Link to="/HomeComponent" className='react-link'>Back to Home</Link></button>
                </div>
            </div>
        )
    }
}
