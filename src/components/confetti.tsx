'use client'

import { useEffect, useState } from 'react'
import ReactConfetti from 'react-confetti'


interface ConfettiProps {
  duration?: number
}

export function Confetti({ duration = 100000 }: ConfettiProps) {
  const [isActive, setIsActive] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsActive(false)
    }, duration)

    return () => clearTimeout(timer)
  }, [duration])

  if (!isActive) return null

  return (
    <ReactConfetti
      style={{ position: 'fixed', top: 0, left: 0, zIndex: 100 }}
      numberOfPieces={200}
      recycle={false}
    />
  )
}

