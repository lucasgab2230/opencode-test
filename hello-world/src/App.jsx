import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [greeting, setGreeting] = useState('Hello, World!')

  useEffect(() => {
    const hour = new Date().getHours()
    if (hour < 12) setGreeting('Good morning, World!')
    else if (hour < 18) setGreeting('Good afternoon, World!')
    else setGreeting('Good evening, World!')
  }, [])

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  const incrementCount = () => {
    setCount(prev => prev + 1)
  }

  const resetCount = () => {
    setCount(0)
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDarkMode 
        ? 'bg-gray-900 text-white' 
        : 'bg-gradient-to-br from-blue-50 to-indigo-100 text-gray-900'
    }`}>
      <div className="container mx-auto px-4 py-8">
        <header className="flex justify-between items-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-fade-in">
            {greeting}
          </h1>
          <button
            onClick={toggleDarkMode}
            className={`p-3 rounded-full transition-all duration-300 ${
              isDarkMode 
                ? 'bg-yellow-400 text-gray-900 hover:bg-yellow-300' 
                : 'bg-gray-800 text-white hover:bg-gray-700'
            }`}
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? '☀️' : '🌙'}
          </button>
        </header>

        <main className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <a
                  href="https://vite.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <img
                    src={viteLogo}
                    className="h-16 w-16 transition-transform duration-300 group-hover:scale-110 group-hover:drop-shadow-lg"
                    alt="Vite logo"
                  />
                </a>
                <a
                  href="https://react.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <img
                    src={reactLogo}
                    className="h-16 w-16 transition-transform duration-300 group-hover:scale-110 group-hover:drop-shadow-lg"
                    alt="React logo"
                  />
                </a>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-xl">
                <h2 className="text-2xl font-semibold mb-4">Welcome to React 19!</h2>
                <p className="text-lg opacity-90">
                  Experience the latest features of React with modern styling using TailwindCSS.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-xl">
                <h3 className="text-xl font-semibold mb-4">Interactive Counter</h3>
                <div className="text-6xl font-bold text-center mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                  {count}
                </div>
                <div className="flex space-x-4">
                  <button
                    onClick={incrementCount}
                    className="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Increment
                  </button>
                  <button
                    onClick={resetCount}
                    className="flex-1 bg-gray-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Reset
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 shadow-xl">
            <h3 className="text-2xl font-semibold mb-4 text-center">Features Showcase</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4 rounded-lg bg-white/5">
                <div className="text-3xl mb-2">⚡</div>
                <h4 className="font-semibold mb-2">React 19</h4>
                <p className="text-sm opacity-80">Latest React features and hooks</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-white/5">
                <div className="text-3xl mb-2">🎨</div>
                <h4 className="font-semibold mb-2">TailwindCSS</h4>
                <p className="text-sm opacity-80">Utility-first CSS framework</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-white/5">
                <div className="text-3xl mb-2">🌙</div>
                <h4 className="font-semibold mb-2">Dark Mode</h4>
                <p className="text-sm opacity-80">Toggle between light and dark themes</p>
              </div>
            </div>
          </div>

          <footer className="mt-12 text-center opacity-70">
            <p className="text-lg">
              Built with React 19, Vite, and TailwindCSS
            </p>
            <p className="text-sm mt-2">
              Edit <code className="bg-white/10 px-2 py-1 rounded">src/App.jsx</code> to see changes
            </p>
          </footer>
        </main>
      </div>
    </div>
  )
}

export default App
