'use client'

import { useState } from 'react'
import { Bell, Settings, ChevronDown } from 'lucide-react'

export default function Header() {
  const [showProfileDropdown, setShowProfileDropdown] = useState(false)
  const [notifications, setNotifications] = useState(3)

  return (
    <header className="bg-card border-b border-gray-800 px-6 py-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">G</span>
          </div>
          <div>
            <h1 className="text-xl font-bold text-white">GrosiTrack</h1>
            <p className="text-sm text-gray-400">Sales Dashboard</p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <button 
            className="relative p-2 hover:bg-gray-800 rounded-lg transition-colors duration-200"
            onClick={() => setNotifications(0)}
          >
            <Settings className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
          </button>
          
          <button 
            className="relative p-2 hover:bg-gray-800 rounded-lg transition-colors duration-200"
            onClick={() => setNotifications(0)}
          >
            <Bell className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
            {notifications > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-danger text-white text-xs rounded-full flex items-center justify-center animate-bounce-subtle">
                {notifications}
              </span>
            )}
          </button>

          <div className="relative">
            <button
              className="flex items-center space-x-3 hover:bg-gray-800 rounded-lg p-2 transition-colors duration-200"
              onClick={() => setShowProfileDropdown(!showProfileDropdown)}
            >
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white font-medium text-sm">GS</span>
              </div>
              <div className="text-left">
                <p className="text-white font-medium text-sm">Grosiran shop</p>
                <p className="text-gray-400 text-xs">Wholesaler</p>
              </div>
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </button>

            {showProfileDropdown && (
              <div className="absolute right-0 mt-2 w-48 bg-card border border-gray-700 rounded-lg shadow-xl z-50 animate-slide-up">
                <div className="p-2">
                  <button className="w-full text-left px-3 py-2 hover:bg-gray-800 rounded text-white transition-colors">
                    Profile Settings
                  </button>
                  <button className="w-full text-left px-3 py-2 hover:bg-gray-800 rounded text-white transition-colors">
                    Account Settings
                  </button>
                  <hr className="my-2 border-gray-700" />
                  <button className="w-full text-left px-3 py-2 hover:bg-gray-800 rounded text-danger transition-colors">
                    Sign Out
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}