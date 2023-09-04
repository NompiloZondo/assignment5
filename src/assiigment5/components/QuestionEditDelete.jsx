import React from 'react'
import '../styles.css'
import {AiOutlineDelete} from  'react-icons/ai'
import {FiEdit}from 'react-icons/fi'
import { Link } from 'react-router-dom';

function QuestionEditDelete(prop) {
  return (
    <div className='QuestionEditDelete-card'>
      <div className='QuestionEditDelete-body'>{prop.questionx}</div>
      <div className='QuestionEditDelete-acitons flex'>
        {/* <div className='QuestionEditDelete-icon'><FiEdit/></div> */}
        <Link to={`/edit/${prop.questionId}`}> <div className='QuestionEditDelete-icon'><FiEdit/></div></Link>
        <Link to={`/delete/${prop.questionId}`}> <div className='QuestionEditDelete-icon'><AiOutlineDelete/></div></Link>
      </div>
    </div>
  )
}

export default QuestionEditDelete
