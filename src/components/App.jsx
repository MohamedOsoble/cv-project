import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import '../styles/App.css'
import GenerateForm from './generator'
import dataFields from '../../utils/datafields'

function App() {

  let htmlFields = <></>

  return (
  <>
  {
    Object.entries(dataFields).map((key, value) => (
      GenerateForm(key[0])
  ))
  }
  </>
  )
}

export default App
