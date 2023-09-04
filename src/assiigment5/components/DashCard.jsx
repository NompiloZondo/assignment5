import React from 'react'
import '../styles.css'

function DashCard(props) {
  return (
    <div className='dash-card'>
      <div className='dash-header'>{props.headingx}</div>
      <div className='dash-body'>{props.bodyx}</div>
    </div>
  )
}

export default DashCard
