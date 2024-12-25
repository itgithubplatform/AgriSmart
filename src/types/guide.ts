export interface Process {
    id: number
    title: string
    description: string
    completed: boolean
    estimatedTime: string
  }
  
  export interface Subphase {
    id: number
    title: string
    description: string
    duration: string
    completed: boolean
    processes: Process[]
  }
  
  export interface Phase {
    id: number
    title: string
    description: string
    duration: string
    completed: boolean
    locked: boolean
    subphases: Subphase[]
  }
  
  