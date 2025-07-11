import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

export default function Stories({ user, darkMode }) {
  const { id } = useParams()
  const navigate = useNavigate()
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0)
  const [progress, setProgress] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  
  // Mock stories data
  const stories = [
    {
      id: 1,
      user: { id: 1, name: "Ruhul Islam", profilePicture: "https://randomuser.me/api/portraits/men/32.jpg" },
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      time: "2 hours ago"
    },
    {
      id: 2,
      user: { id: 2, name: "Rakib Hassan", profilePicture: "https://randomuser.me/api/portraits/men/41.jpg" },
      image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      time: "5 hours ago"
    },
    {
      id: 3,
      user: { id: 3, name: "Shuvo Ahmed", profilePicture: "https://randomuser.me/api/portraits/men/55.jpg" },
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      time: "8 hours ago"
    },
    {
      id: 4,
      user: { id: 4, name: "Rayhan Khan", profilePicture: "https://randomuser.me/api/portraits/men/22.jpg" },
      image: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      time: "12 hours ago"
    },
    {
      id: 5,
      user: { id: 5, name: "Sifat Rahman", profilePicture: "https://randomuser.me/api/portraits/men/36.jpg" },
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      time: "1 day ago"
    }
  ]
  
  // User's own stories
  const myStories = [
    {
      id: 101,
      user: { id: user?.id || 0, name: user?.name || "You", profilePicture: user?.profilePicture || "https://randomuser.me/api/portraits/men/1.jpg" },
      image: "https://images.unsplash.com/photo-1682687220063-4742bd7fd538?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      time: "Just now"
    }
  ]
  
  const allStories = [...myStories, ...stories]
  
  // Find current story based on ID from URL
  const currentStoryId = id ? parseInt(id) : null
  const currentStoryUserIndex = currentStoryId ? allStories.findIndex(story => story.id === currentStoryId) : -1
  
  useEffect(() => {
    if (currentStoryId && currentStoryUserIndex >= 0) {
      setCurrentStoryIndex(0)
    }
  }, [currentStoryId, currentStoryUserIndex])
  
  useEffect(() => {
    if (!id) return
    
    let interval
    if (!isPaused) {
      interval = setInterval(() => {
        if (progress < 100) {
          setProgress(prev => prev + 1)
        } else {
          // Move to next story or next user's stories
          setProgress(0)
          navigate(`/stories/${allStories[(currentStoryUserIndex + 1) % allStories.length].id}`)
        }
      }, 50) // 5 seconds total (50ms * 100)
    }
    
    return () => clearInterval(interval)
  }, [progress, isPaused, id, currentStoryUserIndex, navigate, allStories])
  
  const handlePrevStory = () => {
    if (currentStoryUserIndex > 0) {
      setProgress(0)
      navigate(`/stories/${allStories[currentStoryUserIndex - 1].id}`)
    }
  }
  
  const handleNextStory = () => {
    if (currentStoryUserIndex < allStories.length - 1) {
      setProgress(0)
      navigate(`/stories/${allStories[currentStoryUserIndex + 1].id}`)
    } else {
      // If last story, go back to feed
      navigate('/')
    }
  }
  
  const handleClose = () => {
    navigate('/')
  }
  
  return (
    <div className={`${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      {id ? (
        // Story viewer
        <div className="fixed inset-0 bg-black flex items-center justify-center">
          {/* Story header */}
          <div className="absolute top-0 left-0 right-0 p-4 z-10">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img 
                  src={allStories[currentStoryUserIndex]?.user.profilePicture} 
                  alt={allStories[currentStoryUserIndex]?.user.name} 
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
                <div className="ml-3 text-white">
                  <p className="font-semibold">{allStories[currentStoryUserIndex]?.user.name}</p>
                  <p className="text-xs opacity-80">{allStories[currentStoryUserIndex]?.time}</p>
                </div>
              </div>
              <button 
                className="text-white p-2"
                onClick={() => navigate('/stories')}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Progress bar */}
            <div className="w-full h-1 bg-gray-600 mt-4 rounded-full overflow-hidden">
              <div 
                className="h-full bg-white"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
          
          {/* Navigation buttons */}
          <button 
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full p-2"
            onClick={handlePrevStory}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full p-2"
            onClick={handleNextStory}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          {/* Story image */}
          <img 
            src={allStories[currentStoryUserIndex]?.image} 
            alt="Story" 
            className="max-h-screen max-w-full object-contain"
          />
        </div>
      ) : (
        // Stories list
        <div className={`max-w-4xl mx-auto py-8 px-4 ${darkMode ? 'text-white' : ''}`}>
          <h1 className="text-2xl font-bold mb-6">Stories</h1>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {/* Create story card */}
            <div className={`relative rounded-lg overflow-hidden shadow-md ${darkMode ? 'bg-gray-800' : 'bg-white'} h-80`}>
              <div className="h-3/4 bg-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center mx-auto mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </div>
                  <p className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Create Story</p>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="flex items-center">
                  <img 
                    src={user?.profilePicture || "https://randomuser.me/api/portraits/men/1.jpg"} 
                    alt={user?.name || "You"} 
                    className="w-10 h-10 rounded-full border-4 border-blue-500"
                  />
                  <p className="ml-2 font-medium">Create Story</p>
                </div>
              </div>
            </div>
            
            {/* Story cards */}
            {allStories.map(story => (
              <div 
                key={story.id} 
                className="relative rounded-lg overflow-hidden shadow-md h-80 cursor-pointer"
                onClick={() => navigate(`/stories/${story.id}`)}
              >
                <img 
                  src={story.image} 
                  alt={story.user.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70"></div>
                <div className="absolute top-4 left-4">
                  <div className="w-10 h-10 rounded-full border-2 border-blue-500 overflow-hidden">
                    <img 
                      src={story.user.profilePicture} 
                      alt={story.user.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-medium">{story.user.name}</p>
                  <p className="text-gray-300 text-sm">{story.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
} 