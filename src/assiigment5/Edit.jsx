import React, { useEffect, useState } from 'react';
import Navbarx from './components/navbar'
import { Navigate } from "react-router-dom";
import './styles.css'
function Edit() {
    const questionId=window.location.href.replace("http://localhost:3000/edit/","");
    const [question, setQuestion] = useState('');
    const [done,setDone]=useState(false);

    useEffect(() => {
        const storedData = localStorage.getItem('questionaireData');
        const parsedData = storedData ? JSON.parse(storedData) : [];
        const foundQuestion = parsedData.find((question) => question.id === questionId);
        if (foundQuestion) {
            setQuestion(foundQuestion.question);
        } else {
          setDone(true);
        }
    }, [questionId]);

    const handleSave = (event) => {
        event.preventDefault();
        const storedData = localStorage.getItem('questionaireData');
        const parsedData = storedData ? JSON.parse(storedData) : [];
        const updatedData = parsedData.map((questions) =>
        questions.id === questionId ? questionaireData: questions
        );
        localStorage.setItem('questionaireData', JSON.stringify(updatedData));
        setDone(true);
      };
      const questionaireData = {
        id: questionId,
        question,
        agree:0,
        neutral:0,
        disagree:0,
      };
    
    const handleQuestionChange = (event) => {
        setQuestion(event.target.value);
      };
    
  return (
    <div>
        <Navbarx page="create"/>
        <div className="container">
            <br /><br /><br />
           <h1 className='center-x'>Edit Question</h1>
           <div className='container-2'>
                <div>
                    <div>
                    <form onSubmit={handleSave}>
                        <input 
                            className='QuestionEditDelete-input' 
                            type="text" 
                            name="question" 
                            id="question" 
                            value={question}
                            onChange={handleQuestionChange} 
                            placeholder=''
                            required
                            />
                       <div className='center-x'>
                       <button className='btn' type="submit">Edit</button>
                       </div>
                    </form>
                    </div>



                </div>
           </div>
        </div>
        {done &&(<Navigate to="/create"/>)}
    </div>
  )
}

export default Edit
