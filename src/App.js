import React from 'react';  
import {BrowserRouter,Routes, Route} from 'react-router-dom';

import Dash from './Dash.js'
import Load from './Load.js'

export const FooterContext = React.createContext()

function App() {
  

  return (
    <>
      <FooterContext.Provider value={'visit'} >
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Dash />}></Route>
            <Route path='/search' element={<Dash />}></Route>
            <Route path='/search/view' element={<Load />} ></Route>
          </Routes>
        </BrowserRouter>
      </FooterContext.Provider>
    </>
  );
}

export default App;


