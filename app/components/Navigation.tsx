'use client'

interface NavigationProps {
  activeTab: string
  setActiveTab: (tab: string) => void
}

export default function Navigation({ activeTab, setActiveTab }: NavigationProps) {
  const tabs = ['Overview', 'Analytics', 'Products', 'Reports']

  return (
    <nav className="bg-background border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-all duration-200 ${
                activeTab === tab
                  ? 'border-primary text-primary'
                  : 'border-transparent text-gray-400 hover:text-white hover:border-gray-600'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}