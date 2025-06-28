'use client'

import { DollarSign, ShoppingCart, TrendingUp } from 'lucide-react'
import MiniChart from './MiniChart'

export default function KPICards() {
  const kpiData = [
    {
      title: 'Total Revenue',
      value: '$4,852',
      change: '+30%',
      trend: 'up',
      icon: DollarSign,
      color: 'text-primary',
      bgColor: 'bg-primary/20',
      chartData: [320, 350, 380, 290, 450, 420, 485]
    },
    {
      title: 'Total Orders',
      value: '12,107',
      change: '-10%',
      trend: 'down',
      icon: ShoppingCart,
      color: 'text-info',
      bgColor: 'bg-info/20',
      chartData: [850, 920, 780, 1100, 950, 880, 1210]
    },
    {
      title: 'Avg. order value',
      value: '15,306',
      change: '+30%',
      trend: 'up',
      icon: TrendingUp,
      color: 'text-warning',
      bgColor: 'bg-warning/20',
      chartData: [1200, 1350, 1280, 1450, 1380, 1520, 1530]
    }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {kpiData.map((kpi, index) => {
        const Icon = kpi.icon
        const isPositive = kpi.trend === 'up'
        
        return (
          <div
            key={kpi.title}
            className="card hover:scale-105 cursor-pointer group"
            style={{
              animationDelay: `${index * 100}ms`,
            }}
          >
            <div className="flex items-start justify-between mb-4">
              <div className={`p-3 rounded-lg ${kpi.bgColor}`}>
                <Icon className={`w-6 h-6 ${kpi.color}`} />
              </div>
              <div className={`flex items-center space-x-1 ${
                isPositive ? 'text-primary' : 'text-danger'
              }`}>
                <span className="text-sm font-medium">{kpi.change}</span>
                <span className="text-xs text-gray-400">than last week</span>
              </div>
            </div>
            
            <div className="mb-4">
              <h3 className="text-gray-400 text-sm font-medium mb-1">{kpi.title}</h3>
              <p className="text-2xl font-bold text-white group-hover:text-primary transition-colors">
                {kpi.value}
              </p>
            </div>
            
            <div className="h-12">
              <MiniChart 
                data={kpi.chartData} 
                color={isPositive ? '#22C55E' : '#EF4444'}
              />
            </div>
          </div>
        )
      })}
    </div>
  )
}