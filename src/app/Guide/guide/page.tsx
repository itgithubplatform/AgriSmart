'use client'

import { useState } from 'react'
import { CheckCircle2, Clock, Lock, ChevronDown, ChevronUp } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Button } from '@/components/ui/button'
import { Tooltip } from '@/components/ui/tooltip'
import { Timeline } from '@/components/timeline'
import { Confetti } from '@/components/confetti'
import { Phase, Process, Subphase } from '@/types/guide'
import { cn } from '@/lib/utils'

export default function GuidePage() {
  const [showConfetti, setShowConfetti] = useState(false)
  const [expandedPhases, setExpandedPhases] = useState<number[]>([1])
  const [phases, setPhases] = useState<Phase[]>([
    {
      id: 1,
      title: "Soil Preparation & Planning",
      description: "Learn the fundamentals of soil analysis and crop planning",
      duration: "4 weeks",
      completed: false,
      locked: false,
      subphases: [
        {
          id: 11,
          title: "Soil Analysis & Testing",
          description: "Learn how to analyze soil composition and pH levels",
          duration: "2 weeks",
          completed: false,
          processes: [
            {
              id: 111,
              title: "Collect Soil Samples",
              description: "Take samples from different areas of the field at 6-8 inch depth",
              completed: false,
              estimatedTime: "2 hours"
            },
            {
              id: 112,
              title: "pH Testing",
              description: "Measure soil pH using testing kit or meter",
              completed: false,
              estimatedTime: "1 hour"
            },
            {
              id: 113,
              title: "Nutrient Analysis",
              description: "Test for N, P, K levels and organic matter content",
              completed: false,
              estimatedTime: "3 hours"
            }
          ]
        },
        {
          id: 12,
          title: "Crop Selection & Planning",
          description: "Choose optimal crops based on soil conditions and season",
          duration: "2 weeks",
          completed: false,
          processes: [
            {
              id: 121,
              title: "Research Suitable Crops",
              description: "Identify crops that match your soil type and climate",
              completed: false,
              estimatedTime: "4 hours"
            },
            {
              id: 122,
              title: "Create Planting Calendar",
              description: "Plan timing for different crops throughout the season",
              completed: false,
              estimatedTime: "3 hours"
            }
          ]
        }
      ]
    },
    {
      id: 2,
      title: "Planting & Growth Management",
      description: "Master the techniques of proper planting and early growth",
      duration: "6 weeks",
      completed: false,
      locked: true,
      subphases: [
        {
          id: 21,
          title: "Seeding Techniques",
          description: "Learn proper seed spacing and planting depth",
          duration: "3 weeks",
          completed: false,
          processes: [
            {
              id: 211,
              title: "Prepare Planting Beds",
              description: "Till and prepare soil for seeding",
              completed: false,
              estimatedTime: "6 hours"
            },
            {
              id: 212,
              title: "Seed Spacing Layout",
              description: "Mark proper spacing for different crop types",
              completed: false,
              estimatedTime: "4 hours"
            },
            {
              id: 213,
              title: "Planting Depth Guide",
              description: "Set up guides for correct planting depths",
              completed: false,
              estimatedTime: "2 hours"
            }
          ]
        },
        {
          id: 22,
          title: "Early Growth Care",
          description: "Monitor and manage early plant development",
          duration: "3 weeks",
          completed: false,
          processes: [
            {
              id: 221,
              title: "Watering Schedule",
              description: "Establish and implement watering routine",
              completed: false,
              estimatedTime: "1 hour"
            },
            {
              id: 222,
              title: "Growth Monitoring",
              description: "Track seedling emergence and early growth",
              completed: false,
              estimatedTime: "2 hours"
            }
          ]
        }
      ]
    },
    {
      id: 3,
      title: "Harvest & Post-harvest",
      description: "Learn about optimal harvesting and storage practices",
      duration: "4 weeks",
      completed: false,
      locked: true,
      subphases: [
        {
          id: 31,
          title: "Harvesting Methods",
          description: "Learn when and how to harvest different crops",
          duration: "2 weeks",
          completed: false,
          processes: [
            {
              id: 311,
              title: "Harvest Timing",
              description: "Determine optimal harvest times for each crop",
              completed: false,
              estimatedTime: "3 hours"
            },
            {
              id: 312,
              title: "Harvesting Techniques",
              description: "Practice proper harvesting methods",
              completed: false,
              estimatedTime: "5 hours"
            }
          ]
        },
        {
          id: 32,
          title: "Storage & Preservation",
          description: "Proper storage techniques for different crops",
          duration: "2 weeks",
          completed: false,
          processes: [
            {
              id: 321,
              title: "Cleaning and Sorting",
              description: "Clean and grade harvested crops",
              completed: false,
              estimatedTime: "4 hours"
            },
            {
              id: 322,
              title: "Storage Preparation",
              description: "Prepare storage areas and containers",
              completed: false,
              estimatedTime: "3 hours"
            }
          ]
        }
      ]
    }
  ])

  const togglePhaseExpansion = (phaseId: number) => {
    setExpandedPhases(prev => 
      prev.includes(phaseId) 
        ? prev.filter(id => id !== phaseId)
        : [...prev, phaseId]
    )
  }

  const completeProcess = (phaseId: number, subphaseId: number, processId: number) => {
    setPhases(phases.map(phase => {
      if (phase.id === phaseId) {
        const updatedSubphases = phase.subphases.map(subphase => {
          if (subphase.id === subphaseId) {
            const updatedProcesses = subphase.processes.map(process => {
              if (process.id === processId) {
                return { ...process, completed: true }
              }
              return process
            })
            
            // Check if all processes are completed
            const allProcessesCompleted = updatedProcesses.every(p => p.completed)
            
            return {
              ...subphase,
              processes: updatedProcesses,
              completed: allProcessesCompleted
            }
          }
          return subphase
        })
        
        // Check if all subphases are completed
        const allSubphasesCompleted = updatedSubphases.every(s => s.completed)
        
        // If all subphases are completed, unlock next phase and show confetti
        if (allSubphasesCompleted && !phase.completed) {
          const nextPhase = phases.find(p => p.id === phase.id + 1)
          if (nextPhase) {
            nextPhase.locked = false
          }
          setShowConfetti(true)
          setTimeout(() => setShowConfetti(false), 3000)
        }
        
        return {
          ...phase,
          subphases: updatedSubphases,
          completed: allSubphasesCompleted
        }
      }
      return phase
    }))
  }

  const getProgress = (phase: Phase) => {
    const totalProcesses = phase.subphases.reduce((acc, subphase) => 
      acc + subphase.processes.length, 0
    )
    const completedProcesses = phase.subphases.reduce((acc, subphase) => 
      acc + subphase.processes.filter(p => p.completed).length, 0
    )
    return (completedProcesses / totalProcesses) * 100
  }

  return (
      <div className="container mx-auto py-12 px-4">
        {showConfetti && <Confetti />}
        <Timeline phases={phases} />
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tight">Farming Guide</h1>
            <p className="text-muted-foreground text-lg">
              Follow our comprehensive guide to successful farming, divided into three main phases
            </p>
          </div>

          <div className="grid gap-8">
            {phases.map((phase) => (
              <div key={phase.id} className="transition-all duration-300 ease-in-out">
                <Card className={cn(phase.locked ? "opacity-75" : "")}>
                  <CardHeader className="cursor-pointer" onClick={() => togglePhaseExpansion(phase.id)}>
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <CardTitle className="text-2xl flex items-center gap-2">
                          {phase.completed && <CheckCircle2 className="text-green-500" />}
                          {phase.locked && <Lock className="text-muted-foreground" />}
                          {phase.title}
                          {expandedPhases.includes(phase.id) ? <ChevronUp /> : <ChevronDown />}
                        </CardTitle>
                        <CardDescription className="text-base">
                          {phase.description}
                        </CardDescription>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Clock size={16} />
                          <span>{phase.duration}</span>
                        </div>
                      </div>
                    </div>
                    <Progress value={getProgress(phase)} className="mt-4" />
                  </CardHeader>
                  {expandedPhases.includes(phase.id) && (
                    <div className="transition-all duration-300 ease-in-out overflow-hidden">
                      <CardContent>
                        <div className="grid gap-6 sm:grid-cols-2">
                          {phase.subphases.map((subphase) => (
                            <Card key={subphase.id} className="border-dashed">
                              <CardHeader>
                                <CardTitle className="text-lg flex items-center justify-between">
                                  {subphase.title}
                                  {subphase.completed && (
                                    <CheckCircle2 className="text-green-500" />
                                  )}
                                </CardTitle>
                                <CardDescription>{subphase.description}</CardDescription>
                              </CardHeader>
                              <CardContent className="space-y-4">
                                <div className="flex items-center gap-2 text-muted-foreground">
                                  <Clock size={16} />
                                  <span>{subphase.duration}</span>
                                </div>
                                <div className="space-y-3">
                                  {subphase.processes.map((process) => (
                                    <div
                                      key={process.id}
                                      className="flex items-center justify-between gap-4 p-3 bg-muted rounded-lg"
                                    >
                                      <div className="space-y-1">
                                        <div className="font-medium">{process.title}</div>
                                        <Tooltip content={<p>Estimated time: {process.estimatedTime}</p>}>
                                          <div className="text-sm text-muted-foreground">
                                            {process.description}
                                          </div>
                                        </Tooltip>
                                      </div>
                                      <Button
                                        variant={process.completed ? "outline" : "default"}
                                        size="sm"
                                        disabled={phase.locked || process.completed}
                                        onClick={() => completeProcess(phase.id, subphase.id, process.id)}
                                      >
                                        {process.completed ? "Done" : "Mark Done"}
                                      </Button>
                                    </div>
                                  ))}
                                </div>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      </CardContent>
                    </div>
                  )}
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
  )
}

