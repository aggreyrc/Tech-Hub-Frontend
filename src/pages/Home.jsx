import React, { useState, useEffect } from "react";

function Home() {
  const [darkMode, setDarkMode] = useState(false);

  // Placeholder function to prevent errors
  const handleShopNow = () => {
    // You can implement navigation or other logic here
    alert('Shop Now clicked!');
  };

  return (
    <div className={`min-h-screen flex flex-col ${darkMode ? 'dark' : ''}`}>
      <div className="flex-1 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300 flex flex-col">
        {/* Hero Section */}
        <section className="relative h-96 bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
          <div className="absolute inset-0 bg-black opacity-20 z-0"></div>
          <div className="relative z-10 text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Shop the Latest Electronics
            </h1>
            <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
              Find the best laptops, smartphones, and accessories at competitive prices
            </p>
            <button 
              onClick={handleShopNow}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium text-lg hover:bg-gray-100 transition duration-300"
            >
              Shop Now
            </button>
          </div>
        </section>
        {/* Featured Products Section */}
        <section className="py-12 px-4 flex-1">
          <div className="max-w-6xl mx-auto h-full flex flex-col">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold">Featured Products</h2>
              <button 
                onClick={() => setDarkMode(!darkMode)}
                className="bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded-lg flex items-center"
              >
                {darkMode ? (
                  <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 01-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zm-7 4a1 1 0 01-1 1H8a1 1 0 110-2h1a1 1 0 011 1zM7 11a1 1 0 01-1 1H5a1 1 0 110-2h1a1 1 0 011 1zm-4 7a1 1 0 010-2h1a1 1 0 010 2H3zM13 16h-1a1 1 0 110-2h1a1 1 0 010 2zm-1-4a1 1 0 01-1-1v-1a1 1 0 012 0v1a1 1 0 01-1 1zm-2-6a1 1 0 01-1-1V6a1 1 0 012 0v1a1 1 0 01-1 1zM3 13a1 1 0 010-2h1a1 1 0 010 2H3z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
                {darkMode ? 'Light Mode' : 'Dark Mode'}
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1">
              {/* Product cards would go here */}
            </div>
          </div>
        </section>
        {/* Navigation links removed to prevent errors with undefined routes */}
      </div>
    </div>
  );
}

export default Home;
