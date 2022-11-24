import React,{useEffect} from 'react'


function Experience({setActiveMenu}) {

  useEffect(()=>{
    setActiveMenu("experience")
  },[])

  return (
    <div>
        Experience
    </div>
  )
}

export default Experience