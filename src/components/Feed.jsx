import React, { useState, useEffect } from 'react'
import Post from './Post'

export default function Feed({ user, darkMode }) {
  const [posts, setPosts] = useState([
    {
      id: 1,
      user: {
        id: 1,
        name: "John Doe",
        profilePicture: "https://randomuser.me/api/portraits/men/32.jpg"
      },
      content: "Just finished a great book! Would recommend to everyone.",
      image: "https://source.unsplash.com/random/600x400?book",
      likes: 24,
      comments: 5,
      timestamp: "2 hours ago"
    },
    {
      id: 2,
      user: {
        id: 2,
        name: "Jane Smith",
        profilePicture: "https://randomuser.me/api/portraits/women/44.jpg"
      },
      content: "Beautiful day for a hike! 🏔️",
      image: "https://source.unsplash.com/random/600x400?hiking",
      likes: 42,
      comments: 8,
      timestamp: "5 hours ago"
    },
    {
      id: 3,
      user: {
        id: 3,
        name: "Kamal Hossain",
        profilePicture: "https://randomuser.me/api/portraits/men/41.jpg"
      },
      content: "Just cooked an amazing dinner! Check out this recipe 🍲",
      image: "https://source.unsplash.com/random/600x400?food",
      likes: 35,
      comments: 12,
      timestamp: "8 hours ago"
    }
  ])
  
  const [loading, setLoading] = useState(false)
  const [newPost, setNewPost] = useState("")
  
  const handlePostSubmit = (e) => {
    e.preventDefault()
    if (!newPost.trim()) return
    
    const post = {
      id: posts.length + 1,
      user: {
        id: user.id,
        name: user.name,
        profilePicture: user.profilePicture
      },
      content: newPost,
      likes: 0,
      comments: 0,
      timestamp: "Just now"
    }
    
    setPosts([post, ...posts])
    setNewPost("")
  }
  
  return (
    <div className="max-w-2xl mx-auto px-4 py-6 md:py-8">
      {/* Stories section */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-6">
        {/* Story cards... */}
      </div>

      {/* Create post section */}
      <div className={`rounded-lg shadow-md p-4 mb-6 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="flex space-x-4">
          <img 
            src={user.profilePicture || "https://ui-avatars.com/api/?name=User&background=random"}
            alt="Profile" 
            className="w-10 h-10 rounded-full" 
          />
          <form onSubmit={handlePostSubmit} className="flex-1">
            <textarea
              value={newPost}
              onChange={(e) => setNewPost(e.target.value)}
              className={`w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                darkMode 
                  ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                  : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
              }`}
              placeholder={`What's on your mind, ${user.name}?`}
              rows="3"
            ></textarea>
            <div className="flex justify-between items-center mt-3">
              <div className="flex space-x-2">
                <button type="button" className={`flex items-center space-x-1 p-1 rounded ${
                  darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-500 hover:bg-gray-100'
                }`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>Photo</span>
                </button>
                <button type="button" className={`flex items-center space-x-1 p-1 rounded ${
                  darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-500 hover:bg-gray-100'
                }`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  <span>Video</span>
                </button>
              </div>
              <button 
                type="submit" 
                className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
                disabled={!newPost.trim()}
              >
                Post
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Posts */}
      <div className="space-y-6">
        {posts.map(post => (
          <Post key={post.id} post={post} darkMode={darkMode} />
        ))}
      </div>
    </div>
  )
} 