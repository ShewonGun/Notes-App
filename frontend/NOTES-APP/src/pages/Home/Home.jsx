import React from 'react'
import Navbar from '../../components/Navbar/Navbar.jsx'
import NoteCard from '../../components/Cards/NoteCard.jsx'

const Home = () => {
  return (
    <>
      <Navbar />

      <div className='container mx-auto'>
        <NoteCard title="Meeting on 7th April" 
        date="3rd Apr 2024" 
        content="Meeting on 7th April Meeting on 7th April"
        tags="#Meeting"
        isPinned={true}
        onEdit={()=>{}}
        onDelete={()=>{}}
        onPinNote={()=>{}}
        />
      </div>
    </>
  )
}

export default Home