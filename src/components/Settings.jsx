import React, { useState } from 'react'

export default function Settings({ user, darkMode, setDarkMode }) {
  const [activeTab, setActiveTab] = useState('account')
  const [name, setName] = useState(user?.name || 'Rana Islam')
  const [email, setEmail] = useState(user?.email || 'rana@example.com')
  const [phone, setPhone] = useState(user?.phone || '01873488443')
  const [bio, setBio] = useState(user?.bio || 'Web Developer | Photography Enthusiast | Travel Lover')
  const [location, setLocation] = useState(user?.location || 'Dinajpur Sadar, Bangladesh')
  
  const handleSaveProfile = (e) => {
    e.preventDefault()
    // In a real app, you would make an API call to update the user profile
    alert('Profile updated successfully!')
  }
  
  return (
    <div className={`flex-1 max-w-4xl mx-auto py-8 px-4 ${darkMode ? 'text-white' : ''}`}>
      <h1 className="text-2xl font-bold mb-6">Settings</h1>
      
      <div className="flex flex-col md:flex-row gap-6">
        {/* Sidebar */}
        <div className="w-full md:w-64">
          <div className={`rounded-lg shadow-md overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <button 
              onClick={() => setActiveTab('account')}
              className={`w-full text-left px-4 py-3 ${activeTab === 'account' ? (darkMode ? 'bg-gray-700' : 'bg-blue-50 text-blue-600') : ''}`}
            >
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Account
              </div>
            </button>
            <button 
              onClick={() => setActiveTab('appearance')}
              className={`w-full text-left px-4 py-3 ${activeTab === 'appearance' ? (darkMode ? 'bg-gray-700' : 'bg-blue-50 text-blue-600') : ''}`}
            >
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
                Appearance
              </div>
            </button>
            <button 
              onClick={() => setActiveTab('privacy')}
              className={`w-full text-left px-4 py-3 ${activeTab === 'privacy' ? (darkMode ? 'bg-gray-700' : 'bg-blue-50 text-blue-600') : ''}`}
            >
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                Privacy & Security
              </div>
            </button>
          </div>
        </div>
        
        {/* Main content */}
        <div className="flex-1">
          <div className={`rounded-lg shadow-md p-6 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
            {activeTab === 'account' && (
              <div>
                <h2 className="text-xl font-semibold mb-4">Account Information</h2>
                <form onSubmit={handleSaveProfile}>
                  <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Profile Picture</label>
                    <div className="flex items-center">
                      <img src={user?.profilePicture || "https://via.placeholder.com/150"} alt={name} className="w-20 h-20 rounded-full mr-4" />
                      <button type="button" className={`px-3 py-1 rounded ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'}`}>
                        Change
                      </button>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Name</label>
                      <input 
                        type="text" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)}
                        className={`w-full p-2 border rounded ${darkMode ? 'bg-gray-700 border-gray-600' : 'border-gray-300'}`}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Email</label>
                      <input 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}
                        className={`w-full p-2 border rounded ${darkMode ? 'bg-gray-700 border-gray-600' : 'border-gray-300'}`}
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Phone</label>
                      <input 
                        type="text" 
                        value={phone} 
                        onChange={(e) => setPhone(e.target.value)}
                        className={`w-full p-2 border rounded ${darkMode ? 'bg-gray-700 border-gray-600' : 'border-gray-300'}`}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Location</label>
                      <input 
                        type="text" 
                        value={location} 
                        onChange={(e) => setLocation(e.target.value)}
                        className={`w-full p-2 border rounded ${darkMode ? 'bg-gray-700 border-gray-600' : 'border-gray-300'}`}
                      />
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Bio</label>
                    <textarea 
                      value={bio} 
                      onChange={(e) => setBio(e.target.value)}
                      className={`w-full p-2 border rounded ${darkMode ? 'bg-gray-700 border-gray-600' : 'border-gray-300'}`}
                      rows="3"
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  >
                    Save Changes
                  </button>
                </form>
              </div>
            )}
            
            {activeTab === 'appearance' && (
              <div>
                <h2 className="text-xl font-semibold mb-4">Appearance</h2>
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2">Theme</label>
                  <div className="flex items-center">
                    <button 
                      onClick={() => setDarkMode(false)} 
                      className={`mr-4 px-4 py-2 rounded-lg ${!darkMode ? 'bg-blue-500 text-white' : (darkMode ? 'bg-gray-700' : 'bg-gray-200')}`}
                    >
                      Light
                    </button>
                    <button 
                      onClick={() => setDarkMode(true)} 
                      className={`px-4 py-2 rounded-lg ${darkMode ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                    >
                      Dark
                    </button>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'privacy' && (
              <div>
                <h2 className="text-xl font-semibold mb-4">Privacy & Security</h2>
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2">Who can see your profile</label>
                  <select className={`w-full p-2 border rounded ${darkMode ? 'bg-gray-700 border-gray-600' : 'border-gray-300'}`}>
                    <option>Everyone</option>
                    <option>Friends only</option>
                    <option>Only me</option>
                  </select>
                </div>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2">Who can send you friend requests</label>
                  <select className={`w-full p-2 border rounded ${darkMode ? 'bg-gray-700 border-gray-600' : 'border-gray-300'}`}>
                    <option>Everyone</option>
                    <option>Friends of friends</option>
                    <option>No one</option>
                  </select>
                </div>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2">Two-factor authentication</label>
                  <div className="flex items-center">
                    <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                      Enable
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
} 