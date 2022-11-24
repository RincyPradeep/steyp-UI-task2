import React,{useEffect} from 'react'


function Contact({setActiveMenu}) {

  useEffect(()=>{
    setActiveMenu("contact")
  },[])

  return (
    <div>
        
        Contact
    </div>
  )
}

export default Contact