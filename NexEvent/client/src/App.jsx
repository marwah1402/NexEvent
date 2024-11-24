import React from 'react'
import  Navbar  from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero' 
import LoginSignup from './Components/LoginSignup/LoginSignup'
import CreateEditEvent from './Components/CreateEditEvent/CreateEditEvent'
import ContactUs from './Components/ContactUs/ContactUs'
import EventList from './Components/EventList/EventList'
import EventDetails from './Components/EventDetails/EventDetails'
import GuestList from './Components/GuestList/GuestList'
import PhotoGallery from './Components/PhotoGallery/PhotoGallery'

const App = () => {
  return (
   <div>
    <Navbar/>
    <Hero/>
    <LoginSignup/>
    <CreateEditEvent/>
    <ContactUs/>
    <EventList/>
    <EventDetails/>
    <GuestList/>
    <PhotoGallery/>
   </div>
  )
}

export default App