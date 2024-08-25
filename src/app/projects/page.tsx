import React from 'react'
import Header from '../components/header/header'
import ProjectsCont from '../components/projectsCont/projectsCont'
import projectsBg from '../../../public/assets/projectsimg/projectsbg-red.png'

export default function page() {
  return (
    <div>
      <Header/>
        <ProjectsCont bgImg={projectsBg.src}/>
    </div>
  )
}
