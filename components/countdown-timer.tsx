"use client"

import { useEffect, useState } from "react"

interface CountdownTimerProps {
  targetDate: Date
  className?: string
}

export function CountdownTimer({ targetDate, className = "" }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)

    const interval = setInterval(() => {
      const now = new Date()
      const difference = targetDate.getTime() - now.getTime()

      if (difference <= 0) {
        clearInterval(interval)
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        return
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((difference % (1000 * 60)) / 1000)

      setTimeLeft({ days, hours, minutes, seconds })
    }, 1000)

    return () => clearInterval(interval)
  }, [targetDate])

  if (!isClient) {
    return null // Prevent hydration mismatch
  }

  return (
    <div className={`flex justify-center gap-4 ${className}`}>
      <div className="flex flex-col items-center">
        <div className="text-3xl md:text-5xl font-bold">{timeLeft.days}</div>
        <div className="text-xs uppercase text-muted-foreground">Days</div>
      </div>
      <div className="flex flex-col items-center">
        <div className="text-3xl md:text-5xl font-bold">{timeLeft.hours}</div>
        <div className="text-xs uppercase text-muted-foreground">Hours</div>
      </div>
      <div className="flex flex-col items-center">
        <div className="text-3xl md:text-5xl font-bold">{timeLeft.minutes}</div>
        <div className="text-xs uppercase text-muted-foreground">Minutes</div>
      </div>
      <div className="flex flex-col items-center">
        <div className="text-3xl md:text-5xl font-bold">{timeLeft.seconds}</div>
        <div className="text-xs uppercase text-muted-foreground">Seconds</div>
      </div>
    </div>
  )
}
