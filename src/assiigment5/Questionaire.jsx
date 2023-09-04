import React, { useEffect, useState } from 'react';
import Navbarx from './components/navbar'
import './styles.css'
import Question from './components/Question'

export default function Questionaire() {
  const [questions, setQuestions] = useState([]);

  const handleAnswer=(theId,value)=>{
    if(value === "neutral"){
      setQuestions((prevQuestions) =>
    prevQuestions.map((question) =>
      question.id === theId
          ? { ...question, neutral: value === 'neutral' ? question.neutral + 1 : question.neutral }
          : question
      )
    );
    }else  if(value === "disagree"){
      setQuestions((prevQuestions) =>
    prevQuestions.map((question) =>
      question.id === theId
          ? { ...question, disagree: value === 'disagree' ? question.disagree + 1 : question.disagree }
          : question
      )
    );
    localStorage.setItem('questionaireData', JSON.stringify(questions));
    }else{
      setQuestions((prevQuestions) =>
    prevQuestions.map((question) =>
      question.id === theId
          ? { ...question, agree: value === 'agree' ? question.agree + 1 : question.agree }
          : question
      )
    );
    localStorage.setItem('questionaireData', JSON.stringify(questions));
  }
    };
    
  useEffect(() => {
    const storedData = localStorage.getItem('questionaireData');
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setQuestions(parsedData);
    }
  }, []);
  return (
    <div>
      <Navbarx page="questionaire"/>
        <div className="container">
           <h1 className='center-x'>Questionaire</h1>
           <div className='container-2'>
                <div>
                    {questions.map((question) => (
                        <Question key={question.id} questionx={question.question} questionId={question.id} onAnswer={handleAnswer} />
                    ))}
                    <div className='center-x'>
                        <button type="button" className='btn'>Submit</button>
                    </div>

                   
                </div>
           </div>
        </div>
    </div>
  )
}
