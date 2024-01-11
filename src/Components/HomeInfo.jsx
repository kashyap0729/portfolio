import React from 'react'
import { Link } from 'react-router-dom'
const InfoBox=({text,link,btnText})=>(
    <div style={{ borderRadius: '10px' }} className="sm:text-xl sm:leading-snug text-center neo-brutalism-white py-4 px-8
    text-black mx-5 info-Box">
        <p>{text}</p>
        <Link to={link}>
            <button className='primary-btn'>{btnText}</button>
        </Link>

    </div>
);
const renderContent ={
    1:(
        <h1 style={{ borderRadius: '10px' }} className="sm:text-xl sm:leading-snug text-center neo-brutalism-white py-4 px-8
        text-black mx-5">Hello, I am <span className='font-semibold'>Kashyap Mamidipalli</span>
        <br/>
        A Software Engineer
        </h1>
    ),
    2:(
       <InfoBox 
       text="Worked as a software developer, I am currently pursuing a master's degree in Information Systems"
       
       link="/About"
       btnText="...more info"
       />
    ),
    3:(
    <InfoBox 
       text=" I have developed many projects using various technologies"
       
       link="/Projects"
       btnText="my projects?"
       />    ),
    4:(
        <InfoBox 
       text="Want to discuss about my projects or Looking for a developer ?"
       
       link="/Contact"
       btnText="Let's Talk..."
       />
    ),
}

const HomeInfo = ({currentStage}) => {
  return (renderContent[currentStage]||null
    )
}

export default HomeInfo;