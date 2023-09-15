import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { CreateContainer, Header, MainContainer } from './components';

export default function App() {
  return (
    <div className='flex flex-col w-screen h-auto bg-gray-100'>
     <Header/>
    <main className='w-full p-8 mt-20'>
      <Routes>
        <Route path="/#" element={<MainContainer/>}/>
        <Route path="/createItems" element={<CreateContainer/>}/>
      </Routes>
    </main>
    </div>
  )
}
