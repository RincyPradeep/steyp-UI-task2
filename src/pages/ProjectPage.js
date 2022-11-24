import React,{useEffect} from 'react'


function Projects({setActiveMenu}) {

  useEffect(()=>{
    setActiveMenu("projects")
  },[])

  return (
    <div>
         Projects
    </div>
  )
}

export default Projects