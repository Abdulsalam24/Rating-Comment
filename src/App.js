import React, { useState } from 'react'

import Feedback from './components/Feedback'
import FeedbackStats from './components/FeedbackStats'
import Header from './components/Header'
import FeedbackForm from './components/FeedbackForm';

import { FeedbackProvider } from './components/context/FeedbackContext'

import background from './asset/img/background.png'

function App() {

  const bodyStyle = {
    backgroundImage: `url(${background})`,

  }


  return (
    <FeedbackProvider>
      <div className='app' style={bodyStyle}>
        <Header title='Rating & Comment' />
        <div className="container">
          <FeedbackForm />
          <FeedbackStats />
          <Feedback />
        </div>
      </div>
    </FeedbackProvider>
  )
}

export default App







