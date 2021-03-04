import React, { Component } from 'react';
import "./components.css";
import questions from "../resources/questions.json"
import {Redirect, Link} from "react-router-dom";

export default class QuizComponent extends Component {
    constructor(){
        super();
        this.state=({
            'questionNumber':0,
            'points':0,
            'questionsAttempted':0,
            'currentQuestion':questions[0],
            'optionA':questions[0].options[0],
            'optionB':questions[0].options[1],
            'optionC':questions[0].options[2],
            'optionD':questions[0].options[3],
             showResult:false
        })
    }

    questionHandler(){
        this.setState({
            'optionA':this.state.currentQuestion.options[0],
            'optionB':this.state.currentQuestion.options[1],
            'optionC':this.state.currentQuestion.options[2],
            'optionD':this.state.currentQuestion.options[3]
        })

    }

    //previous button
    previousQuestionHandler = ()=>{
        this.setState(prevState => ({
            'currentQuestion':questions[prevState.questionNumber-1],
            'questionNumber':prevState.questionNumber-1,
            'optionA':questions[prevState.questionNumber-1].options[0],
            'optionB':questions[prevState.questionNumber-1].options[1],
            'optionC':questions[prevState.questionNumber-1].options[2],
            'optionD':questions[prevState.questionNumber-1].options[3]
        }));
    }

    //next button
    nextQuestionHandler = ()=>{
        if(this.state.questionNumber==14)
        {
            alert("Quiz is completed");
            this.setState({showResult:true});
        }
        else{
        this.setState(prevState=>({
            'currentQuestion':questions[prevState.questionNumber+1],
            'questionNumber':prevState.questionNumber+1,
            'optionA':questions[prevState.questionNumber+1].options[0],
            'optionB':questions[prevState.questionNumber+1].options[1],
            'optionC':questions[prevState.questionNumber+1].options[2],
            'optionD':questions[prevState.questionNumber+1].options[3]
        }));}
    }

    answerVerifier(answer){
        if(questions[this.state.questionNumber]['answer']==answer)
        {
            this.setState(prevState => ({
                'points': prevState.points + 1
            }));
        }
        this.setState(prevState=>({
            'questionsAttempted':prevState.questionsAttempted+1
        }));
       
        this.nextQuestionHandler();
    }

    handle =() =>{
        alert('Quiz has ended!');
    }

    render() {
        return (
             <div className='background'>
                <div className='overlay'>
                    <h1 className='title quiz-title'>Question</h1>
                    <div className='question-number'>
                        <h2>{this.state.questionNumber+1} of 15</h2>
                        <h2>{this.state.currentQuestion.question}</h2>

                    </div>
                    
                    <div className='option-display'>
                        <button className="options button-style" onClick={()=>this.answerVerifier(this.state.optionA)}>{this.state.optionA}</button>
                        <button className="options button-style" onClick={()=>this.answerVerifier(this.state.optionB)}>{this.state.optionB}</button>
                        <button className="options button-style" onClick={()=>this.answerVerifier(this.state.optionC)}>{this.state.optionC}</button>         
                        <button className="options button-style" onClick={()=>this.answerVerifier(this.state.optionD)}>{this.state.optionD}</button>
                    </div>

                    <div className='button-bar'>
                        {(this.state.questionNumber!=0) && <button className="button-style" onClick={this.previousQuestionHandler}>Previous</button>}
                        {(this.state.questionNumber!=14) && <button className="button-style" onClick={this.nextQuestionHandler}>Next</button>}
                        
                        {(this.state.showResult)  && <Redirect to={{
                            pathname: "/ResultComponent",
                            state: {points:this.state.points,
                            questionsAttempted:this.state.questionsAttempted}
                        }}></Redirect>}

                       <button className="button-style" onClick={this.handle}>
                           <Link to={{
                            pathname: "/ResultComponent",
                            state: {points:this.state.points,
                            questionsAttempted:this.state.questionsAttempted}
                            }} className='react-link'>Quit</Link></button>
                       
                        
                    </div>
                </div>
            </div>
            
        )
    }
}
