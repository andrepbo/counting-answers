'use client'

import { useState } from "react";

function AnswerCounter() {
  const [totalAnswers, setTotalAnswers] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [recordedPercentages, setRecordedPercentages] = useState<number[]>([]);

  const incrementCount = () => {
    const newTotalAnswers = totalAnswers + 1;
    const newCorrectAnswers = correctAnswers + 1;
    setTotalAnswers(newTotalAnswers);
    setCorrectAnswers(newCorrectAnswers);

    if (newTotalAnswers % 60 === 0) {
      const correctPercentage = Math.floor((newCorrectAnswers / newTotalAnswers) * 100);
      setRecordedPercentages([...recordedPercentages, correctPercentage]);
    }
  };

  const decrementCount = () => {
    const newTotalAnswers = totalAnswers + 1;
    setTotalAnswers(newTotalAnswers);

    if (newTotalAnswers % 60 === 0) {
      const correctPercentage = Math.floor((correctAnswers / newTotalAnswers) * 100);
      setRecordedPercentages([...recordedPercentages, correctPercentage]);
    }
  };

  const resetCounts = () => {
    setTotalAnswers(0);
    setCorrectAnswers(0);
    setRecordedPercentages([]);
  };

  const correctPercentage = totalAnswers ? Math.floor((correctAnswers / totalAnswers) * 100) : 0;

  return (
    <div>
      <p>Counting answers</p>
      <div>Total Answers: {totalAnswers}</div>
      <div>Correct Answers: {correctAnswers} ({correctPercentage}%)</div>
      <div>Recorded Percentages after 60 attempts: {recordedPercentages.map(p => `${p}%`).join(', ')}</div>
      <button onClick={incrementCount}>Correct Answer</button>
      <button onClick={decrementCount}>Incorrect Answer</button>
      <button onClick={resetCounts}>Reset</button>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <AnswerCounter />
    </main>
  );
}