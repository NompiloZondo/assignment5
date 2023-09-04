import React, {useEffect, useState } from 'react';
import Navbarx from './components/navbar'
import './styles.css'
import QuestionEditDelete from './components/QuestionEditDelete'

function Createq() {
    const [question, setQuestion] = useState('');

    const [questions, setQuestions] = useState([]);

    useEffect(() => {
      const storedData = localStorage.getItem('questionaireData');
      if (storedData) {
        const parsedData = JSON.parse(storedData);
        setQuestions(parsedData);
      }
    }, []);
    
    const handleNewQuestionChange = (event) => {
        setQuestion(event.target.value);
      };
    const handleSubmit = (event) => {
        event.preventDefault();
      const userId = new Date().getTime().toString();
    
      const storedData = localStorage.getItem('questionaireData');
      let existingData = storedData ? JSON.parse(storedData) : [];
      if (!Array.isArray(existingData)) {
        existingData = [];
      }
    
      const questionaireData = {
        id: userId,
        question,
        agree:0,
        neutral:0,
        disagree:0,
      };
    
      const updatedData = [...existingData, questionaireData];
    
      localStorage.setItem('questionaireData', JSON.stringify(updatedData));
    
      console.log('Question added:', questionaireData);
      setQuestion('');
    };
  return (
    <div>
        <Navbarx page="create"/>
        <div className="container">
           <h1 className='center-x'>Create a Questionaire</h1>
           <div className='container-2'>
                <div>
                    <div>
                    <form onSubmit={handleSubmit}>
                        <input 
                            className='QuestionEditDelete-input' 
                            type="text" 
                            name="question" 
                            id="question" 
                            value={question}
                            onChange={handleNewQuestionChange} 
                            placeholder='Enter new question'
                            required
                            />
                       <div className='center-x'>
                       <button className='btn' type="submit">Add</button>
                       </div>
                        
                        <div>
                            <h1 className='center-x'>List of Questions</h1>
                            <div>
                                    {/* <QuestionEditDelete questionx="Java is the best language"/>
                                    <QuestionEditDelete questionx="C++ is easy to learn"/>
                                    <QuestionEditDelete questionx="Javascript is not safe"/> */}
                                    {questions.map((question) => (
                                        <QuestionEditDelete key={question.id} questionx={question.question} questionId={question.id}  />
                                    ))}

                            </div>
                        </div>
                    </form>
                    </div>



                </div>
           </div>
        </div>
    </div>
  )
}

export default Createq
