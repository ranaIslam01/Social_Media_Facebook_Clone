import React from 'react'

export default function Memories({ user }) {
  const memories = [
    {
      id: 1,
      title: "3 Years Ago",
      date: "June 10, 2020",
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      description: "Trip to Cox's Bazar with friends"
    },
    {
      id: 2,
      title: "2 Years Ago",
      date: "June 12, 2021",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      description: "Graduation day with classmates"
    },
    {
      id: 3,
      title: "1 Year Ago",
      date: "June 8, 2022",
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      description: "Birthday celebration at home"
    }
  ]

  return (
    <div className="md:mt-28 flex-1 max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold mb-6">Memories</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {memories.map(memory => (
          <div key={memory.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative">
              <img src={memory.image} alt={memory.title} className="w-full h-60 object-cover" />
              <div className="absolute top-0 left-0 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-br-lg">
                {memory.title}
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-center text-gray-500 mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>{memory.date}</span>
              </div>
              <p className="text-gray-600 mb-4">{memory.description}</p>
              <div className="flex space-x-2">
                <button className="flex-1 bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600 transition text-sm flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                  </svg>
                  Share
                </button>
                <button className="flex-1 bg-gray-200 text-gray-700 px-3 py-2 rounded hover:bg-gray-300 transition text-sm flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  View
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 