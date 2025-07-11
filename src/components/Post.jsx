import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Post({ post, darkMode }) {
  const [liked, setLiked] = useState(false)
  const [likes, setLikes] = useState(post.likes)
  const [showComments, setShowComments] = useState(false)
  const [comment, setComment] = useState("")
  const [comments, setComments] = useState([
    {
      id: 1,
      user: {
        id: 3,
        name: "Alex Johnson",
        profilePicture: "https://via.placeholder.com/40"
      },
      text: "Great post! Thanks for sharing.",
      timestamp: "1 hour ago"
    }
  ])
  
  const handleLike = () => {
    if (liked) {
      setLikes(likes - 1)
    } else {
      setLikes(likes + 1)
    }
    setLiked(!liked)
  }
  
  const handleComment = (e) => {
    e.preventDefault()
    if (!comment.trim()) return
    
    const newComment = {
      id: comments.length + 1,
      user: {
        id: 1, // Current user ID
        name: "Current User", // Current user name
        profilePicture: "https://via.placeholder.com/40"
      },
      text: comment,
      timestamp: "Just now"
    }
    
    setComments([...comments, newComment])
    setComment("")
  }
  
  return (
    <div className={`rounded-xl shadow-lg overflow-hidden border ${darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-200 text-black'}`}>
      {/* Post header */}
      <div className="p-4">
        <div className="flex items-center space-x-3">
          <img src={post.user.profilePicture} alt={post.user.name} className="w-10 h-10 rounded-full" />
          <div>
            <p className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>{post.user.name}</p>
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{post.timestamp}</p>
          </div>
        </div>
        
        {/* Post content */}
        <div className="mt-3">
          <p className={darkMode ? 'text-gray-300' : 'text-gray-800'}>{post.content}</p>
        </div>
        
        {/* Post image */}
        {post.image && (
          <div className="mt-3">
            <img src={post.image} alt="Post" className="w-full h-auto rounded-lg" />
          </div>
        )}
        
        {/* Post stats */}
        <div className={`mt-3 flex items-center justify-between ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
          <div className="flex items-center space-x-2">
            <div className="flex -space-x-1">
              <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                </svg>
              </div>
            </div>
            <span>{likes} likes</span>
          </div>
          <div>
            <span>{post.comments} comments</span>
          </div>
        </div>
        
        {/* Post actions */}
        <div className={`mt-3 pt-3 border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
          <div className="flex justify-between">
            <button 
              onClick={handleLike}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                liked 
                  ? 'text-blue-500' 
                  : darkMode ? 'text-gray-400 hover:bg-gray-700' : 'text-gray-500 hover:bg-gray-100'
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill={liked ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={liked ? 0 : 2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
              </svg>
              <span>Like</span>
            </button>
            
            <button 
              onClick={() => setShowComments(!showComments)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                darkMode ? 'text-gray-400 hover:bg-gray-700' : 'text-gray-500 hover:bg-gray-100'
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <span>Comment</span>
            </button>
            
            <button 
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                darkMode ? 'text-gray-400 hover:bg-gray-700' : 'text-gray-500 hover:bg-gray-100'
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
              <span>Share</span>
            </button>
          </div>
        </div>
        
        {/* Comments section */}
        {showComments && (
          <div className={`mt-4 pt-4 border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
            <div className="flex space-x-3">
              <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="User" className="w-8 h-8 rounded-full" />
              <div className={`flex-1 p-3 rounded-lg ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-800'}`}>
                <p className="font-medium">Rana Islam</p>
                <p className="text-sm">Great post! Thanks for sharing this information.</p>
                <div className={`mt-2 text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  <span>1h ago</span>
                  <span className="mx-2">·</span>
                  <button className="font-medium">Like</button>
                  <span className="mx-2">·</span>
                  <button className="font-medium">Reply</button>
                </div>
              </div>
            </div>
            
            <div className="mt-4 flex space-x-3">
              <img src={post.user.profilePicture} alt="User" className="w-8 h-8 rounded-full" />
              <input 
                type="text" 
                placeholder="Write a comment..." 
                className={`flex-1 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                  darkMode 
                    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                    : 'bg-gray-100 border-gray-200 text-gray-900 placeholder-gray-500'
                }`}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  )
} 