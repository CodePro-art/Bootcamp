import React from 'react'
import Title from './QuizTitle'
import Q1 from './Q1'
import Q2 from './Q2'
import './Quiz.css'

export default function quiz() {
  return (
    <div className="quiz-container">
      <div className="quiz">
        <Title></Title>
        <Q1></Q1>
        <Q2></Q2>
      </div>
    </div>
    
  )
}
