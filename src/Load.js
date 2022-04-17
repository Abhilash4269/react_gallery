import React from 'react'
import {useLocation} from 'react-router-dom'

function Load(){

    const location = useLocation();
    console.log(location)

    return(
      <>
        <div className='download'>
          
          <img src={`${location.state.data}`} alt={'pic'}></img>
          
        </div>
        
      </>
    )
  }

export default Load