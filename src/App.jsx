import { useState } from 'react'
import { learnersData } from './data.js'

import './App.css'

function Score({ score }) {
  return (
    <div className="score">
      <p>
        Date: {score.date} | Score: {score.score}
      </p>
    </div>
  );
}

export default function Learner(){
  const [index, setIndex] = useState(0);

  function previousIndex() {
    setIndex(index - 1);
    if (index - 1 < 0) {
      setIndex(learnersData.length-1)
    }
  }

  function nextIndex() {
    if (index + 1 == learnersData.length) {
      console.log('Hello')
      setIndex(0)
    } else
    setIndex(index + 1);
    console.log(index + 1)
  }

  let learner = learnersData[index];
  return (
    <>
    <button onClick={previousIndex}>Back</button>
    <button onClick={nextIndex}>Next</button>
    <h2>
      <i>{learner.name}</i>
    </h2>
    <p>
      {learner.bio}
    </p>
    <h3>Scores:</h3>
          <ul>
         {learner.scores.map((score) => (
           <li key={score.date}>
             <Score score={score} />
           </li>
         ))}
       </ul>
    </>
  )
}
