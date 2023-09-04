import React, { useEffect, useState } from 'react';
import { Navigate } from "react-router-dom";

function Delete() {
    const questionId=window.location.href.replace("http://localhost:3000/delete/","");
    const [done,setDone]=useState(false);

  useEffect(() => {
    const storedData = localStorage.getItem('questionaireData');
    const parsedData = storedData ? JSON.parse(storedData) : [];
    const updatedData = parsedData.filter((question) => question.id !== questionId);
    localStorage.setItem('questionaireData', JSON.stringify(updatedData));
    setDone(true);
}, [questionId]);
  return (
    <div>
        <h1>Delete Question</h1>  
        {done &&(<Navigate to="/Create"/>)}
    </div>
  );
}
export default Delete;