import React from 'react'
import './home.scss'
import Navbar from '../Navbar/Navbar'
import BankStatementUploader from '../BankStatementUploader/BankStatementUploader'

const Home = () => {
  return (
    <div className='home'>
        <Navbar/>
        <BankStatementUploader/>
    </div>
  )
}

export default Home