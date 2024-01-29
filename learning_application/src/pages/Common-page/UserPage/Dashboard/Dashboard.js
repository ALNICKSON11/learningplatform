import React from 'react'
import './dashboard.css';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div className='dashboard'>
        <div className='yourcourses'>
          <div className='coursetext'>
            <p>Your courses</p>
          </div>
          <div className='types'>
            <Link to='#' className='typeslink'>Active Courses</Link>
            <Link to='#' className='typeslink'>Completed Courses</Link>
            

          </div>
          


            
        </div>
       
      
    </div>
  )
}

export default Dashboard;
