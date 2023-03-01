import React from 'react'
import { Provider } from 'react-redux'
import Updown from './Updown'
import App from '../Store2/App'

function Main() {
  return (
    <Provider store={App}>
    <Updown/>
    </Provider>
    
  )
}

export default Main