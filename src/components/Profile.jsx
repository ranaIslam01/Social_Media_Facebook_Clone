import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Post from './Post'

export default function Profile({ darkMode }) {
  const { id } = useParams()
  const [activeTab, setActiveTab] = useState('posts')
  const [isFollowing, setIsFollowing] = useState(false)
  
  // Mock user data - in a real app, you would fetch this based on the id
  const [user] = useState({
    id: id,
    name: "Rana Islam",
    profilePicture: "https://ui-avatars.com/api/?name=Rana+Islam&background=random",
    coverPhoto: "https://images.unsplash.com/photo-1500964757637-c85e8a162699?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    bio: "Web Developer | Photography Enthusiast | Travel Lover",
    location: "Dinajpur Sadar, Bangladesh",
    workplace: "Freelance Web Developer",
    education: "Thakurgaon Polytechnic Institue",
    phone: "01873488443",
    followers: 1250,
    following: 420
  })
  
  // Mock posts data
  const [posts] = useState([
    {
      id: 1,
      user: {
        id: id,
        name: user.name,
        profilePicture: user.profilePicture
      },
      content: "Just finished working on a new project! #webdevelopment #react",
      image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      likes: 45,
      comments: 12,
      timestamp: "2 days ago"
    },
    {
      id: 2,
      user: {
        id: id,
        name: user.name,
        profilePicture: user.profilePicture
      },
      content: "Beautiful sunset today in Dinajpur! 🌅",
      image: "https://images.unsplash.com/photo-1472120435266-53107fd0c44a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      likes: 72,
      comments: 8,
      timestamp: "1 week ago"
    }
  ])

  // Mock photos data
  const photos = [
    "https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1472120435266-53107fd0c44a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80"
  ]

  // Mock friends data
  const friends = [
    { id: 1, name: "Ruhul Islam", profilePicture: "https://randomuser.me/api/portraits/men/32.jpg" },
    { id: 2, name: "Anika Rahman", profilePicture: "https://randomuser.me/api/portraits/women/44.jpg" },
    { id: 3, name: "Kamal Hossain", profilePicture: "https://randomuser.me/api/portraits/men/41.jpg" },
    { id: 4, name: "Sadia Akter", profilePicture: "https://randomuser.me/api/portraits/women/33.jpg" },
    { id: 5, name: "Rayhan Khan", profilePicture: "https://randomuser.me/api/portraits/men/22.jpg" },
    { id: 6, name: "Nusrat Jahan", profilePicture: "https://randomuser.me/api/portraits/women/66.jpg" }
  ]
  
  const toggleFollow = () => {
    setIsFollowing(!isFollowing)
  }
  
  return (
    <div className={`mt-12 flex-1 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50'}`}>
      {/* Cover Photo */}
      <div className="relative">
        <div className="h-48 md:h-64 lg:h-80 overflow-hidden">
          <img 
            src={user.coverPhoto} 
            alt="Cover" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Profile info */}
        <div className="absolute bottom-0 left-0 right-0 transform translate-y-1/2 px-4">
          <div className="flex flex-col md:flex-row items-center max-w-5xl mx-auto">
            <img 
              src={user.profilePicture} 
              alt={user.name} 
              className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white"
            />
            <div className="mt-4 md:mt-0 md:ml-6 text-center md:text-left">
              <h1 className="text-2xl md:text-3xl font-bold">{user.name}</h1>
              <p className="text-gray-600 dark:text-gray-400">{user.bio}</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Profile Info */}
      <div className="mt-20 px-4 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold">{user.name}</h1>
            <p className={`mt-1 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{user.bio}</p>
          </div>
          <div className="mt-4 sm:mt-0 flex space-x-2">
            <button 
              onClick={toggleFollow}
              className={`px-4 py-2 rounded-lg font-medium flex items-center ${
                isFollowing 
                  ? (darkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-800') 
                  : 'bg-blue-500 text-white hover:bg-blue-600'
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isFollowing ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                )}
              </svg>
              {isFollowing ? 'Following' : 'Follow'}
            </button>
            <button className={`px-4 py-2 rounded-lg font-medium flex items-center ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'}`}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Message
            </button>
          </div>
        </div>
        
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left column - Info */}
          <div className="md:col-span-1 space-y-6">
            <div className={`rounded-lg shadow-md p-4 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <h2 className="text-lg font-semibold mb-4">About</h2>
              <div className="space-y-3">
                {user.location && (
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{user.location}</span>
                  </div>
                )}
                {user.workplace && (
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>{user.workplace}</span>
                  </div>
                )}
                {user.education && (
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                    </svg>
                    <span>{user.education}</span>
                  </div>
                )}
                {user.phone && (
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>{user.phone}</span>
                  </div>
                )}
              </div>
              <div className="flex space-x-4 mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 text-sm">
                <span><strong>{user.followers.toLocaleString()}</strong> followers</span>
                <span><strong>{user.following.toLocaleString()}</strong> following</span>
              </div>
            </div>
            
            <div className={`rounded-lg shadow-md p-4 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Photos</h2>
                <a href="#" className="text-blue-500 text-sm hover:underline">See All</a>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {photos.slice(0, 6).map((photo, index) => (
                  <a key={index} href="#" className="block">
                    <img src={photo} alt={`Photo ${index + 1}`} className="w-full h-24 object-cover rounded-lg" />
                  </a>
                ))}
              </div>
            </div>
            
            <div className={`rounded-lg shadow-md p-4 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Friends</h2>
                <a href="#" className="text-blue-500 text-sm hover:underline">See All</a>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {friends.slice(0, 6).map((friend) => (
                  <a key={friend.id} href="#" className="block text-center">
                    <img src={friend.profilePicture} alt={friend.name} className="w-full h-20 object-cover rounded-lg" />
                    <p className="mt-1 text-sm truncate">{friend.name}</p>
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right column - Posts */}
          <div className="md:col-span-2 space-y-6">
            {/* Tabs */}
            <div className={`rounded-lg shadow-md ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <div className="flex border-b overflow-x-auto dark:border-gray-700">
                <button 
                  onClick={() => setActiveTab('posts')}
                  className={`px-4 py-3 font-medium whitespace-nowrap ${
                    activeTab === 'posts' 
                      ? (darkMode ? 'text-blue-400 border-b-2 border-blue-400' : 'text-blue-500 border-b-2 border-blue-500') 
                      : (darkMode ? 'text-gray-400 hover:bg-gray-700' : 'text-gray-500 hover:bg-gray-50')
                  }`}
                >
                  Posts
                </button>
                <button 
                  onClick={() => setActiveTab('about')}
                  className={`px-4 py-3 font-medium whitespace-nowrap ${
                    activeTab === 'about' 
                      ? (darkMode ? 'text-blue-400 border-b-2 border-blue-400' : 'text-blue-500 border-b-2 border-blue-500') 
                      : (darkMode ? 'text-gray-400 hover:bg-gray-700' : 'text-gray-500 hover:bg-gray-50')
                  }`}
                >
                  About
                </button>
                <button 
                  onClick={() => setActiveTab('friends')}
                  className={`px-4 py-3 font-medium whitespace-nowrap ${
                    activeTab === 'friends' 
                      ? (darkMode ? 'text-blue-400 border-b-2 border-blue-400' : 'text-blue-500 border-b-2 border-blue-500') 
                      : (darkMode ? 'text-gray-400 hover:bg-gray-700' : 'text-gray-500 hover:bg-gray-50')
                  }`}
                >
                  Friends
                </button>
                <button 
                  onClick={() => setActiveTab('photos')}
                  className={`px-4 py-3 font-medium whitespace-nowrap ${
                    activeTab === 'photos' 
                      ? (darkMode ? 'text-blue-400 border-b-2 border-blue-400' : 'text-blue-500 border-b-2 border-blue-500') 
                      : (darkMode ? 'text-gray-400 hover:bg-gray-700' : 'text-gray-500 hover:bg-gray-50')
                  }`}
                >
                  Photos
                </button>
              </div>
            </div>
            
            {/* Create Post */}
            <div className={`rounded-lg shadow-md p-4 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <div className="flex space-x-3">
                <img src={user.profilePicture} alt={user.name} className="w-10 h-10 rounded-full" />
                <input 
                  type="text" 
                  placeholder="What's on your mind?" 
                  className={`flex-1 rounded-full px-4 py-2 ${
                    darkMode 
                      ? 'bg-gray-700 text-white placeholder-gray-400 border-gray-600' 
                      : 'bg-gray-100 border-gray-200'
                  }`}
                />
              </div>
              <div className="flex mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
                <button className="flex-1 flex items-center justify-center space-x-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  <span className="hidden sm:inline">Live Video</span>
                </button>
                <button className="flex-1 flex items-center justify-center space-x-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="hidden sm:inline">Photo/Video</span>
                </button>
                <button className="flex-1 flex items-center justify-center space-x-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="hidden sm:inline">Feeling/Activity</span>
                </button>
              </div>
            </div>
            
            {/* Posts */}
            <div className="space-y-6">
              {posts.map(post => (
                <Post key={post.id} post={post} darkMode={darkMode} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 