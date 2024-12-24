'use client'

import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-300">
      <svg
        className="absolute inset-0 -z-10 h-full w-full stroke-gray-400 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
            width={200}
            height={200}
            x="50%"
            y={-1}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" strokeWidth={0} fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)" />
      </svg>
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
        {/* Text and Buttons Section */}
        <div className="relative mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
          <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Smart farming solutions for a sustainable future
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            AgriSmart empowers farmers with cutting-edge technology to optimize crop yields, manage resources
            efficiently, and make data-driven decisions.
          </p>
          <div className="mt-10 flex flex-col items-start gap-y-6">
            <Button className="bg-green-600 hover:bg-green-700">Get started</Button>
            <Button variant="ghost" className="text-sm font-semibold leading-6 text-gray-900">
              Learn more <span aria-hidden="true">→</span>
            </Button>
          </div>

          {/* Image Below Buttons */}
          <div className="mt-2">
            <img
              src="/images/Picture1.png"
              alt="Farming technology illustration"
              className="max-w-md rounded-md shadow-lg" height={400} width={600}
            />
          </div>
        </div>

        {/* Screenshot Section */}
        <div className="relative mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
              <img
                src="/images/crops-growing-in-thailand.jpg"
                alt="App screenshot"
                width={1216}
                height={842}
                className="w-[76rem] rounded-md shadow-2xl ring-1 ring-gray-900/10"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
