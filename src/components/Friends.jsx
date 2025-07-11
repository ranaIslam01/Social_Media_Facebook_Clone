import React, { useState } from 'react'

export default function Friends({ user, darkMode }) {
  const [activeTab, setActiveTab] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  
  const allFriends = [
    { id: 1, name: "Ruhul Islam", mutual: 15, profilePicture: "https://randomuser.me/api/portraits/men/32.jpg" },
    { id: 2, name: "Rakib Hassan", mutual: 8, profilePicture: "https://randomuser.me/api/portraits/men/41.jpg" },
    { id: 3, name: "Shuvo Ahmed", mutual: 12, profilePicture: "https://randomuser.me/api/portraits/men/55.jpg" },
    { id: 4, name: "Rayhan Khan", mutual: 5, profilePicture: "https://randomuser.me/api/portraits/men/22.jpg" },
    { id: 5, name: "Sifat Rahman", mutual: 20, profilePicture: "https://randomuser.me/api/portraits/men/36.jpg" },
    { id: 6, name: "Labib Hossain", mutual: 3, profilePicture: "https://randomuser.me/api/portraits/men/45.jpg" },
    { id: 7, name: "Nobodip Roy", mutual: 7, profilePicture: "https://randomuser.me/api/portraits/men/59.jpg" },
    { id: 8, name: "Jaman Ali", mutual: 10, profilePicture: "https://randomuser.me/api/portraits/men/62.jpg" },
    { id: 9, name: "Galib Hasan", mutual: 4, profilePicture: "https://randomuser.me/api/portraits/men/71.jpg" },
    { id: 10, name: "Nifat Mahmud", mutual: 9, profilePicture: "https://randomuser.me/api/portraits/men/81.jpg" }
  ]
  
  const suggestions = [
    { id: 11, name: "Karim Ahmed", mutual: 6, profilePicture: "https://randomuser.me/api/portraits/men/11.jpg" },
    { id: 12, name: "Fahim Rahman", mutual: 3, profilePicture: "https://randomuser.me/api/portraits/men/13.jpg" },
    { id: 13, name: "Tarek Aziz", mutual: 8, profilePicture: "https://randomuser.me/api/portraits/men/15.jpg" },
    { id: 14, name: "Imran Khan", mutual: 2, profilePicture: "https://randomuser.me/api/portraits/men/17.jpg" }
  ]
  
  const requests = [
    { id: 15, name: "Sajid Hossain", mutual: 4, profilePicture: "https://randomuser.me/api/portraits/men/19.jpg" },
    { id: 16, name: "Mahfuz Rahman", mutual: 7, profilePicture: "https://randomuser.me/api/portraits/men/21.jpg" }
  ]
  
  // Filter friends based on search query
  const filteredFriends = {
    all: allFriends.filter(friend => 
      friend.name.toLowerCase().includes(searchQuery.toLowerCase())
    ),
    suggestions: suggestions.filter(friend => 
      friend.name.toLowerCase().includes(searchQuery.toLowerCase())
    ),
    requests: requests.filter(friend => 
      friend.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }
  
  const renderFriendsList = (friends) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {friends.length > 0 ? (
        friends.map(friend => (
          <div key={friend.id} className={`rounded-lg shadow p-4 flex items-start ${darkMode ? 'bg-gray-800 text-white' : 'bg-white'}`}>
            <img src={friend.profilePicture} alt={friend.name} className="w-16 h-16 rounded-full mr-4" />
            <div className="flex-1">
              <h3 className="font-semibold">{friend.name}</h3>
              <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>{friend.mutual} mutual friends</p>
              <div className="mt-2 flex space-x-2">
                {activeTab === 'requests' ? (
                  <>
                    <button className="bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600">
                      Accept
                    </button>
                    <button className={`${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'} px-3 py-1 rounded text-sm hover:bg-gray-300`}>
                      Decline
                    </button>
                  </>
                ) : activeTab === 'suggestions' ? (
                  <button className="bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600">
                    Add Friend
                  </button>
                ) : (
                  <button className={`${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'} px-3 py-1 rounded text-sm hover:bg-gray-300`}>
                    Message
                  </button>
                )}
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className={`col-span-full text-center py-8 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-3 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <p className="text-lg font-medium">No results found</p>
          <p>Try a different search term</p>
        </div>
      )}
    </div>
  )

  return (
    <div className={`mt-12 flex-1 max-w-4xl mx-auto py-8 px-4 ${darkMode ? 'text-white' : ''}`}>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Friends</h1>
        <div className="relative">
          <input
            type="text"
            placeholder="Search friends"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={`pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300'
            }`}
          />
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>
      
      <div className={`shadow-md rounded-lg mb-6 overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="flex border-b overflow-x-auto scrollbar-hide">
          <button 
            className={`px-4 py-3 font-medium whitespace-nowrap ${
              activeTab === 'all' 
                ? `text-blue-500 border-b-2 border-blue-500 ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}` 
                : `${darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-500 hover:bg-gray-50'}`
            }`}
            onClick={() => setActiveTab('all')}
          >
            All Friends ({filteredFriends.all.length})
          </button>
          <button 
            className={`px-4 py-3 font-medium whitespace-nowrap ${
              activeTab === 'suggestions' 
                ? `text-blue-500 border-b-2 border-blue-500 ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}` 
                : `${darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-500 hover:bg-gray-50'}`
            }`}
            onClick={() => setActiveTab('suggestions')}
          >
            Suggestions ({filteredFriends.suggestions.length})
          </button>
          <button 
            className={`px-4 py-3 font-medium whitespace-nowrap ${
              activeTab === 'requests' 
                ? `text-blue-500 border-b-2 border-blue-500 ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}` 
                : `${darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-500 hover:bg-gray-50'}`
            }`}
            onClick={() => setActiveTab('requests')}
          >
            Friend Requests ({filteredFriends.requests.length})
          </button>
        </div>
      </div>
      
      {activeTab === 'all' && renderFriendsList(filteredFriends.all)}
      {activeTab === 'suggestions' && renderFriendsList(filteredFriends.suggestions)}
      {activeTab === 'requests' && renderFriendsList(filteredFriends.requests)}
    </div>
  )
}