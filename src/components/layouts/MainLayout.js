// Import Modules
import React from 'react'

// Import Components
import Header from '../presentational/Header'
import Footer from '../presentational/Footer'
import LoadingSpinner from '../presentational/LoadingSpinner'

// Import Styles
import './styles.scss'

const MainLayout = ({ children }) => (
  <div className='main-layout'>
    <Header />
    <main>
      <LoadingSpinner />
      {children}
    </main>
    <Footer />
  </div>
)

export default MainLayout
