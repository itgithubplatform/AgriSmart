'use client'

import { CheckCircle2, Circle } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Phase } from '@/types/guide'

interface TimelineProps {
  phases: Phase[]
}

export function Timeline({ phases }: TimelineProps) {
  return (
    <div className="hidden lg:block fixed left-8 top-1/2 -translate-y-1/2 h-96">
      <div className="relative h-full">
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border" />
        {phases.map((phase, index) => (
          <div
            key={phase.id}
            className={cn(
              "absolute left-0 flex items-center gap-3 transition-all duration-500",
              phase.locked ? "opacity-50" : "opacity-100"
            )}
            style={{
              top: `${(index / (phases.length - 1)) * 100}%`,
            }}
          >
            {phase.completed ? (
              <CheckCircle2 className="w-8 h-8 text-primary bg-background rounded-full" />
            ) : (
              <Circle className="w-8 h-8 text-muted-foreground" />
            )}
            <span className="text-sm font-medium">{phase.title}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

