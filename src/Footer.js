import React,{useContext} from 'react'
import { FooterContext } from './App' 

function Footer() {
  const xyz = useContext(FooterContext)
  return (
    <div className='foot'>{xyz} &nbsp;<a href='www.flickr.com'>www.flickr.com 💖</a> </div>
  )
}

export default Footer