import React from 'react'
import Dashboard from './Dashboard/Dashboard'
import { NavbarData } from '../../../components/navbar/NavbarData';
import Navbar from '../../../components/navbar/Navbar';

const UserPage = () => {
  return (
    <div>
      <Navbar datas={NavbarData}/>
      <Dashboard/>

    </div>
  )
}

export default UserPage
