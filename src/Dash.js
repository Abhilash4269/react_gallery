import React ,{useState, useEffect} from 'react'

import {useNavigate} from 'react-router-dom'
import axios from 'axios';

import NavBar from './NavBar.js'
import Card from './Card'
import Footer from './Footer'


function Dash(){

    const navigate = useNavigate();
  
    const [state,setState] = useState([])
    const[item,setItem] = useState('')
    // const[link,setLink] = useState();
  
    
    useEffect(()=>{
      async function callPoint(){
        var response = await axios.get('https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=a26dbb23a4836f9a6f3aff121140fcd5&tags=landscape&format=json&nojsoncallback=1')
        await setState(response.data.photos.photo)
        console.log(response.data.photos.photo)
      };
      callPoint()
    },[])
  
    const handleSubmit = async(x) => {
      console.log(x)
      var response = await axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=a26dbb23a4836f9a6f3aff121140fcd5&tags=${x}&format=json&nojsoncallback=1`)
      await setState(response.data.photos.photo)
      console.log(response.data.photos.photo)
    }
  
    const handleSearch = (e) => {
      setItem(e.target.value)
      console.log(e.target.value)
      
    }
  
    const handleEnter = (e) => {
      console.log(e.key)
      if(e.key === 'Enter'){
        return handleSubmit(item)
      }
    }
  
    const handleOpen = (e)=> {
      console.log(e)
    //   setLink(e.target.src)
      navigate(`/search/view`,{state:{data:e.target.src}})
      
    }
  
  
    return(
      <>
  
         <NavBar search_item={(e)=>handleSearch(e)} submit={()=>handleSubmit(item)} search={(e)=>handleEnter(e)}/>
        
          <div className='heart'>
          {state.map((x)=>(<div className='slate'>
            <Card pic_link={`https://farm${x.farm}.staticflickr.com/${x.server}/${x.id}_${x.secret}.jpg`} open_link={(e)=>handleOpen(e)}  />
          </div>
            
          ))}
        </div>
        
        <Footer />
      </>
    )
}

export default Dash