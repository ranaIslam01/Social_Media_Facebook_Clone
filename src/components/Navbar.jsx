import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar({ user, darkMode, setDarkMode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false)
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false)
  const location = useLocation()
  
  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }
  
  const isActive = (path) => {
    return location.pathname === path
  }
  
  // Mock notifications data
  const notifications = [
    {
      id: 1,
      user: { name: "Ruhul Islam", profilePicture: "https://randomuser.me/api/portraits/men/32.jpg" },
      content: "liked your post",
      time: "2 minutes ago",
      read: false
    },
    {
      id: 2,
      user: { name: "Rakib Hassan", profilePicture: "https://randomuser.me/api/portraits/men/41.jpg" },
      content: "commented on your photo",
      time: "1 hour ago",
      read: false
    },
    {
      id: 3,
      user: { name: "Shuvo Ahmed", profilePicture: "https://randomuser.me/api/portraits/men/55.jpg" },
      content: "sent you a friend request",
      time: "3 hours ago",
      read: true
    }
  ]
  
  const handleLogout = () => {
    // In a real app, you would implement proper logout functionality
    console.log("Logging out...")
  }

  return (
    <nav className={`fixed top-0 inset-x-0 z-50 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} shadow-md`}>
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          {/* Mobile menu button */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button 
              type="button" 
              className={`inline-flex items-center justify-center p-2 rounded-md ${darkMode ? 'text-gray-400 hover:text-white hover:bg-gray-700' : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
          
          {/* Logo and desktop navigation */}
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="text-xl font-bold">
                SocialApp
              </Link>
            </div>
            
            {/* Desktop navigation */}
            <div className="hidden sm:ml-6 sm:flex sm:space-x-4">
              <Link 
                to="/" 
                className={`md:hidden px-3 py-2 rounded-md text-sm font-medium ${
                  isActive('/') 
                    ? (darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900') 
                    : (darkMode ? 'text-gray-300 hover:bg-gray-700 hover:text-white' : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900')
                }`}
              >
                Home
              </Link>
              <Link 
                to="/friends" 
                className={`md:hidden px-3 py-2 rounded-md text-sm font-medium ${
                  isActive('/friends') 
                    ? (darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900') 
                    : (darkMode ? 'text-gray-300 hover:bg-gray-700 hover:text-white' : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900')
                }`}
              >
                Friends
              </Link>
              <Link 
                to="/messages" 
                className={`md:hidden px-3 py-2 rounded-md text-sm font-medium ${
                  isActive('/messages') 
                    ? (darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900') 
                    : (darkMode ? 'text-gray-300 hover:bg-gray-700 hover:text-white' : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900')
                }`}
              >
                Messages
              </Link>
              <Link 
                to={`/profile/${user?.id}`} 
                className={`md:hidden px-3 py-2 rounded-md text-sm font-medium ${
                  location.pathname.includes('/profile') 
                    ? (darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900') 
                    : (darkMode ? 'text-gray-300 hover:bg-gray-700 hover:text-white' : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900')
                }`}
              >
                Profile
              </Link>
            </div>
          </div>
          
          {/* Search bar */}
          <div className="hidden md:block flex-1 max-w-xs mx-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className={`h-5 w-5 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search..."
                className={`block w-full pl-10 pr-3 py-2 border rounded-full text-sm ${
                  darkMode 
                    ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-blue-500' 
                    : 'bg-gray-100 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500'
                } focus:outline-none focus:ring-1 focus:ring-blue-500`}
              />
            </div>
          </div>
          
          {/* Right side icons */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {/* Dark mode toggle */}
            <button
              type="button"
              onClick={toggleDarkMode}
              className={`p-1 rounded-full ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'}`}
            >
              <span className="sr-only">Toggle dark mode</span>
              {darkMode ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
            
            {/* Notifications dropdown */}
            <div className="ml-3 relative">
              <button
                type="button"
                className={`p-1 rounded-full ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'} focus:outline-none`}
                onClick={() => {
                  setIsNotificationsOpen(!isNotificationsOpen)
                  setIsProfileMenuOpen(false)
                }}
              >
                <span className="sr-only">View notifications</span>
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                {notifications.some(n => !n.read) && (
                  <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500"></span>
                )}
              </button>
              
              {isNotificationsOpen && (
                <div 
                  className={`origin-top-right absolute right-0 mt-2 w-80 rounded-md shadow-lg py-1 ${darkMode ? 'bg-gray-800' : 'bg-white'} ring-1 ring-black ring-opacity-5 focus:outline-none`}
                >
                  <div className="px-4 py-2 border-b border-gray-200 dark:border-gray-700">
                    <h3 className="text-sm font-medium">Notifications</h3>
                  </div>
                  <div className="max-h-96 overflow-y-auto">
                    {notifications.length > 0 ? (
                      notifications.map(notification => (
                        <div 
                          key={notification.id} 
                          className={`px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 ${notification.read ? '' : (darkMode ? 'bg-gray-700' : 'bg-blue-50')}`}
                        >
                          <div className="flex items-start">
                            <img 
                              src={notification.user.profilePicture} 
                              alt={notification.user.name} 
                              className="h-10 w-10 rounded-full mr-3" 
                            />
                            <div className="flex-1 min-w-0">
                              <p className={`text-sm font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                <span className="font-semibold">{notification.user.name}</span> {notification.content}
                              </p>
                              <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                                {notification.time}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="px-4 py-6 text-center text-sm text-gray-500">
                        No notifications yet
                      </div>
                    )}
                  </div>
                  <div className="px-4 py-2 border-t border-gray-200 dark:border-gray-700">
                    <Link to="/notifications" className="text-xs font-medium text-blue-500 hover:text-blue-600">
                      See all notifications
                    </Link>
                  </div>
                </div>
              )}
            </div>
            
            {/* Profile dropdown */}
            <div className="ml-3 relative">
              <div>
                <button
                  type="button"
                  className="flex text-sm rounded-full focus:outline-none"
                  onClick={() => {
                    setIsProfileMenuOpen(!isProfileMenuOpen)
                    setIsNotificationsOpen(false)
                  }}
                >
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="h-8 w-8 rounded-full"
                    src={user?.profilePicture || "https://ui-avatars.com/api/?name=User&background=random"}
                    alt={user?.name || "User"}
                  />
                </button>
              </div>
              
              {isProfileMenuOpen && (
                <div 
                  className={`origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 ${darkMode ? 'bg-gray-800' : 'bg-white'} ring-1 ring-black ring-opacity-5 focus:outline-none`}
                >
                  <div className="px-4 py-2 border-b border-gray-200 dark:border-gray-700">
                    <p className={`text-sm font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>{user?.name || "User"}</p>
                    <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{user?.email || "user@example.com"}</p>
                  </div>
                  <Link
                    to={`/profile/${user?.id}`}
                    className={`block px-4 py-2 text-sm ${darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'}`}
                  >
                    Your Profile
                  </Link>
                  <Link
                    to="/settings"
                    className={`block px-4 py-2 text-sm ${darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'}`}
                  >
                    Settings
                  </Link>
                  <button
                    onClick={handleLogout}
                    className={`block w-full text-left px-4 py-2 text-sm ${darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'}`}
                  >
                    Sign out
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="sm:hidden">
          <div className={`px-2 pt-2 pb-3 space-y-1 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
            <Link
              to="/"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive('/') 
                  ? (darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900') 
                  : (darkMode ? 'text-gray-300 hover:bg-gray-700 hover:text-white' : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900')
              }`}
            >
              Home
            </Link>
            <Link
              to="/friends"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive('/friends') 
                  ? (darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900') 
                  : (darkMode ? 'text-gray-300 hover:bg-gray-700 hover:text-white' : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900')
              }`}
            >
              Friends
            </Link>
            <Link
              to="/messages"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive('/messages') 
                  ? (darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900') 
                  : (darkMode ? 'text-gray-300 hover:bg-gray-700 hover:text-white' : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900')
              }`}
            >
              Messages
            </Link>
            <Link
              to={`/profile/${user?.id}`}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive('/profile') 
                  ? (darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900') 
                  : (darkMode ? 'text-gray-300 hover:bg-gray-700 hover:text-white' : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900')
              }`}
            >
              Profile
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
} 