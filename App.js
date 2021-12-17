import React from 'react'
import ProfileScreen from './app/screens/ProfileScreen'
import AppTabNavigation from './app/navigations/AppTabNavigation'
import DrawerNavigation from './app/navigations/DrawerNavigation'
import AppCard from './components/AppCard'

export default function App() {
  return <AppCard 
  title="Posting"
  experience="Senior Associate"
  description="Something about law work here in this box"
  hours="4"/>
}
