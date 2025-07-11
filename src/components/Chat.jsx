import React, { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'

export default function Chat({ user, darkMode }) {
  const { id } = useParams()
  const [message, setMessage] = useState('')
  const [activeChat, setActiveChat] = useState(id || null)
  const [showContacts, setShowContacts] = useState(!id)
  const messageEndRef = useRef(null)
  
  // Mock contacts data
  const contacts = [
    { id: 1, name: "Ruhul Islam", profilePicture: "https://randomuser.me/api/portraits/men/32.jpg", online: true, lastSeen: "Just now" },
    { id: 2, name: "Rakib Hassan", profilePicture: "https://randomuser.me/api/portraits/men/41.jpg", online: false, lastSeen: "2h ago" },
    { id: 3, name: "Shuvo Ahmed", profilePicture: "https://randomuser.me/api/portraits/men/55.jpg", online: true, lastSeen: "Just now" },
    { id: 4, name: "Rayhan Khan", profilePicture: "https://randomuser.me/api/portraits/men/22.jpg", online: false, lastSeen: "1d ago" },
    { id: 5, name: "Sifat Rahman", profilePicture: "https://randomuser.me/api/portraits/men/36.jpg", online: true, lastSeen: "Just now" }
  ]
  
  // Mock chat data
  const [chats, setChats] = useState({
    1: [
      { id: 1, sender: 1, text: "Hi Rana, how are you?", time: "10:30 AM" },
      { id: 2, sender: user?.id || 0, text: "I'm good, thanks! How about you?", time: "10:32 AM" },
      { id: 3, sender: 1, text: "Doing well. Are you coming to the tech meetup tomorrow?", time: "10:33 AM" },
      { id: 4, sender: user?.id || 0, text: "Yes, I'll be there. Looking forward to it!", time: "10:35 AM" }
    ],
    2: [
      { id: 1, sender: 2, text: "Hey, did you finish the project?", time: "Yesterday" },
      { id: 2, sender: user?.id || 0, text: "Almost done, just need to fix a few bugs.", time: "Yesterday" },
      { id: 3, sender: 2, text: "Great! Let me know when it's ready for review.", time: "Yesterday" }
    ],
    3: [
      { id: 1, sender: 3, text: "Are we meeting today?", time: "2 days ago" },
      { id: 2, sender: user?.id || 0, text: "Yes, at the usual place at 5 PM.", time: "2 days ago" },
      { id: 3, sender: 3, text: "Perfect, see you then!", time: "2 days ago" }
    ],
    4: [
      { id: 1, sender: 4, text: "Can you help me with the React assignment?", time: "1 week ago" },
      { id: 2, sender: user?.id || 0, text: "Sure, what are you struggling with?", time: "1 week ago" },
      { id: 3, sender: 4, text: "I'm having trouble with useEffect.", time: "1 week ago" },
      { id: 4, sender: user?.id || 0, text: "I can explain it to you. Let's meet tomorrow.", time: "1 week ago" }
    ],
    5: [
      { id: 1, sender: 5, text: "Did you see the new movie?", time: "2 weeks ago" },
      { id: 2, sender: user?.id || 0, text: "Not yet, is it good?", time: "2 weeks ago" },
      { id: 3, sender: 5, text: "It's amazing! We should go watch it together.", time: "2 weeks ago" },
      { id: 4, sender: user?.id || 0, text: "Sounds good! How about this weekend?", time: "2 weeks ago" },
      { id: 5, sender: 5, text: "Perfect! I'll book the tickets.", time: "2 weeks ago" }
    ]
  })
  
  // Update activeChat when URL param changes
  useEffect(() => {
    if (id) {
      setActiveChat(id)
      if (window.innerWidth < 768) {
        setShowContacts(false)
      }
    }
  }, [id])
  
  useEffect(() => {
    // Scroll to bottom of messages
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" })
    
    // On mobile, when a chat is selected, hide the contacts list
    if (activeChat && window.innerWidth < 768) {
      setShowContacts(false)
    }
  }, [activeChat, chats])
  
  const handleSendMessage = (e) => {
    e.preventDefault()
    
    if (!message.trim() || !activeChat) return
    
    const newMessage = {
      id: chats[activeChat].length + 1,
      sender: user?.id || 0,
      text: message,
      time: "Just now"
    }
    
    setChats({
      ...chats,
      [activeChat]: [...chats[activeChat], newMessage]
    })
    
    setMessage("")
  }
  
  const getContact = (contactId) => {
    return contacts.find(contact => contact.id === parseInt(contactId))
  }
  
  const toggleContacts = () => {
    setShowContacts(!showContacts)
  }
  
  return (
    <div className="md:mt-20 flex-1 max-w-7xl mx-auto pt-4 px-4 pb-16 md:pb-4">
      <div className={`flex flex-col h-[calc(100vh-120px)] rounded-lg shadow-lg overflow-hidden ${darkMode ? 'bg-gray-800 text-white' : 'bg-white'}`}>
        {/* Mobile header */}
        <div className="md:hidden flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
          {!showContacts && activeChat ? (
            <button 
              onClick={() => setShowContacts(true)}
              className="flex items-center text-blue-500"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to contacts
            </button>
          ) : (
            <h2 className="text-lg font-semibold">Messages</h2>
          )}
        </div>
        
        {/* Chat content */}
        <div className="flex flex-1 overflow-hidden">
          {/* Contacts sidebar - hide on mobile when chat is active */}
          {(showContacts || !activeChat) && (
            <div className="w-full md:w-80 border-r border-gray-200 dark:border-gray-700">
              <div className="p-4">
                <div className={`relative mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  <input
                    type="text"
                    placeholder="Search messages..."
                    className={`w-full py-2 pl-10 pr-4 rounded-full ${
                      darkMode 
                        ? 'bg-gray-700 border-gray-600 placeholder-gray-400' 
                        : 'bg-gray-100 border-gray-200 placeholder-gray-500'
                    } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  />
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                
                <div className="space-y-1">
                  {contacts.map(contact => (
                    <button
                      key={contact.id}
                      className={`w-full flex items-center p-3 rounded-lg transition-colors ${
                        activeChat === contact.id.toString()
                          ? (darkMode ? 'bg-gray-700' : 'bg-blue-50')
                          : (darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100')
                      }`}
                      onClick={() => {
                        setActiveChat(contact.id.toString())
                        if (window.innerWidth < 768) {
                          setShowContacts(false)
                        }
                      }}
                    >
                      <div className="relative flex-shrink-0">
                        <img src={contact.profilePicture} alt={contact.name} className="w-12 h-12 rounded-full" />
                        {contact.online && (
                          <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-gray-800"></span>
                        )}
                      </div>
                      <div className="ml-3 flex-1 text-left">
                        <div className="flex justify-between items-baseline">
                          <h3 className={`font-medium ${activeChat === contact.id.toString() ? 'text-blue-500' : ''}`}>{contact.name}</h3>
                          <span className="text-xs text-gray-500">{contact.lastSeen}</span>
                        </div>
                        <p className={`text-sm truncate ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                          {chats[contact.id] && chats[contact.id].length > 0
                            ? chats[contact.id][chats[contact.id].length - 1].text
                            : 'Start a conversation...'}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
          
          {/* Chat area - show on mobile when chat is active */}
          {(!showContacts || window.innerWidth >= 768) && activeChat && (
            <div className="flex-1 flex flex-col">
              {/* Chat header */}
              <div className={`flex items-center p-4 border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                <div className="flex items-center">
                  <div className="relative">
                    <img 
                      src={getContact(activeChat)?.profilePicture} 
                      alt={getContact(activeChat)?.name} 
                      className="w-10 h-10 rounded-full"
                    />
                    {getContact(activeChat)?.online && (
                      <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-gray-800"></span>
                    )}
                  </div>
                  <div className="ml-3">
                    <h3 className="font-medium">{getContact(activeChat)?.name}</h3>
                    <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      {getContact(activeChat)?.online ? 'Online' : getContact(activeChat)?.lastSeen}
                    </p>
                  </div>
                </div>
                <div className="ml-auto flex space-x-2">
                  <button className={`p-2 rounded-full ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </button>
                  <button className={`p-2 rounded-full ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </button>
                  <button className={`p-2 rounded-full ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                    </svg>
                  </button>
                </div>
              </div>
              
              {/* Messages */}
              <div className={`flex-1 p-4 overflow-y-auto ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
                {chats[activeChat]?.map(message => (
                  <div 
                    key={message.id} 
                    className={`mb-4 flex ${message.sender === (user?.id || 0) ? 'justify-end' : 'justify-start'}`}
                  >
                    {message.sender !== (user?.id || 0) && (
                      <img 
                        src={getContact(activeChat)?.profilePicture} 
                        alt={getContact(activeChat)?.name} 
                        className="w-8 h-8 rounded-full mr-2 self-end"
                      />
                    )}
                    <div className={`max-w-xs md:max-w-md lg:max-w-lg ${
                      message.sender === (user?.id || 0)
                        ? (darkMode ? 'bg-blue-600' : 'bg-blue-500 text-white')
                        : (darkMode ? 'bg-gray-700' : 'bg-white border border-gray-200')
                    } rounded-lg px-4 py-2 shadow`}>
                      <p>{message.text}</p>
                      <p className={`text-xs mt-1 ${
                        message.sender === (user?.id || 0)
                          ? 'text-blue-200'
                          : (darkMode ? 'text-gray-400' : 'text-gray-500')
                      }`}>{message.time}</p>
                    </div>
                  </div>
                ))}
                <div ref={messageEndRef} />
              </div>
              
              {/* Message input */}
              <div className={`p-4 border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                <form onSubmit={handleSendMessage} className="flex items-center">
                  <button type="button" className={`p-2 rounded-full ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </button>
                  <button type="button" className={`p-2 rounded-full ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                    </svg>
                  </button>
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type a message..."
                    className={`flex-1 mx-4 py-2 px-4 rounded-full ${darkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-gray-100 border-gray-200'} focus:outline-none`}
                  />
                  <button 
                    type="submit" 
                    className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={!message.trim() || !activeChat}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
} 