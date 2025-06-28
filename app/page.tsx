'use client'

import { useState } from 'react'
import Header from './components/Header'
import Navigation from './components/Navigation'
import KPICards from './components/KPICards'
import Controls from './components/Controls'
import ProductTable from './components/ProductTable'

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('Overview')
  const [timeFilter, setTimeFilter] = useState('Weekly')
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="px-6 py-8 max-w-7xl mx-auto">
        {activeTab === 'Overview' && (
          <div className="space-y-8 animate-fade-in">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold text-white">Overview</h1>
                <p className="text-gray-400 mt-1">Overview reports of your product</p>
              </div>
              <Controls 
                timeFilter={timeFilter} 
                setTimeFilter={setTimeFilter}
              />
            </div>
            
            <KPICards />
            
            <ProductTable 
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
          </div>
        )}

        {activeTab === 'Analytics' && (
          <div className="text-center py-20 animate-fade-in">
            <h2 className="text-2xl font-bold text-white mb-4">Analytics Dashboard</h2>
            <p className="text-gray-400">Advanced analytics and insights coming soon...</p>
          </div>
        )}

        {activeTab === 'Products' && (
          <div className="text-center py-20 animate-fade-in">
            <h2 className="text-2xl font-bold text-white mb-4">Product Management</h2>
            <p className="text-gray-400">Comprehensive product management tools coming soon...</p>
          </div>
        )}

        {activeTab === 'Reports' && (
          <div className="text-center py-20 animate-fade-in">
            <h2 className="text-2xl font-bold text-white mb-4">Reports Center</h2>
            <p className="text-gray-400">Detailed reports and export functionality coming soon...</p>
          </div>
        )}
      </main>
    </div>
  )
}