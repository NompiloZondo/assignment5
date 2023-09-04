import React from 'react'
import '../styles.css'

function Question(prop) {

  const handleSubmit = (questionId,value) => {
    prop.onAnswer(questionId,value);
  };
  return (
    <div className='qauestion-card'>
      <div className='question-body'>{prop.questionx}</div>
      <div className='flex'>
            <div className='question-input'>
                <label className='question-label' htmlFor="agree">Agree</label>
                <input className='question-radios' type="radio" name={prop.questionId} id="" onChange={()=>handleSubmit(prop.questionId,'agree')}/>
            </div>
            <div className='question-input'>
                <label className='question-label' htmlFor="disagree">Neutral</label>
                <input className='question-radios' type="radio" name={prop.questionId} id="" onChange={()=>handleSubmit(prop.questionId,'neutral')} />
            </div>
            <div className='question-input'>
                <label className='question-label' htmlFor="neutral">Disagree</label>
                <input className='question-radios' type="radio" name={prop.questionId} id="" onChange={()=>handleSubmit(prop.questionId,'disagree')}/>
            </div>
      </div>
    </div>
  )
}

export default Question
