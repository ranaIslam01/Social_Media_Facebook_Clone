import React, { useState } from 'react'

export default function Notifications({ user, darkMode }) {
  const [activeTab, setActiveTab] = useState('all')
  
  const notifications = [
    {
      id: 1,
      type: 'like',
      user: { id: 1, name: "Ruhul Islam", profilePicture: "https://randomuser.me/api/portraits/men/32.jpg" },
      content: "liked your post",
      time: "2 minutes ago",
      read: false
    },
    {
      id: 2,
      type: 'comment',
      user: { id: 2, name: "Rakib Hassan", profilePicture: "https://randomuser.me/api/portraits/men/41.jpg" },
      content: "commented on your photo: \"Great shot!\"",
      time: "1 hour ago",
      read: false
    },
    {
      id: 3,
      type: 'friend',
      user: { id: 3, name: "Shuvo Ahmed", profilePicture: "https://randomuser.me/api/portraits/men/55.jpg" },
      content: "accepted your friend request",
      time: "3 hours ago",
      read: true
    },
    {
      id: 4,
      type: 'mention',
      user: { id: 4, name: "Rayhan Khan", profilePicture: "https://randomuser.me/api/portraits/men/22.jpg" },
      content: "mentioned you in a comment",
      time: "Yesterday",
      read: true
    },
    {
      id: 5,
      type: 'event',
      user: { id: 5, name: "Sifat Rahman", profilePicture: "https://randomuser.me/api/portraits/men/36.jpg" },
      content: "invited you to an event: \"Tech Meetup in Dinajpur\"",
      time: "2 days ago",
      read: true
    }
  ]
  
  const getIcon = (type) => {
    switch(type) {
      case 'like':
        return (
          <div className="bg-red-100 p-2 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
        )
      case 'comment':
        return (
          <div className="bg-blue-100 p-2 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>
        )
      case 'friend':
        return (
          <div className="bg-green-100 p-2 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
        )
      case 'mention':
        return (
          <div className="bg-purple-100 p-2 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
            </svg>
          </div>
        )
      case 'event':
        return (
          <div className="bg-yellow-100 p-2 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        )
      default:
        return null
    }
  }
  
  const filteredNotifications = activeTab === 'all' 
    ? notifications 
    : activeTab === 'unread' 
      ? notifications.filter(n => !n.read) 
      : notifications.filter(n => n.read)
  
  return (
    <div className={`flex-1 max-w-4xl mx-auto py-8 px-4 ${darkMode ? 'text-white' : ''}`}>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Notifications</h1>
        <button className={`px-4 py-2 rounded-lg ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'}`}>
          Mark all as read
        </button>
      </div>
      
      <div className={`bg-white shadow-md rounded-lg mb-6 ${darkMode ? 'bg-gray-800' : ''}`}>
        <div className="flex border-b overflow-x-auto">
          <button 
            className={`px-4 py-3 font-medium whitespace-nowrap ${activeTab === 'all' ? (darkMode ? 'text-blue-400 border-b-2 border-blue-400' : 'text-blue-500 border-b-2 border-blue-500') : 'text-gray-500 hover:bg-gray-50'}`}
            onClick={() => setActiveTab('all')}
          >
            All
          </button>
          <button 
            className={`px-4 py-3 font-medium whitespace-nowrap ${activeTab === 'unread' ? (darkMode ? 'text-blue-400 border-b-2 border-blue-400' : 'text-blue-500 border-b-2 border-blue-500') : 'text-gray-500 hover:bg-gray-50'}`}
            onClick={() => setActiveTab('unread')}
          >
            Unread
          </button>
          <button 
            className={`px-4 py-3 font-medium whitespace-nowrap ${activeTab === 'read' ? (darkMode ? 'text-blue-400 border-b-2 border-blue-400' : 'text-blue-500 border-b-2 border-blue-500') : 'text-gray-500 hover:bg-gray-50'}`}
            onClick={() => setActiveTab('read')}
          >
            Read
          </button>
        </div>
      </div>
      
      <div className="space-y-4">
        {filteredNotifications.map(notification => (
          <div 
            key={notification.id} 
            className={`p-4 rounded-lg shadow-md ${notification.read ? '' : 'border-l-4 border-blue-500'} ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
          >
            <div className="flex">
              <div className="mr-4">
                {getIcon(notification.type)}
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center">
                      <img 
                        src={notification.user.profilePicture} 
                        alt={notification.user.name} 
                        className="w-8 h-8 rounded-full mr-2" 
                      />
                      <span className="font-medium">{notification.user.name}</span>
                    </div>
                    <p className="mt-1">{notification.content}</p>
                    <p className="text-sm text-gray-500 mt-1">{notification.time}</p>
                  </div>
                  <button className={`p-1 rounded-full ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 