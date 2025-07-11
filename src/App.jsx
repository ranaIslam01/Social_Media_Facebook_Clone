import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

// Components
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Feed from './components/Feed'
import RightSidebar from './components/RightSidebar'
import Profile from './components/Profile'
import Login from './components/Login'
import Register from './components/Register'
import Events from './components/Events'
import Friends from './components/Friends'
import Memories from './components/Memories'
import Chat from './components/Chat'
import Settings from './components/Settings'
import Notifications from './components/Notifications'
import Stories from './components/Stories'
import Marketplace from './components/Marketplace'

export default function App() {
  const [user, setUser] = useState(null)
  const [darkMode, setDarkMode] = useState(false)
  const [loading, setLoading] = useState(true)

  // Check for saved theme preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'dark') {
      setDarkMode(true)
      document.documentElement.classList.add('dark')
    }
    
    // Simulate loading
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])

  // Update theme when darkMode changes
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [darkMode])

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-r from-primary-600 to-accent-500">
        <div className="text-center">
          <div className="w-20 h-20 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <h1 className="text-2xl font-bold text-white">Loading...</h1>
        </div>
      </div>
    )
  }

  return (
    <Router>
      <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-900 text-white' : 'bg-gray-50'}`}>
        {user ? (
          <>
            <Navbar user={user} setUser={setUser} darkMode={darkMode} setDarkMode={setDarkMode} />
            <div className='flex flex-col md:flex-row'>
              <Sidebar user={user} darkMode={darkMode} />
              <main className="flex-1 min-h-screen pt-16 md:pt-0 overflow-x-hidden">
                <Routes>
                  <Route path="/" element={<Feed user={user} darkMode={darkMode} />} />
                  <Route path="/profile/:id" element={<Profile darkMode={darkMode} />} />
                  <Route path="/friends" element={<Friends user={user} darkMode={darkMode} />} />
                  <Route path="/events" element={<Events user={user} darkMode={darkMode} />} />
                  <Route path="/memories" element={<Memories user={user} darkMode={darkMode} />} />
                  <Route path="/chat" element={<Chat user={user} darkMode={darkMode} />} />
                  <Route path="/chat/:id" element={<Chat user={user} darkMode={darkMode} />} />
                  <Route path="/notifications" element={<Notifications user={user} darkMode={darkMode} />} />
                  <Route path="/settings" element={<Settings user={user} darkMode={darkMode} setDarkMode={setDarkMode} />} />
                  <Route path="/stories" element={<Stories user={user} darkMode={darkMode} />} />
                  <Route path="/stories/:id" element={<Stories user={user} darkMode={darkMode} />} />
                  <Route path="/marketplace" element={<Marketplace user={user} darkMode={darkMode} />} />
                  <Route path="*" element={<Navigate to="/" />} />
                </Routes>
              </main>
              <RightSidebar darkMode={darkMode} />
            </div>
          </>
        ) : (
          <div className="animate-fade-in">
            <Routes>
              <Route path="/" element={<Login setUser={setUser} darkMode={darkMode} setDarkMode={setDarkMode} />} />
              <Route path="/register" element={<Register setUser={setUser} darkMode={darkMode} />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </div>
        )}
      </div>
    </Router>
  )
}
