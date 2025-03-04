import React,{ useState, useEffect, Suspense } from 'react'

import './App.css'
//import NoteManager from './ExerciceProps&State/NoteManager';
//import TodoList from './ExerciceProps&State/TodoList';
//import Events from './UseCase/Events';
const Events = React.lazy(()=>import('./UseCase/Events'));
import {Routes,Route,Link} from 'react-router-dom';
import NavigationBar from './UseCase/NavigationBar';
import AddEvent from './UseCase/AddEvent';
import UpdateEvent from './UseCase/UpdateEvent';
import CounterZustand from './CourseComponents/zustandExemples/CounterZustand';
import useCounterStore from './Zustand/counter_store';
import Cart from './CourseComponents/zustandExemples/Cart';


//import EventDetails from './UseCase/EventDetails';
const  EventDetails = React.lazy(()=>import('./UseCase/EventDetails'));
//import NotFound from './UseCase/NotFound';
const NotFound = React.lazy(()=>import('./UseCase/NotFound'));
//import ColorBox from './ExerciceProps&State/ColorBox';

function App() {
  const count  = useCounterStore((state)=> state.count);
 console.log(count);
  return (
    <>
    {/* <Events /> */}
    {/* <a href='/myapp/notemanager'>NoteManager</a> */}
    {/* <Link to="/myapp/notemanager" reloadDocument>NoteManager</Link> 
    <Link to="/myapp/todolist">TodoList</Link>
    <Link to="/myapp/colorbox" replace>ColorBox</Link> */}
    <NavigationBar/>
   <Suspense fallback={<h1>Loading...</h1>} >
    <Routes >
      {/* <Route path="/myapp"> */}
        {/* <Route path="notemanager/:classe/:param2" element={ <NoteManager initialNotes={[10, 15, 20]} />} /> */}
        {/* <Route path="notemanager" element={ <NoteManager initialNotes={[10, 15, 20]} />} />
        <Route path="todolist" element={<TodoList initialTodos={[{ name: "Faire les courses", priority: "Haute", done: false }]} />} />
      <Route path="colorbox" element={<ColorBox initialColor="red" />} />
    
      </Route>

      <Route  path="*" element={<h1>404 Not found</h1>} /> */}
      <Route path="/cart" element={<Cart />} />
    <Route path="/counterzustand" element={<CounterZustand />} />
      <Route path='/events'>
            <Route index element={<Events />} />
            <Route path=':name' element={<EventDetails />} />
            <Route path='/events/add' element={<AddEvent/>}/>
            <Route path='/events/update/:id' element={<UpdateEvent/>}/>
      </Route>
      <Route path='*' element={<NotFound />} />
    </Routes>
  
   </Suspense>
    </>
  )
}

export default App
