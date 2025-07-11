import React from 'react'

export default function Events({ user }) {
  const events = [
    {
      id: 1,
      title: "Tech Meetup in Dinajpur",
      date: "June 15, 2023",
      time: "6:00 PM - 9:00 PM",
      location: "Dinajpur IT Hub",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      attendees: 42,
      description: "Join us for an evening of networking and tech talks with local developers and entrepreneurs."
    },
    {
      id: 2,
      title: "Photography Workshop",
      date: "July 8, 2023",
      time: "10:00 AM - 2:00 PM",
      location: "Dinajpur Arts Center",
      image: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      attendees: 28,
      description: "Learn photography techniques from professional photographers. Bring your camera!"
    },
    {
      id: 3,
      title: "Community Cleanup Day",
      date: "July 22, 2023",
      time: "9:00 AM - 12:00 PM",
      location: "Dinajpur Central Park",
      image: "https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      attendees: 56,
      description: "Join our community effort to clean up the park. Refreshments will be provided."
    }
  ]

  return (
    <div className="md:mt-12 flex-1 max-w-4xl mx-auto py-8 px-4"> 
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Events</h1>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
          <span className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Create Event
          </span>
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map(event => (
          <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{event.title}</h2>
              <div className="flex items-center text-gray-500 mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>{event.date} • {event.time}</span>
              </div>
              <div className="flex items-center text-gray-500 mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{event.location}</span>
              </div>
              <p className="text-gray-600 mb-4">{event.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">{event.attendees} people going</span>
                <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition text-sm">
                  Interested
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 