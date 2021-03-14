import React from 'react'
import Title from './quizTitle'
import Q1 from './q1'
import Q2 from './q2'

export default function quiz() {
  return (
    <div className="quiz-container">
      <Title></Title>
      <Q1></Q1>
      <Q2></Q2>
    </div>
  )
}
