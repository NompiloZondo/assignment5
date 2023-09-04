import React, { useEffect, useState } from 'react';
import Navbarx from './components/navbar'
import './styles.css'
import DashCard from './components/DashCard'
function Dashboard() {
  const [noOfQuestions, setNoOfQuestions] = useState(0);
  const [noOfAgree, setNoOAgree] = useState(0);
  const [noOfNeutral, setNoOfNeutral] = useState(0);
  const [noOfDisagreement, setNoOfDisagreement] = useState(0);

  useEffect(() => {
    const storedData = localStorage.getItem('questionaireData');
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      const counts = Object.keys(parsedData).map(() => 1);
      const totalQuestions = counts.reduce((acc, curr) => acc + curr, 0);
      const totalAgree = parsedData.map(question => question.agree).reduce((acc, curr) => acc + curr, 0);
      const totalNeutral = parsedData.map(question => question.neutral).reduce((acc, curr) => acc + curr, 0);
      const totalDisagree = parsedData.map(question => question.disagree).reduce((acc, curr) => acc + curr, 0);
      setNoOfQuestions(totalQuestions);
      setNoOAgree(totalAgree);
      setNoOfNeutral(totalNeutral);
      setNoOfDisagreement(totalDisagree);
    }else{
      setNoOfQuestions(0);
      setNoOAgree(0);
      setNoOfNeutral(0);
      setNoOfDisagreement(0);
    }
  }, []);
  return (
    <div >
        <Navbarx page="dash"/>
        <div className="container">
           <h1 className='center-x'>Dashboard</h1>
           <div className='container-2'>
                <DashCard headingx="Number of Questions" bodyx={noOfQuestions}/>
                <DashCard headingx="Agreements" bodyx={noOfAgree}/>
                <DashCard headingx="Neutral" bodyx={noOfNeutral}/>
                <DashCard headingx="Disagreements" bodyx={noOfDisagreement}/>
           </div>
        </div>
    </div>
  )
}

export default Dashboard
