import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Unmouting from './CourseComponents/ClassComponentLifeCycle/Unmounting'


function App() {
  const name = "4twin2"
  const etudiant ={
    nom : "mohamed",
    prenom : "ben ali",
    age :20
  }
  const tab= [1,2,5,9,89,76]
  return (
    <>
    {/* <ClassComponent name="oumeima"/>
    <FunctionalComponent name="oumeima"/>
    <Methods /> */}
    {/* <Mounting /> */}
    <Unmouting />
        <img src={reactLogo} alt="react logo" width="100" height="100"/>
      <h1>hello from {name}</h1>
       <p>le contenu de l'objet est = {etudiant.nom}</p>
       {/* <ul>
        {tab.map( e=> {
          return <li>{e}</li>
        })}
       </ul> */}
    </>
  )
}

export default App
