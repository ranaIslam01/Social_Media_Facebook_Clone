import React, { useState } from 'react'

export default function Marketplace({ user, darkMode }) {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  
  const categories = [
    { id: 'all', name: 'All Categories' },
    { id: 'electronics', name: 'Electronics' },
    { id: 'vehicles', name: 'Vehicles' },
    { id: 'property', name: 'Property' },
    { id: 'furniture', name: 'Furniture' },
    { id: 'clothing', name: 'Clothing' },
    { id: 'books', name: 'Books' },
    { id: 'services', name: 'Services' }
  ]
  
  const products = [
    {
      id: 1,
      title: "iPhone 13 Pro Max",
      price: 120000,
      location: "Dinajpur Sadar",
      image: "https://images.unsplash.com/photo-1632661674596-df8be070a5c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      seller: { id: 1, name: "Ruhul Islam", profilePicture: "https://randomuser.me/api/portraits/men/32.jpg" },
      category: "electronics",
      condition: "Like New",
      postedTime: "2 days ago"
    },
    {
      id: 2,
      title: "Honda CBR 150R",
      price: 350000,
      location: "Dinajpur",
      image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      seller: { id: 2, name: "Rakib Hassan", profilePicture: "https://randomuser.me/api/portraits/men/41.jpg" },
      category: "vehicles",
      condition: "Used",
      postedTime: "1 week ago"
    },
    {
      id: 3,
      title: "Wooden Dining Table",
      price: 15000,
      location: "Dinajpur",
      image: "https://images.unsplash.com/photo-1577140917170-285929fb55b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      seller: { id: 3, name: "Shuvo Ahmed", profilePicture: "https://randomuser.me/api/portraits/men/55.jpg" },
      category: "furniture",
      condition: "Used",
      postedTime: "3 days ago"
    },
    {
      id: 4,
      title: "2 BHK Apartment for Rent",
      price: 12000,
      location: "Dinajpur City",
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      seller: { id: 4, name: "Rayhan Khan", profilePicture: "https://randomuser.me/api/portraits/men/22.jpg" },
      category: "property",
      condition: "N/A",
      postedTime: "5 days ago"
    },
    {
      id: 5,
      title: "Programming Books Collection",
      price: 2500,
      location: "Dinajpur",
      image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      seller: { id: 5, name: "Sifat Rahman", profilePicture: "https://randomuser.me/api/portraits/men/36.jpg" },
      category: "books",
      condition: "Good",
      postedTime: "1 day ago"
    },
    {
      id: 6,
      title: "Winter Jacket",
      price: 1800,
      location: "Dinajpur",
      image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      seller: { id: 1, name: "Ruhul Islam", profilePicture: "https://randomuser.me/api/portraits/men/32.jpg" },
      category: "clothing",
      condition: "New",
      postedTime: "4 days ago"
    },
    {
      id: 7,
      title: "Web Development Services",
      price: 5000,
      location: "Remote",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      seller: { id: 2, name: "Rakib Hassan", profilePicture: "https://randomuser.me/api/portraits/men/41.jpg" },
      category: "services",
      condition: "N/A",
      postedTime: "2 days ago"
    },
    {
      id: 8,
      title: "Samsung Galaxy S22",
      price: 85000,
      location: "Dinajpur",
      image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      seller: { id: 3, name: "Shuvo Ahmed", profilePicture: "https://randomuser.me/api/portraits/men/55.jpg" },
      category: "electronics",
      condition: "Used",
      postedTime: "1 week ago"
    }
  ]
  
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          product.location.toLowerCase().includes(searchQuery.toLowerCase())
    
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory
    
    return matchesSearch && matchesCategory
  })
  
  const formatPrice = (price) => {
    return new Intl.NumberFormat('bn-BD', { style: 'currency', currency: 'BDT' }).format(price)
  }
  
  return (
    <div className={`md:mt-14 flex-1 max-w-6xl mx-auto py-8 px-4 ${darkMode ? 'text-white' : ''}`}>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Marketplace</h1>
        <button className={`px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600`}>
          <span className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Sell Something
          </span>
        </button>
      </div>
      
      {/* Search and filters */}
      <div className={`p-4 rounded-lg shadow-md mb-6 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <input
                type="text"
                placeholder="Search marketplace..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`w-full p-3 pl-10 border rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300'}`}
              />
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute left-3 top-3.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
          <div className="md:w-64">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className={`w-full p-3 border rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300'}`}
            >
              {categories.map(category => (
                <option key={category.id} value={category.id}>{category.name}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
      
      {/* Products grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map(product => (
          <div key={product.id} className={`rounded-lg shadow-md overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <div className="relative pb-[75%]">
              <img 
                src={product.image} 
                alt={product.title} 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <div className="flex justify-between items-start">
                <h3 className="text-lg font-semibold">{product.title}</h3>
                <p className="font-bold text-green-600">{formatPrice(product.price)}</p>
              </div>
              <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-500'} mt-1`}>{product.location}</p>
              <div className="flex items-center mt-2">
                <span className={`text-xs px-2 py-1 rounded ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                  {product.condition}
                </span>
                <span className={`text-xs ml-2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  {product.postedTime}
                </span>
              </div>
              <div className="flex items-center mt-3 pt-3 border-t border-gray-200">
                <img 
                  src={product.seller.profilePicture} 
                  alt={product.seller.name} 
                  className="w-6 h-6 rounded-full mr-2"
                />
                <span className="text-sm">{product.seller.name}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {filteredProducts.length === 0 && (
        <div className={`text-center py-12 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto mb-4 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3 className="text-xl font-medium mb-2">No products found</h3>
          <p>Try changing your search or filter criteria</p>
        </div>
      )}
    </div>
  )
} 