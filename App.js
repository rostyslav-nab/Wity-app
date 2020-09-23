import React, {Suspense} from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom'

import Root from './Root'
import Routes from "routes" 


const App = () => {

  return (
    <>
      <BrowserRouter>
        <Root/>
         {/* <Suspense fallback={<></>}><Routes/></Suspense> */}
      </BrowserRouter>
    </>
  )

}

export default App;
