import { useState, useEffect } from 'react'

import './App.css'
import NoteManager from './ExerciceProps&State/NoteManager';
import TodoList from './ExerciceProps&State/TodoList';
import Events from './UseCase/Events';

function App() {
  
 
  return (
    <>
    <Events />
    {/* <NoteManager initialNotes={[10, 15, 20]} />
    <TodoList initialTodos={[{ name: "Faire les courses", priority: "Haute", done: false }]} /> */}
    </>
  )
}

export default App
