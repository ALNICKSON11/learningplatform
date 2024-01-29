import React from 'react'
import '../header/head.css';
import Button from '../button/Button';
import { AiFillUnlock } from "react-icons/ai";

const Head = () => {
  const buttonName = 'SignIn';
  const bgcolor = 'linear-gradient(90deg, #fcff9e 0%, #c67700 100%)';
  return (
    <div>
      <section className='head'>
        <div className='container'>
            <div className='logo'>
                <h1>BROCODERS</h1>
                <p>ONLINE EDUCATION AND LEARNING</p>
            </div>

            
            <Button IconName={AiFillUnlock} ButtonName={buttonName} backgroundColor={bgcolor}/>
        </div>
      </section>
    </div>
  )
}

export default Head
