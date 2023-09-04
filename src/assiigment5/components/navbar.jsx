import React, { useState, useEffect } from 'react';
import '../styles.css'
import { Link } from 'react-router-dom';

function Navbar(props) {
    const page= props.page;
    const [dash,setDash]=useState('');
    const [crt,setCrt]=useState('');
    const [qtn,setQtn]=useState('');
    useEffect(()=>{
        if(page==="create"){
            setDash("nav-link");
            setQtn("nav-link");
            setCrt("nav-link active");
        }else if(page==="questionaire"){
            setDash("nav-link");
            setQtn("nav-link active");
            setCrt("nav-link");
        }else{
            setDash("nav-link active");
            setQtn("nav-link");
            setCrt("nav-link");
        }
    },[page]);
  return (
    <div className='navbarx'>
       <div className='logo'>Logo</div>
        <Link className='no-underline' to="/">
            <div className={dash}>Dashboard</div>
        </Link>
        <Link className='no-underline' to="/questions">
            <div className={qtn}>Questionaire</div>
        </Link>
        <Link className='no-underline' to="/create">
            <div className={crt}>Create</div>
        </Link>
    </div>
  )
}

export default Navbar
