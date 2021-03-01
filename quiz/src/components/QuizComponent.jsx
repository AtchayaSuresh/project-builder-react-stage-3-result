import React, { Component } from 'react';
import "./components.css";
import questions from "../resources/questions.json"
import {Link} from "react-router-dom";

export default class QuizComponent extends Component {
    constructor(){
        super();
        this.state=({
            'questionNumber':0,
            'points':0
        })
    }

    //previous button
    previousQuestionHandler = ()=>{
        this.setState({
            'questionNumber':this.state.questionNumber-1
        });
    }

    //next button
    nextQuestionHandler = ()=>{
        this.setState({
            'questionNumber':this.state.questionNumber+1
        });
    }



    render() {
        return (
            <div className='background'>
                <div className='overlay'>
                    <h1 className='title quiz-title'>Question</h1>
                    <div className='question-number'>
                        <h2>{this.state.questionNumber+1} of 15</h2>
                        <h2>{questions[this.state.questionNumber].question}</h2>

                    </div>
                    
                    
                    <div className='option-display'>
                        <button className="options button-style">{questions[this.state.questionNumber].options[0]}</button>
                        <button className="options button-style">{questions[this.state.questionNumber].options[1]}</button>
                        <button className="options button-style">{questions[this.state.questionNumber].options[2]}</button>
                        <button className="options button-style">{questions[this.state.questionNumber].options[3]}</button>
                    </div>

                    <div className='button-bar'>
                        <input type="button" value="Previous" onClick={this.previousQuestionHandler} className="button-style"/>
                        <button className="button-style" onClick={this.nextQuestionHandler}>Next</button>
                        <button className="button-style"><Link to="/ResultComponent" className='button-style'>Quit</Link></button>
                    </div>
                </div>
                
            </div>
        )
    }
}
