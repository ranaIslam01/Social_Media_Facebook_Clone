import React from 'react'
import { Link } from 'react-router-dom'

export default function RightSidebar({ darkMode }) {
  // Mock data for online friends
  const onlineFriends = [
    { id: 1, name: "Ruhul Islam", profilePicture: "https://randomuser.me/api/portraits/men/32.jpg", isOnline: true },
    { id: 2, name: "Rakib Hassan", profilePicture: "https://randomuser.me/api/portraits/men/41.jpg", isOnline: true },
    { id: 3, name: "Shuvo Ahmed", profilePicture: "https://randomuser.me/api/portraits/men/55.jpg", isOnline: true },
    { id: 4, name: "Rayhan Khan", profilePicture: "https://randomuser.me/api/portraits/men/22.jpg", isOnline: false },
    { id: 5, name: "Sifat Rahman", profilePicture: "https://randomuser.me/api/portraits/men/36.jpg", isOnline: true }
  ]
  
  // Mock data for upcoming events
  const upcomingEvents = [
    {
      id: 1,
      title: "Web Development Workshop",
      date: "Tomorrow, 3:00 PM",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80"
    },
    {
      id: 2,
      title: "Tech Meetup 2023",
      date: "Sat, May 20 • 10:00 AM",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80"
    }
  ]
  
  // Mock data for suggested groups
  const suggestedGroups = [
    {
      id: 1,
      name: "JavaScript Developers",
      members: 12500,
      image: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80"
    },
    {
      id: 2,
      name: "UI/UX Design Community",
      members: 8300,
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80"
    }
  ]
  
  return (
    <div className={`w-64 h-[calc(100vh-64px)] fixed lg:sticky top-16 right-0 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white'} shadow-md overflow-y-auto hidden lg:block`}>
      <div className="p-4">
        {/* Birthdays */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-3">Birthdays</h3>
          <div className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
            <div className="flex items-center">
              <div className="mr-3 text-blue-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
                </svg>
              </div>
              <p className="text-sm">
                <span className="font-semibold">Rakib Hassan</span> and <span className="font-semibold">2 others</span> have birthdays today.
              </p>
            </div>
          </div>
        </div>
        
        {/* Online Friends */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-3">Online Friends</h3>
          <div className="space-y-3">
            {onlineFriends.map(friend => (
              <Link key={friend.id} to={`/profile/${friend.id}`} className="flex items-center">
                <div className="relative mr-3">
                  <img 
                    src={friend.profilePicture} 
                    alt={friend.name} 
                    className="w-10 h-10 rounded-full"
                  />
                  {friend.isOnline && (
                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
                  )}
                </div>
                <span className={`text-sm ${friend.isOnline ? 'font-medium' : 'opacity-60'}`}>{friend.name}</span>
              </Link>
            ))}
          </div>
        </div>
        
        {/* Upcoming Events */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-lg font-semibold">Upcoming Events</h3>
            <Link to="/events" className="text-sm text-blue-500 hover:underline">See All</Link>
          </div>
          <div className="space-y-3">
            {upcomingEvents.map(event => (
              <Link key={event.id} to={`/events/${event.id}`} className={`block p-3 rounded-lg ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'}`}>
                <div className="flex">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-12 h-12 rounded-lg object-cover mr-3"
                  />
                  <div>
                    <h4 className="font-medium text-sm">{event.title}</h4>
                    <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{event.date}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        
        {/* Suggested Groups */}
        <div>
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-lg font-semibold">Suggested Groups</h3>
            <Link to="/groups" className="text-sm text-blue-500 hover:underline">See All</Link>
          </div>
          <div className="space-y-3">
            {suggestedGroups.map(group => (
              <Link key={group.id} to={`/groups/${group.id}`} className={`block p-3 rounded-lg ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'}`}>
                <div className="flex">
                  <img 
                    src={group.image} 
                    alt={group.name} 
                    className="w-12 h-12 rounded-lg object-cover mr-3"
                  />
                  <div>
                    <h4 className="font-medium text-sm">{group.name}</h4>
                    <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{group.members.toLocaleString()} members</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 