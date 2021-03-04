import React, { Component } from 'react';
import "./components.css";
import {Link} from "react-router-dom";

export default class HomeComponent extends Component {
    render() {
        return (
            <div className='background'>
                <h1 className="title">Quiz App</h1>
                <button className='button-style'><Link to='/QuizComponent' className='react-link'>Play Now</Link></button>
            </div>
        )
    }
}
