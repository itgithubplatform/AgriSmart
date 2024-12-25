import React, { useState } from "react"
import { cn } from "@/lib/utils"

interface TooltipProps {
  content: React.ReactNode
  children: React.ReactNode
  className?: string
}

export const Tooltip: React.FC<TooltipProps> = ({ content, children, className }) => {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <div className="relative inline-block">
      <div
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        {children}
      </div>
      {isVisible && (
        <div
          className={cn(
            "absolute z-10 px-3 py-2 text-sm text-white bg-gray-800 rounded-md shadow-md",
            "left-1/2 -translate-x-1/2 mt-1",
            className
          )}
        >
          {content}
        </div>
      )}
    </div>
  )
}

