'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const templates = [
  {
    name: 'Crop Rotation Planner',
    description: 'Optimize your field usage with our intelligent crop rotation system.',
    image: '/images/paddyguide.png?height=400&width=600',
  },
  {
    name: 'Pest Management Tracker',
    description: 'Monitor and manage pest infestations effectively across your farm.',
    image: '/images/prediction.png?height=400&width=600',
  },
  {
    name: 'Weather Forecast',
    description: 'Accurately predict and track weather for the next 10 days in your location.',
    image: '/images/weather.png?height=400&width=600',
  },
  {
    name: 'Chemical and Pesticide Usage',
    description: 'Efficiently allocate resources based on crop needs and weather conditions.',
    image: '/images/chimicals.png?height=400&width=600',
  },
  {
    name: 'News and Updates',
    description: 'Keep track of various agriculture-related news and updates for farmers.',
    image: '/images/neaws.png?height=400&width=600',
  },
  {
    name: 'Equipment Maintenance Log',
    description: 'Schedule and track maintenance for all your farming equipment.',
    image: '/images/equipment.png?height=400&width=600',
  },
]

export default function Templates() {
  const [startIndex, setStartIndex] = useState(0)

  const nextTemplates = () => {
    setStartIndex((prevIndex) => (prevIndex + 3) % templates.length)
  }

  const prevTemplates = () => {
    setStartIndex((prevIndex) => (prevIndex - 3 + templates.length) % templates.length)
  }

  // Auto-rotation of templates every 2 seconds
  useEffect(() => {
    const interval = setInterval(nextTemplates, 2000)
    return () => clearInterval(interval) // Clean up interval on component unmount
  }, [])

  return (
    <div className="bg-white py-24 sm:py-32" id="templates">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Templates</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Various services provided by our portal to help farmers in cultivating rice in the state of Goa.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {[0, 1, 2].map((offset) => {
            const template = templates[(startIndex + offset) % templates.length]
            return (
              <article key={template.name} className="flex max-w-xl flex-col items-start justify-between">
                <div className="relative w-full">
                  <img
                    src={template.image}
                    alt={template.name}
                    className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div className="max-w-xl">
                  <div className="mt-8 flex items-center gap-x-4 text-xs">
                    <Button variant="outline" className="relative z-10 rounded-full px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                      Use 
                    </Button>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      <span className="absolute inset-0" />
                      {template.name}
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{template.description}</p>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
        <div className="mt-10 flex justify-center space-x-4">
          <Button onClick={prevTemplates} variant="outline" className="p-2">
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button onClick={nextTemplates} variant="outline" className="p-2">
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </div>
  )
}
